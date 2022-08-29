import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Ribbon } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta;

const Template: Story = args => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args}>{args.children || 'Best Seller'}</Ribbon>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Best Seller'
};
