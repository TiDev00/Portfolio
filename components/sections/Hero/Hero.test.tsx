import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      initial: _i,
      animate: _a,
      transition: _t,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("Hero", () => {
  it("renders the name heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the resume link", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /view resume/i })).toBeInTheDocument();
  });

  it("renders the contact link", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /get in touch/i })).toBeInTheDocument();
  });
});
