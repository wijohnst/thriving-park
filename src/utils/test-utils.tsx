// Global Imports
import React, { ReactElement } from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";


// Local Imports
import { store } from "app/store";
import { defaultTheme } from 'themes';


const render = (ui: ReactElement, renderOptions?: RenderOptions) => {
  const Wrapper : React.FC = ({ children }) => {
    return (
      <Provider store={store}>
				<ThemeProvider theme={defaultTheme}>
            {children}
				</ThemeProvider>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };