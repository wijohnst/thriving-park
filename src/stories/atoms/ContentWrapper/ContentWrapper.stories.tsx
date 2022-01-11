// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { ContentWrapper } from 'stories/atoms/ContentWrapper/ContentWrapper';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/ContentWrapper',
  component: ContentWrapper,
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
} as ComponentMeta<typeof ContentWrapper>;

const Template: ComponentStory<typeof ContentWrapper> = (args) => (
  <ContentWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {};
