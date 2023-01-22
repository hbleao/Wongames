import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Base } from '.';

import { BaseProps } from './types';

export default {
  title: 'Templates/Base',
  component: Base
} as Meta;

const Template: Story<BaseProps> = args => <Base {...args} />;

export const Default = Template.bind({});
