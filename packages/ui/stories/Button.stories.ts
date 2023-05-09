import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '..';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
} satisfies Story;

export const Secondary = {
  args: {
    label: 'Button',
  },
} satisfies Story;

export const Large = {
  args: {
    size: 'large',
    label: 'Button'
  },
} satisfies Story;

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
} satisfies Story;
