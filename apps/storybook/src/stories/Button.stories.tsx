import type { Meta, StoryObj } from "@storybook/react-vite";
import { Search, Plus, Trash2, ArrowRight } from "lucide-react";

import { Button } from "@chavesete/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Botão",
    disabled: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Estilo visual do botão"
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Tamanho do botão"
    },
    disabled: {
      control: "boolean",
      description: "Desabilita interações"
    },
    children: {
      control: "text",
      description: "Conteúdo do botão"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { variant: "default" }
};

export const Secondary: Story = {
  args: { variant: "secondary" }
};

export const Destructive: Story = {
  args: { variant: "destructive" }
};

export const Outline: Story = {
  args: { variant: "outline" }
};

export const Ghost: Story = {
  args: { variant: "ghost" }
};

export const Link: Story = {
  args: { variant: "link" }
};

export const Small: Story = {
  args: { size: "sm", children: "Pequeno" }
};

export const Large: Story = {
  args: { size: "lg", children: "Grande" }
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <Plus size={16} />,
    "aria-label": "Adicionar"
  }
};

export const WithLeadingIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Search size={16} />
      Buscar
    </Button>
  )
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <Button {...args}>
      Continuar
      <ArrowRight size={16} />
    </Button>
  )
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Deletar">
        <Trash2 size={16} />
      </Button>
    </div>
  )
};
