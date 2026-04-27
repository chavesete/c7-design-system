# @chavesete/ui

Componentes web do Design System da Chave7 (React + Tailwind).

## Instalação

```bash
npm i @chavesete/ui @chavesete/tokens @chavesete/tailwind-preset
```

## Uso

```tsx
import { Button, Card, IconHome } from "@chavesete/ui";

export function Example() {
  return (
    <Card className="p-4">
      <Button className="gap-2">
        <IconHome />
        Home
      </Button>
    </Card>
  );
}
```

## Dependências de tema (web)

- Adicione `c7WebPreset` no `tailwind.config`.
- Importe `@chavesete/tokens/styles.css` no CSS global do app.
