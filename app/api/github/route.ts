import { NextResponse } from "next/server";
import { getPinnedRepos } from "@/lib/github";

// Revalidate once per hour
export const revalidate = 3600;

export async function GET() {
  try {
    const projects = await getPinnedRepos();
    return NextResponse.json(projects);
  } catch (error) {
    console.error("[api/github/pinned]", error);
    return NextResponse.json({ message: "Failed to fetch pinned repositories" }, { status: 500 });
  }
}
