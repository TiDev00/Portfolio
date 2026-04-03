import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Nav } from "./Nav";

// Mock next/navigation
vi.mock("next/navigation", () => ({ usePathname: () => "/" }));

describe("Nav", () => {
  it("renders the logo", () => {
    render(<Nav />);
    expect(
      screen.getByRole("link", { name: /thierno ibrahima/i }),
    ).toBeInTheDocument();
  });

  it("renders all nav links on desktop", () => {
    render(<Nav />);
    expect(screen.getAllByRole("link", { name: "Home" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Experience" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Education" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Projects" })).toBeTruthy();
    expect(screen.getAllByRole("link", { name: "Contact" })).toBeTruthy();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });
});
