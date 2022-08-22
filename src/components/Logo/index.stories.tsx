import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Logo } from '.';
import { LogoProps } from './types';

export default {
  title: 'Logo',
  component: Logo
} as Meta;

const Template: Story<LogoProps> = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'white',
  size: 'normal',
  hideOnMobile: false
};
