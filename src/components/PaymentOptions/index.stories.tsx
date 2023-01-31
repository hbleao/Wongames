import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PaymentOptions } from '.';
import { mockPaymentOptions } from './mock';

import { PaymentOptionsProps } from './types';

export default {
  title: 'components/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockPaymentOptions
  },
  argTypes: {
    cards: {
      type: 'symbol'
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<PaymentOptionsProps> = args => (
  <div style={{ width: 400 }}>
    <PaymentOptions {...args} />
  </div>
);

export const Default = Template.bind({});
