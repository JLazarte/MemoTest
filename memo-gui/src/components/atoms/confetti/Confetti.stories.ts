import type { Meta, StoryObj } from '@storybook/react';

import { Confetti } from './Confetti';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Confetti> = {
  title: 'Example/Confetti',
  component: Confetti,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Confetti>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {

};
