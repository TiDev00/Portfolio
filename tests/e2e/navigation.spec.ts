import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navigates to Projects page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Projects" }).first().click();
    await expect(page).toHaveURL(/\/projects/);
    await expect(page.getByRole("heading", { name: /projects/i })).toBeVisible();
  });

  test("navigates to Experience page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Experience" }).first().click();
    await expect(page).toHaveURL(/\/experience/);
  });

  test("navigates to Education page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Education" }).first().click();
    await expect(page).toHaveURL(/\/education/);
  });

  test("navigates to Contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test("opens and closes mobile menu", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /open menu/i });
    await menuButton.click();
    await expect(page.getByRole("button", { name: /close menu/i })).toBeVisible();
    await page.getByRole("button", { name: /close menu/i }).click();
    await expect(menuButton).toBeVisible();
  });
});

test.describe("Projects page", () => {
  test("opens project detail modal", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByText("Wolof_SpellChecker")).toBeVisible();
    await page.getByRole("button", { name: /details.*wolof/i }).first().click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: /close dialog/i }).click();
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });
});
