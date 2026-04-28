import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider } from "@chavesete/ui";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80 py-4">
        <Story />
      </div>
    )
  ],
  argTypes: {
    min: {
      control: "number",
      description: "Valor mínimo"
    },
    max: {
      control: "number",
      description: "Valor máximo"
    },
    step: {
      control: "number",
      description: "Incremento por passo"
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o slider"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1
  }
};

export const Range: Story = {
  args: {
    defaultValue: [20, 80],
    min: 0,
    max: 100,
    step: 1
  }
};

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    disabled: true
  }
};

export const WithSteps: Story = {
  args: {
    defaultValue: [0],
    min: 0,
    max: 100,
    step: 25
  }
};

export const ControlledSingle: Story = {
  render: (args) => {
    const [value, setValue] = React.useState([30]);
    return (
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-c7-muted-foreground">Volume</span>
          <span className="font-medium">{value[0]}%</span>
        </div>
        <Slider {...args} value={value} onValueChange={setValue} />
      </div>
    );
  }
};

export const ControlledRange: Story = {
  render: (args) => {
    const [range, setRange] = React.useState([20, 80]);
    return (
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-c7-muted-foreground">Faixa de preço</span>
          <span className="font-medium">
            R$ {range[0]} – R$ {range[1]}
          </span>
        </div>
        <Slider
          {...args}
          value={range}
          onValueChange={setRange}
          min={0}
          max={500}
          step={10}
        />
        <div className="flex justify-between text-xs text-c7-muted-foreground">
          <span>R$ 0</span>
          <span>R$ 500</span>
        </div>
      </div>
    );
  }
};

export const WithLabels: Story = {
  render: () => {
    const [value, setValue] = React.useState([60]);
    const labels = ["Ruim", "Regular", "Bom", "Ótimo", "Excelente"];
    const index = Math.round((value[0] / 100) * (labels.length - 1));
    return (
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-c7-muted-foreground">Satisfação</span>
          <span className="font-medium text-c7-primary">{labels[index]}</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={0} max={100} step={1} />
        <div className="flex justify-between text-xs text-c7-muted-foreground">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
    );
  }
};
