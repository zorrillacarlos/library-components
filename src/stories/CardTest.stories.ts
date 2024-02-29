import type { Meta, StoryObj } from "@storybook/vue3";
import Card from '../../components/CardTest/CardComponent.vue'

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const CardComponent: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    title: "Primary",
    subtext: "Enter Text",
  },
};
