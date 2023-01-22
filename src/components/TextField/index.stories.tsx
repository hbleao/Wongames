import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextField } from '.';
import { TextFieldProps } from './types';
import { Email } from '@styled-icons/material-outlined';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    icon: {
      type: 'symbol'
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    },
    onInput: {
      type: 'symbol'
    }
  }
} as Meta;

const Template: Story<TextFieldProps> = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelFor: 'Email',
  labelText: 'E-mail',
  initialValue: '',
  placeholder: 'jhon.doe@gmail.com'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  labelFor: 'Email',
  labelText: 'E-mail',
  icon: <Email />,
  iconPosition: 'left',
  placeholder: 'jhon.doe@gmail.com'
};

export const Error = Template.bind({});
Error.args = {
  labelFor: 'Email',
  labelText: 'E-mail',
  icon: <Email />,
  iconPosition: 'right',
  errorMessage: 'Something wrong!!!',
  placeholder: 'jhon.doe@gmail.com'
};
