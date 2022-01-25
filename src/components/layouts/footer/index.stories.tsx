import { Meta, Story } from '@storybook/react';

import { Footer } from '.';

export default {
  title: 'Layouts/Footer',
  component: Footer,
} as Meta;

export const Basic: Story = args => <Footer {...args} />;
