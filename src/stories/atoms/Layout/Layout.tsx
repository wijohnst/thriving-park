// Global Imports
import * as React from 'react';

// Local Imports
import { LayoutWrapper } from 'stories/atoms/Layout/Layout.style';

interface Props {
  children: Array<React.ReactElement> | React.ReactElement;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Layout = ({ children }: Props) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};
