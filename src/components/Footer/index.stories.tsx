import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer
} as Meta;

const Template: Story = args => (
  <div>
    <Footer {...args} />
  </div>
);

export const Default = Template.bind({});
