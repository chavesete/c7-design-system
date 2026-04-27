import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { enUS } from "date-fns/locale";

import { DatePicker } from "@chavesete/ui";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    placeholder: "Selecione uma data",
    disabled: false
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido quando nenhuma data está selecionada"
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o seletor de data"
    },
    dateFormat: {
      control: "text",
      description: "Formato de exibição da data (padrão date-fns: PPP)"
    }
  }
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DatePicker {...args} value={date} onValueChange={setDate} />;
  }
};

export const WithValue: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker {...args} value={date} onValueChange={setDate} />;
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => {
    return <DatePicker {...args} value={new Date()} />;
  }
};

export const EnglishLocale: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        {...args}
        value={date}
        onValueChange={setDate}
        locale={enUS}
        placeholder="Pick a date"
        dateFormat="MMMM d, yyyy"
      />
    );
  }
};

export const WithLabel: Story = {
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Data de nascimento</label>
        <DatePicker
          {...args}
          value={date}
          onValueChange={setDate}
          placeholder="dd/mm/aaaa"
          dateFormat="dd/MM/yyyy"
          className="w-full"
        />
        <p className="text-xs text-muted-foreground">
          Conforme documento de identidade.
        </p>
      </div>
    );
  }
};

export const CustomFormat: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">Formato PPP (padrão)</p>
          <DatePicker value={date} onValueChange={setDate} dateFormat="PPP" />
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">dd/MM/yyyy</p>
          <DatePicker
            value={date}
            onValueChange={setDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">MMMM yyyy</p>
          <DatePicker
            value={date}
            onValueChange={setDate}
            dateFormat="MMMM yyyy"
          />
        </div>
      </div>
    );
  }
};
