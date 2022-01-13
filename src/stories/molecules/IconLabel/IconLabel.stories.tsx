// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/ Molecules/IconLabel',
  component: IconLabel,
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
} as ComponentMeta<typeof IconLabel>;

const Template: ComponentStory<typeof IconLabel> = (args) => (
  <IconLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  // eslint-disable-next-line no-console
  onClick: () => console.log('Click'),
};

export const WithColor = Template.bind({});
WithColor.args = {
  ...Default.args,
  iconColor: defaultTheme.brightGreen,
};
