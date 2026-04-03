import type { Meta, StoryObj } from "@storybook/react";
import { ProjectsSection } from "./Projects";

const meta: Meta<typeof ProjectsSection> = {
  title: "Sections/Projects",
  component: ProjectsSection,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof ProjectsSection>;

export const Default: Story = {};
