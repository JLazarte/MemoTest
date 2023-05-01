import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Section> = {
  title: 'Example/Seccion',
  component: Section,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Section>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Demo: Story = {
  render: () => <Section>
    <h1>Title</h1>
    <p>Text info</p>
  </Section>
};