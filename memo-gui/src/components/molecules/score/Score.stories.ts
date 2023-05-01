import type { Meta, StoryObj } from '@storybook/react';

import { Score } from './Score';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Score> = {
  title: 'Example/Score',
  component: Score,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Score>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {
  args: {
    values: [ 99999, 100, 24, 4]
  },
};