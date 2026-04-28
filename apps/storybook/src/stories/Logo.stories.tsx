import type { Meta, StoryObj } from "@storybook/react-vite";

import { Logo } from "@chavesete/ui";

const meta: Meta<typeof Logo> = {
  title: "Brand/Logo",
  component: Logo,
  tags: ["autodocs"],
  args: {
    type: "full",
    size: "md",
    variant: "default"
  },
  argTypes: {
    type: {
      control: "select",
      options: ["full", "mark", "text"],
      description: "Exibe o ícone, o nome ou ambos"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho do logo"
    },
    variant: {
      control: "select",
      options: ["default", "white"],
      description: "Variante de cor"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Mark: Story = {
  args: { type: "mark" }
};

export const TextOnly: Story = {
  args: { type: "text" }
};

export const White: Story = {
  render: (args) => (
    <div className="bg-c7-primary p-6 rounded-lg inline-block">
      <Logo {...args} variant="white" />
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 items-start">
      <Logo size="sm" />
      <Logo size="md" />
      <Logo size="lg" />
    </div>
  )
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Logo type="full" />
      <Logo type="mark" />
      <Logo type="text" />
    </div>
  )
};

export const DarkBackground: Story = {
  render: () => (
    <div className="bg-c7-foreground p-8 rounded-lg flex gap-8 items-center">
      <Logo variant="white" size="sm" />
      <Logo variant="white" size="md" />
      <Logo variant="white" size="lg" />
    </div>
  )
};
