import { Meta, Story } from '@storybook/react';

import { AppLayout } from '.';

export default {
  title: 'Layout/AppLayout',
  component: AppLayout,
} as Meta;

export const Basic: Story = args => <AppLayout {...args} />;
