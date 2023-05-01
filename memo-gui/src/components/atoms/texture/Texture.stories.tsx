import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Texture } from './Texture';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Texture> = {
  title: 'Example/Texture',
  component: Texture,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Texture>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Carbon: Story = {
  render: () => <div style={{
    width: '100%',
    height: '100vh'
  }}>
    <Texture type='carbon' />
  </div>
};

export const Upholstery: Story = {
  render: () => <div style={{
    width: '100%',
    height: '100vh'
  }}>
    <Texture type='upholstery' />
  </div>
};

export const Leather: Story = {
  render: () => <div style={{
    width: '100%',
    height: '100vh'
  }}>
    <Texture type='leather' />
  </div>
};
