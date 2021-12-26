import { withThemesProvider } from "themeprovider-storybook";

import { defaultTheme } from '../src/themes'

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

export const decorators = [withThemesProvider(themes)];