import { Meta, Story } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
} as Meta;

export const Basic: Story = args => <Input {...args} />;
