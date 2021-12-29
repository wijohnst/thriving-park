import { withThemesProvider } from "themeprovider-storybook";
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { defaultTheme } from '../src/themes'

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themes = [
	defaultTheme,
]

export const decorators = [withThemesProvider(themes), mswDecorator];