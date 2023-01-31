import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CartList } from '.';

import { mockCartList } from './mock';

import { CartListProps } from './types';

export default {
  title: 'components/CartList',
  component: CartList,
  args: {
    items: mockCartList,
    total: '344,90'
  },
  argTypes: {
    items: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<CartListProps> = args => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);

export const Default = Template.bind({});
