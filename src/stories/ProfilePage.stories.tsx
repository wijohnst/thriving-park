import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Auth0Provider } from '@auth0/auth0-react';

import { ProfilePage } from 'stories/ProfilePage';
import { TestUser } from 'utils/constants';
// import { defaultTheme } from 'themes';
// import { standardWrapper } from 'stories/decoratorStyles';

const { REACT_APP_AUTH_0_DOMAIN = '', REACT_APP_AUTH_0_CLIENT_ID = '' } =
  process.env;
export default {
  title: 'Design System/Pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    (Story) => (
      <Auth0Provider
        domain={REACT_APP_AUTH_0_DOMAIN}
        clientId={REACT_APP_AUTH_0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Story />
      </Auth0Provider>
    ),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  isAuthenticated: true,
  user: TestUser,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  isAuthenticated: false,
  user: undefined,
};

export const NotLoggedIn = Template.bind({});
NotLoggedIn.args = {
  ...Default.args,
  isAuthenticated: false,
};
