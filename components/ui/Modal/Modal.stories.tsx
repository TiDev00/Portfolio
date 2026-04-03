import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const WithTrigger: Story = {
  args: {
    title: "Project Details",
    description: "Full description of the project.",
    trigger: <Button>Open Modal</Button>,
    children: <p>Modal content goes here.</p>,
  },
};

export const Controlled: Story = {
  args: {
    title: "Controlled Modal",
    open: true,
    children: <p>This modal is always open in the story.</p>,
  },
};
