# @chavesete/ui-native

Componentes mobile do Design System da Chave7 (React Native + NativeWind).

## Instalação

```bash
npm i @chavesete/ui-native @chavesete/tokens @chavesete/tailwind-preset
```

## Uso

```tsx
import { Button, Card, IconHome } from "@chavesete/ui-native";

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

## Dependências de tema (Expo)

- Adicione `c7NativePreset` no `tailwind.config` junto com `nativewind/preset`.
