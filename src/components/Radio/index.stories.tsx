import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Radio } from '.';
import { RadioProps } from './types';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

const Template: Story<RadioProps> = args => <Radio {...args} />;

export const Default = Template.bind({});

export const BlackLabel = Template.bind({});
BlackLabel.args = {
  labelText: 'Black label',
  labelFor: 'check'
};

export const WhiteLabel = Template.bind({});
WhiteLabel.args = {
  labelColor: 'white',
  labelText: 'White label',
  labelFor: 'check'
};
WhiteLabel.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
};

export const Multiple: Story<RadioProps> = args => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        labelText="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category2"
        labelText="Action 2"
        labelFor="action"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category3"
        labelText="Action 3"
        labelFor="action"
        {...args}
      />
    </div>
  </>
);
