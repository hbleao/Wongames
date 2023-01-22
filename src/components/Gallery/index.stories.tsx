import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Gallery } from '.';
import { mockGallery } from './mock';
import { GalleryProps } from './types';

export default {
  title: 'Components/Gallery',
  component: Gallery,
  args: {
    items: mockGallery
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta;

const Template: Story<GalleryProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
);

export const Default = Template.bind({});
