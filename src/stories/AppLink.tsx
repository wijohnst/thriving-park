// Global Imports
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Local Imports
import { AppLinkWrapper } from 'stories/AppLink.style';

interface Props {
  linkPath: string;
  linkText: string;
  isActive: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const AppLink = ({ linkPath, linkText, isActive }: Props) => {
  return (
    <AppLinkWrapper isActive={isActive}>
      <NavLink
        to={linkPath}
        style={{
          color: isActive ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)',
          textDecoration: 'none',
        }}
      >
        {linkText.toUpperCase()}
      </NavLink>
    </AppLinkWrapper>
  );
};
