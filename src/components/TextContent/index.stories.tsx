import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextContent } from '.';
import { TextContentProps } from './types';
import { mock } from './mock';

export default {
  title: 'Components/TextContent',
  component: TextContent,
  args: mock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<TextContentProps> = args => <TextContent {...args} />;

export const Default = Template.bind({});
