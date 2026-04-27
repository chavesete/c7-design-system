import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search } from "lucide-react";

import { Input } from "@chavesete/ui";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Digite algo...",
    disabled: false
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "number", "search", "url", "tel"],
      description: "Tipo do input HTML"
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder"
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o input"
    },
    value: {
      control: "text",
      description: "Valor controlado"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "Valor inicial"
  }
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@exemplo.com"
  }
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "0"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Campo desabilitado"
  }
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="relative w-64">
      <Search
        size={15}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <Input {...args} className="pl-8" placeholder="Buscar..." />
    </div>
  )
};

export const WithTrailingIcon: Story = {
  render: (args) => (
    <div className="relative w-64">
      <Input {...args} className="pr-9" placeholder="E-mail" type="email" />
      <Mail
        size={15}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  )
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-64 space-y-1.5">
      <label className="text-sm font-medium text-foreground" htmlFor="name">
        Nome completo
      </label>
      <Input id="name" {...args} placeholder="João da Silva" />
      <p className="text-xs text-muted-foreground">
        Como aparece no documento oficial.
      </p>
    </div>
  )
};

export const WithError: Story = {
  render: (args) => (
    <div className="w-64 space-y-1.5">
      <label className="text-sm font-medium text-foreground" htmlFor="email-err">
        E-mail
      </label>
      <Input
        id="email-err"
        {...args}
        type="email"
        defaultValue="invalido@"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-xs text-destructive">E-mail inválido.</p>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="w-64 space-y-3">
      <Input className="h-7 text-xs" placeholder="Extra pequeno" />
      <Input placeholder="Padrão (h-9)" />
      <Input className="h-11 text-base" placeholder="Grande" />
    </div>
  )
};
