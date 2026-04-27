import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInput } from "@chavesete/ui";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
  component: PasswordInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Senha",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto de placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o input",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "minha-senha-secreta",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "senha123",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-64 space-y-1.5">
      <label className="text-sm font-medium text-foreground" htmlFor="pwd">
        Senha
      </label>
      <PasswordInput id="pwd" {...args} placeholder="Mínimo 8 caracteres" />
      <p className="text-xs text-muted-foreground">
        Use letras, números e símbolos.
      </p>
    </div>
  ),
};

export const WithConfirmation: Story = {
  render: (args) => (
    <div className="w-64 space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium" htmlFor="new-pwd">
          Nova senha
        </label>
        <PasswordInput id="new-pwd" {...args} placeholder="Mínimo 8 caracteres" />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-medium" htmlFor="confirm-pwd">
          Confirmar senha
        </label>
        <PasswordInput id="confirm-pwd" placeholder="Repita a senha" />
      </div>
    </div>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <div className="w-64 space-y-1.5">
      <label className="text-sm font-medium" htmlFor="pwd-err">
        Senha
      </label>
      <PasswordInput
        id="pwd-err"
        {...args}
        defaultValue="123"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-xs text-destructive">
        A senha deve ter no mínimo 8 caracteres.
      </p>
    </div>
  ),
};
