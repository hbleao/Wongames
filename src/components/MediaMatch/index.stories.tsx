import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MediaMatch } from '.';

export default {
  title: 'Components/MediaMatch',
  component: MediaMatch
} as Meta;

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: Story = args => (
  <MediaMatch lessThan="medium" {...args}>
    Only on Mobile
  </MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
