import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactSection } from "./Contact";

// Mock fetch globally
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: async () => ({ message: "OK" }),
} as Response);

describe("ContactSection", () => {
  it("renders the contact form", () => {
    render(<ContactSection />);
    expect(screen.getByRole("form", { name: /contact form/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/name must be at least/i)).toBeInTheDocument();
    });
  });

  it("renders social media links", () => {
    render(<ContactSection />);
    // SocialMedia renders links; verify the container exists
    expect(screen.getByRole("list", { name: /social media links/i })).toBeInTheDocument();
  });
});
