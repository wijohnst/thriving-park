// Global Imports
import React from 'react';

// Local Imports
import { AppLink, AppLinkProps } from 'stories/AppLink';
import { NavBarWrapper } from './NavBar.styles';

interface Props {
  appLinks: Array<AppLinkProps>;
}

// eslint-disable-next-line no-empty-pattern
export const NavBar = ({ appLinks }: Props) => {
  return (
    <NavBarWrapper>
      {appLinks.map((appLink) => (
        <AppLink appLink={appLink} />
      ))}
    </NavBarWrapper>
  );
};
