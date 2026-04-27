import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@chavesete/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>
          Descrição com informações secundárias sobre o conteúdo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Conteúdo principal do card. Pode incluir qualquer elemento.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">
          Cancelar
        </Button>
        <Button size="sm">Confirmar</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[360px] p-6">
      <p className="text-sm font-semibold">Card simples</p>
      <p className="text-sm text-muted-foreground mt-1">
        Sem sub-componentes, apenas padding direto.
      </p>
    </Card>
  ),
};

export const WithStats: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-[600px]">
      {[
        { label: "Usuários", value: "12.483", delta: "+8.2%" },
        { label: "Receita", value: "R$ 48.290", delta: "+14.1%" },
        { label: "Conversão", value: "3,6%", delta: "-0.4%" },
      ].map(({ label, value, delta }) => (
        <Card key={label} className="p-5">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {label}
          </p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
          <p
            className={`mt-0.5 text-xs font-medium ${
              delta.startsWith("+") ? "text-green-600" : "text-destructive"
            }`}
          >
            {delta} vs mês anterior
          </p>
        </Card>
      ))}
    </div>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>
          Preencha os dados para criar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <label className="text-sm font-medium">Nome</label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Seu nome"
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">E-mail</label>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="email@exemplo.com"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Criar conta</Button>
      </CardFooter>
    </Card>
  ),
};
