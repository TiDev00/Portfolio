import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    expect(errors).toHaveLength(0);
  });

  test("has correct page title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Thierno/i);
  });

  test("displays hero heading", async ({ page }) => {
    await page.goto("/");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });

  test("displays skills section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("What I Do?")).toBeVisible();
  });

  test("nav links are visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: "Experience" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });
});
