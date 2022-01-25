import { Meta, Story } from '@storybook/react';

import { CurrencyCard } from '.';

export default {
  title: 'CurrencyCard',
  component: CurrencyCard,
} as Meta;

export const Basic: Story = args => <CurrencyCard {...args} />;
