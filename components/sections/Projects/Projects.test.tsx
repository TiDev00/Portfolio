import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectsSection } from "./Projects";

// Framer Motion doesn't animate in jsdom — use a passthrough mock
vi.mock("framer-motion", () => ({
  motion: {
    article: ({
      children,
      initial: _initial,
      animate: _animate,
      whileInView: _whileInView,
      viewport: _viewport,
      transition: _transition,
      ...props
    }: React.HTMLAttributes<HTMLElement> & Record<string, unknown>) => (
      <article {...props}>{children}</article>
    ),
    div: ({
      children,
      initial: _initial,
      animate: _animate,
      transition: _transition,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe("ProjectsSection", () => {
  it("renders section heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  });

  it("renders all projects", () => {
    render(<ProjectsSection />);
    expect(screen.getByText("Wolof_SpellChecker")).toBeInTheDocument();
    expect(screen.getByText("Covid19_Detector")).toBeInTheDocument();
    expect(screen.getByText("NMT_fr_en")).toBeInTheDocument();
  });

  it("renders GitHub link", () => {
    render(<ProjectsSection />);
    expect(
      screen.getByRole("link", { name: /more projects on github/i }),
    ).toBeInTheDocument();
  });
});
