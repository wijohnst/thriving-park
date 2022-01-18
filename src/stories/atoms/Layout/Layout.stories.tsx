import React from 'react';
import { rest } from 'msw';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider as ReduxProvider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';

import { Layout } from 'stories/atoms/Layout/Layout';
import { Primary as GrafHeader } from 'stories/molecules/GrafHeader/GrafHeader.stories';
import { Default as NavBar } from 'stories/molecules/NavBar/NavBar.stories';
import { Default as ProfilePage } from 'stories/pages/ProfilePage/ProfilePage.stories';
import sessionReducer from 'features/session/sessionSlice';
import { sessionApi } from 'features/session/sessionApi';
import { TestUser } from 'utils/constants';
import { AuthCTA } from 'stories/molecules/AuthCTA/AuthCTA';

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
          <Router>
            <Story />
          </Router>
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
  children: [
    <AuthCTA
      isAuthenticated={false}
      // eslint-disable-next-line no-console
      onClick={() => console.log('Handle Auth click...')}
    />,
    <GrafHeader isMobile={false} key={0} />,
    // @ts-ignore
    <NavBar appLinks={NavBar.args?.appLinks} />,
    <ProfilePage key={1} userId={undefined} />,
  ],
};
