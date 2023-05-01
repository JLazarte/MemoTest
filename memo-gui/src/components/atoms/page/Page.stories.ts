import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Page>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {
  args: {
    title: 'Hola'
  },
};