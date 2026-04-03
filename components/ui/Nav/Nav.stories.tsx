import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "UI/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/" } },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {};

export const ExperiencePage: Story = {
  parameters: { nextjs: { navigation: { pathname: "/experience" } } },
};
