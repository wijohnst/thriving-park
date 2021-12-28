/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';

import 'index.css';
import App from './App';
import { store } from './app/store';

const { REACT_APP_AUTH_0_DOMAIN = '', REACT_APP_AUTH_0_CLIENT_ID = '' } =
  process.env;

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('mocks/browser');
  worker.start({
    onUnhandledRequest: 'bypass',
    quiet: true,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_AUTH_0_DOMAIN}
      clientId={REACT_APP_AUTH_0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
