import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    icon: {
      type: 'symbol'
    },
    minimal: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    },
    as: {
      type: 'symbol'
    },
    onClick: {
      action: 'clicked'
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

export const Minimal: Story = args => (
  <Button {...args}>{args.children}</Button>
);
Minimal.args = {
  children: 'Buy Now',
  size: 'small',
  fullWidth: false,
  minimal: true,
  icon: <AddShoppingCart />
};

export const AsLink: Story = args => <Button {...args}>{args.children}</Button>;
AsLink.args = {
  children: 'Buy Now',
  size: 'large',
  as: 'a',
  href: '/link'
};

export const Disabled: Story = args => (
  <Button {...args}>{args.children}</Button>
);
Disabled.args = {
  children: 'Buy Now',
  size: 'large',
  disabled: true
};
