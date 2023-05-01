import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Hide: Story = {
  args: {
    state: 'hide',
    label: 'Card',
    backImage: '/cards/future.png',
    frontImage: '/cards/hands.png'
  },
};

export const Reveled: Story = {
  args: {
    state: 'revealed',
    label: 'Card',
    backImage: '/cards/future.png',
    frontImage: '/cards/hands.png'
  },
};

export const Highlighted: Story = {
  args: {
    state: 'highlighted',
    label: 'Card',
    backImage: '/cards/future.png',
    frontImage: '/cards/hands.png'
  },
};

export const Match: Story = {
  args: {
    state: 'matched',
    label: 'Card',
    backImage: '/cards/future.png',
    frontImage: '/cards/hands.png'
  },
};

export const Other: Story = {
  args: {
    size: 'small',
    label: 'Card',
    backImage: '/cards/future.png',
    frontImage: '/cards/hands.png'
  },
};
