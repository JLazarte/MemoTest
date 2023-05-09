import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './Loading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Loading> = {
  title: 'Example/Loading',
  component: Loading,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Loading>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {

};
