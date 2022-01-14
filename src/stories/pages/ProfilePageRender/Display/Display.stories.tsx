// Global Imports
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Local Imports
import { Display } from 'stories/pages/ProfilePageRender/Display/Display';
import { defaultTheme } from 'themes';
import { standardWrapper } from 'stories/decoratorStyles';

export default {
  title: 'Design System/Pages/ProfilePageRender/Display',
  component: Display,
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
} as ComponentMeta<typeof Display>;

const Template: ComponentStory<typeof Display> = (args) => (
  <Display {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userInfo: {
    userName: 'Will Johnston',
    neighborType: 'Resident',
    neighborDate: new Date('05/18/2018'),
    userBlurb:
      'Sunt Lorem sint sit in in aliquip ipsum. Enim labore aute excepteur laboris cillum laborum consequat ad voluptate laborum esse qui dolore exercitation. Sint irure elit consectetur id amet fugiat sunt sunt aliqua excepteur tempor id voluptate ullamco.',
  },
  // eslint-disable-next-line no-console
  onClick: () => console.log('Handle edit click'),
};

export const WithPicture = Template.bind({});
WithPicture.args = {
  ...Default.args,
  profilePictureURL:
    'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
};

export const IncompleteUserInformation = Template.bind({});
IncompleteUserInformation.args = {
  ...Default.args,
  userInfo: {
    userName: 'Will Johnston',
    neighborType: undefined,
    neighborDate: undefined,
    userBlurb: '',
  },
};
