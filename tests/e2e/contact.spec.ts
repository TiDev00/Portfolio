import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("displays the contact form", async ({ page }) => {
    await expect(page.getByRole("form", { name: /contact form/i })).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    await page.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByText(/name must be at least/i)).toBeVisible();
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test("validates email format", async ({ page }) => {
    await page.getByLabel("Name").fill("Thierno");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByRole("button", { name: /send message/i }).click();
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test("submits form successfully with valid data", async ({ page }) => {
    // Mock the API route to avoid real network calls
    await page.route("/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Message received." }),
      });
    });

    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Subject").fill("Test Subject");
    await page.getByLabel("Message").fill("This is a test message with enough length.");
    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText(/message received/i)).toBeVisible();
  });
});
