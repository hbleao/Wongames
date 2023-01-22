import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TemplateSignUp } from '.';

export default {
  title: 'Templates/SignUp',
  component: TemplateSignUp
} as Meta;

const Template: Story = args => <TemplateSignUp {...args} />;

export const Default = Template.bind({});
