import type { Meta, StoryObj } from '@storybook/react';

import { GameBoard } from './GameBoard';

const meta: Meta<typeof GameBoard> = {
  title: 'Example/GameBoard',
  component: GameBoard,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof GameBoard>;


export const Win: Story = {
  render: () => <GameBoard score={100}><span>game</span></GameBoard>
};


export const Play: Story = {
  render: () => <GameBoard><span>game</span></GameBoard>
};