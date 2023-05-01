import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Example/Flex',
  component: Flex,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Flex>;


const drawSpan = (idx: number) => <div style={{
  width: '100%',
  height: '100%',
  minWidth: '160px',
  backgroundColor: 'gray',
  border: '1px solid black'
}}>Item {idx}</div>


export const Row: Story = {
  args: {
    children: Array(5).fill(0).map((_,idx) => drawSpan(idx))
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: Array(5).fill(0).map((_,idx) => drawSpan(idx))
  },
};

export const Grid: Story = {
  args: {
    direction: 'grid',
    children: Array(8).fill(0).map((_,idx) => drawSpan(idx))
  },
};


export const FlexGrid: Story = {
  args: {
    direction: 'flex-grid',
    children: Array(8).fill(0).map((_,idx) => drawSpan(idx))
  },
};

export const OffsetGrid: Story = {
  render: (args: any) => <div style={{ height: '400px'}}>
    <Flex
      direction='offset-grid'
    >
      {Array(13).fill(0).map((_,idx) => drawSpan(idx))}
    </Flex>
  </div>
};