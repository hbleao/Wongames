import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      type: 'symbol'
    }
  }
} as Meta;

export const Default: Story = args => (
  <Button {...args}>{args.children}</Button>
);
Default.args = {
  children: 'Buy Now',
  size: 'medium',
  fullWidth: false
};

export const WithIcon: Story = args => (
  <Button {...args}>{args.children}</Button>
);
WithIcon.args = {
  children: 'Buy Now',
  size: 'small',
  fullWidth: false,
  icon: <AddShoppingCart />
};

export const AsLink: Story = args => <Button {...args}>{args.children}</Button>;
AsLink.args = {
  children: 'Buy Now',
  size: 'large',
  as: 'a',
  href: '/link'
};
