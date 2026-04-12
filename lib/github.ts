import { graphql } from "@octokit/graphql";
import type { OpenSourceStats, Project } from "./types";

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

interface PublicGitHubUserResponse {
  public_repos?: number;
  followers?: number;
  created_at?: string;
}

const OPEN_SOURCE_STATS_FALLBACK: OpenSourceStats = {
  publicRepos: 65,
  followers: 25,
  yearsActive: "8+",
};

function getYearsActive(createdAt?: string): string {
  if (!createdAt) {
    return OPEN_SOURCE_STATS_FALLBACK.yearsActive;
  }

  const createdYear = new Date(createdAt).getUTCFullYear();
  const currentYear = new Date().getUTCFullYear();
  const yearsActive = Math.max(1, currentYear - createdYear);

  return `${yearsActive}+`;
}

export async function getOpenSourceStats(): Promise<OpenSourceStats> {
  const username = process.env.GITHUB_USERNAME ?? "TiDev00";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!response.ok) {
      console.error(`[github] failed to fetch public profile stats: ${response.status}`);
      return OPEN_SOURCE_STATS_FALLBACK;
    }

    const data = (await response.json()) as PublicGitHubUserResponse;

    return {
      publicRepos:
        typeof data.public_repos === "number"
          ? data.public_repos
          : OPEN_SOURCE_STATS_FALLBACK.publicRepos,
      followers:
        typeof data.followers === "number" ? data.followers : OPEN_SOURCE_STATS_FALLBACK.followers,
      yearsActive: getYearsActive(data.created_at),
    };
  } catch (error: unknown) {
    console.error("[github] failed to fetch public profile stats", error);
    return OPEN_SOURCE_STATS_FALLBACK;
  }
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
