import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'themes';
import * as serviceWorker from './serviceWorker';

import 'index.css';
import App from './App';
import { store } from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4olqi98q.us.auth0.com"
      clientId="32l6BPujT1g1wOzHkBf9dSsFaMEuO7lN "
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
