import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@chavesete/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Botão"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Destructive: Story = {
  args: {
    variant: "destructive"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
};
