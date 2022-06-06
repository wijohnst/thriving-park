// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { CTALink } from 'stories/atoms/CTALink/CTALink';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Atoms/CTALink',
  component: CTALink,
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
} as ComponentMeta<typeof CTALink>;

const Template: ComponentStory<typeof CTALink> = (args) => (
  <CTALink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Call-to-Action Link',
  // eslint-disable-next-line no-console
  onClick: () => console.log('CTALink clicked...'),
};

export const HideUnderline = Template.bind({});
HideUnderline.args = {
  ...Default.args,
  hideUnderline: true,
};

export const WithColor = Template.bind({});
WithColor.args = {
  ...Default.args,
  color: defaultTheme.brightGreen,
};
