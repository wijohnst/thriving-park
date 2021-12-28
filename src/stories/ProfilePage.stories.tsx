import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider as ReduxProvider } from 'react-redux';

import { ProfilePage } from 'stories/ProfilePage';
import { store } from 'app/store';

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
        <ReduxProvider store={store}>
          <Story />
        </ReduxProvider>
      </Auth0Provider>
    ),
  ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
