import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GameInfo } from '.';

import { GameInfoProps } from './types';

export default {
  title: 'Components/GameInfo',
  component: GameInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    title: 'Borderlands 3',
    description:
      'Agora é a hora de eliminar Handsome Jack.  Reúna seus amigos para correr desenfreadamente pelo mundo coletando milhões de iten.',
    price: '215,00'
  }
} as Meta;

const Template: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
);

export const Default = Template.bind({});
