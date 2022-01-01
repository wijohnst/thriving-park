import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rest } from 'msw';

import { ProfilePage } from 'stories/ProfilePage';
import { sessionApi } from 'features/session/sessionApi';
import sessionReducer from 'features/session/sessionSlice';
import { TestUser } from 'utils/constants';

const store = configureStore({
  reducer: {
    session: sessionReducer,
    [sessionApi.reducerPath]: sessionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionApi.middleware),
  preloadedState: {
    session: {
      isAuthenticated: true,
      isAuthLoading: false,
      user: TestUser,
    },
  },
});

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
  <ProfilePage {...args} userId={undefined} />
);

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get('/users', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            profileURI:
              'https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg',
          })
        );
      }),
    ],
  },
};
