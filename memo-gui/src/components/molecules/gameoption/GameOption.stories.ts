import type { Meta, StoryObj } from '@storybook/react';

import { GameOption } from './GameOption';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof GameOption> = {
  title: 'Example/GameOption',
  component: GameOption,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof GameOption>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const NoScore: Story = {
  args: {
    name: 'Juego de Prueba',
    link: '.'
  },
};

export const Played: Story = {
  args: {
    name: 'Juego de Prueba',
    played: true,
    link: '.'
  },
};

export const PlayedWithScore: Story = {
  args: {
    name: 'Juego de Prueba',
    played: true,
    score: 1000,
    link: '.'
  },
};