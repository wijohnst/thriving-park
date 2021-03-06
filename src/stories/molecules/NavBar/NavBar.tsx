// Global Imports
import React from 'react';

// Local Imports
import { AppLink, AppLinkProps } from 'stories/atoms/AppLink/AppLink';
import { NavBarWrapper } from 'stories/molecules/NavBar/NavBar.styles';

interface Props {
  appLinks: Array<AppLinkProps>;
}

// eslint-disable-next-line no-empty-pattern
export const NavBar = ({ appLinks }: Props) => {
  return (
    <NavBarWrapper>
      {appLinks.map((appLink) => (
        <AppLink appLink={appLink} key={`navBar-${appLink.linkText}`} />
      ))}
    </NavBarWrapper>
  );
};
