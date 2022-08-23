import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu
} as Meta;

const Template: Story = args => <Menu {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};

Default.args = {
  username: ''
};
