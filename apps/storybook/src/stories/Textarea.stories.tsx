import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "@chavesete/ui";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "Digite aqui...",
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto de placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o textarea",
    },
    rows: {
      control: "number",
      description: "Número de linhas visíveis",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue:
      "Este é um conteúdo de exemplo para o textarea. Pode ter múltiplas linhas.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Campo desabilitado.",
  },
};

export const TallRows: Story = {
  args: {
    rows: 8,
    placeholder: "Escreva um texto longo...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-80 space-y-1.5">
      <label className="text-sm font-medium text-foreground" htmlFor="bio">
        Biografia
      </label>
      <Textarea id="bio" {...args} placeholder="Conte um pouco sobre você..." />
      <p className="text-xs text-muted-foreground">Máximo 200 caracteres.</p>
    </div>
  ),
};

export const WithCharCounter: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const max = 200;
    return (
      <div className="w-80 space-y-1.5">
        <label className="text-sm font-medium" htmlFor="counter-ta">
          Mensagem
        </label>
        <Textarea
          id="counter-ta"
          value={value}
          onChange={(e) => setValue(e.target.value.slice(0, max))}
          placeholder="Digite sua mensagem..."
        />
        <p
          className={`text-xs text-right ${
            value.length >= max ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {value.length}/{max}
        </p>
      </div>
    );
  },
};

export const WithError: Story = {
  render: (args) => (
    <div className="w-80 space-y-1.5">
      <label className="text-sm font-medium" htmlFor="ta-err">
        Descrição
      </label>
      <Textarea
        id="ta-err"
        {...args}
        className="border-destructive focus-visible:ring-destructive"
        placeholder="Campo obrigatório"
      />
      <p className="text-xs text-destructive">Este campo é obrigatório.</p>
    </div>
  ),
};

