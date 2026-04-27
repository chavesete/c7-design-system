import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { IconHome } from "@chavesete/ui";

const meta: Meta<typeof IconHome> = {
  title: "Icons/Home",
  component: IconHome,
  args: {
    size: 24
  }
};

export default meta;

type Story = StoryObj<typeof IconHome>;

export const Default: Story = {
  render: (args: ComponentProps<typeof IconHome>) => (
    <div className="flex items-center gap-3 p-4">
      <IconHome {...args} />
      <span className="text-sm">Home</span>
    </div>
  )
};
