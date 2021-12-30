import React from 'react';
import { rest } from 'msw';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider as ReduxProvider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { configureStore } from '@reduxjs/toolkit';

import { Layout } from 'stories/Layout';
import { Primary } from 'stories/GrafHeader.stories';
import { Default as ProfilePage } from 'stories/ProfilePage.stories';
import sessionReducer from 'features/session/sessionSlice';
import { sessionApi } from 'features/session/sessionApi';
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
  title: 'Design System/Atoms/Layout',
  component: Layout,
  decorators: [
    (Story) => (
      <Auth0Provider
        domain={REACT_APP_AUTH_0_DOMAIN}
        clientId={REACT_APP_AUTH_0_CLIENT_ID}
        redierUri={window.location.origin}
      >
        <ReduxProvider store={store}>
          <Story />
        </ReduxProvider>
      </Auth0Provider>
    ),
  ],
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get('/user', (req, res, ctx) => {
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
Default.args = {
  children: [<Primary isMobile={false} key={0} />, <ProfilePage key={1} />],
};
