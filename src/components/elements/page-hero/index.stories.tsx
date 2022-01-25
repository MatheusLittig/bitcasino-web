import { Meta, Story } from '@storybook/react';

import { PageHero } from '.';

export default {
  title: 'PageHero',
  component: PageHero,
} as Meta;

export const Basic: Story = args => <PageHero {...args} />;
