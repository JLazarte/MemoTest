import type { Meta, StoryObj } from '@storybook/react';

import { MemoGame } from './MemoGame';

const meta: Meta<typeof MemoGame> = {
  title: 'Example/MemoGame',
  component: MemoGame,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MemoGame>;


const drawCard = (name: 'hands' | 'sky') => ({
  label: name,
  backImage: '/cards/future.png',
  frontImage: `/cards/${name}.png`
})


export const Demo: Story = {
  args: {
    cards: Array(15).fill(0).map(_ => [ drawCard('hands'), drawCard('sky')]).flat()
  },
};
