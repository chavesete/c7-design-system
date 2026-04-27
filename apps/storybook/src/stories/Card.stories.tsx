import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { Card } from "@chavesete/ui";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    className: "p-4"
  }
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <Card {...args}>
      <div className="text-sm font-semibold">Card</div>
      <div className="text-sm text-muted-foreground">
        Conteúdo do card com tokens do DS.
      </div>
    </Card>
  )
};
