// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Loading } from 'stories/molecules/Loading/Loading';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/ Molecules/Loading',
  component: Loading,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: defaultTheme.primaryBlue,
          ...standardWrapper,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

export const Default = Template.bind({});
Default.args = {};
