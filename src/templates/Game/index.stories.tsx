import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Game } from '.';

export default {
  title: 'Game',
  component: Game
} as Meta;

const Template: Story = args => <Game {...args} />;

export const Default = Template.bind({});
