import type { Meta, StoryObj } from '@storybook/react';

import { Fireworks } from './Fireworks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Fireworks> = {
  title: 'Example/Fireworks',
  component: Fireworks,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Fireworks>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {

};
