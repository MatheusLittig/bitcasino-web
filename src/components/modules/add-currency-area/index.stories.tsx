import { Meta, Story } from '@storybook/react';

import { AddCurrencyArea } from '.';

export default {
  title: 'AddCurrencyArea',
  component: AddCurrencyArea,
} as Meta;

export const Basic: Story = args => (
  <AddCurrencyArea
    {...args}
    onAddCurrency={() => Promise.resolve()}
    isLoading={true}
  />
);
