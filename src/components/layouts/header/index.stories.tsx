import { Meta, Story } from '@storybook/react';

import { Header } from '.';

export default {
  title: 'Layouts/Header',
  component: Header,
} as Meta;

export const Basic: Story = args => <Header {...args} />;
