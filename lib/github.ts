import { graphql } from "@octokit/graphql";
import type { Project } from "./types";

interface PinnedRepoNode {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  createdAt: string;
  languages: {
    nodes: { name: string }[];
  };
}

interface PinnedItemsResponse {
  user: {
    pinnedItems: {
      nodes: PinnedRepoNode[];
    };
  };
}

export async function getPinnedRepos(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token) {
    console.error("[github] GITHUB_TOKEN is not set");
    return [];
  }
  if (!username) {
    console.error("[github] GITHUB_USERNAME is not set");
    return [];
  }

  const { user } = await graphql<PinnedItemsResponse>(
    `
      query PinnedRepos($username: String!) {
        user(login: $username) {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            nodes {
              ... on Repository {
                name
                description
                url
                stargazerCount
                forkCount
                createdAt
                languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
    {
      username,
      headers: {
        authorization: `token ${token}`,
      },
    },
  );

  return user.pinnedItems.nodes.map((repo) => ({
    name: repo.name,
    createdAt: repo.createdAt,
    description: repo.description ?? "",
    starCount: repo.stargazerCount,
    forkCount: repo.forkCount,
    url: repo.url,
    languages: repo.languages.nodes.map((l) => l.name),
  }));
}
