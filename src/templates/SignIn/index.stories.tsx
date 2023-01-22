import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TemplateSignIn } from '.';

export default {
  title: 'Templates/SignIn',
  component: TemplateSignIn
} as Meta;

const Template: Story = args => <TemplateSignIn {...args} />;

export const Default = Template.bind({});
