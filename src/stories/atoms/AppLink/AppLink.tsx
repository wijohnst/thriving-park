// Global Imports
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Local Imports
import {
  AppLinkWrapper,
  AppLinkText,
} from 'stories/atoms/AppLink/AppLink.style';

export interface AppLinkProps {
  linkPath: string;
  linkText: string;
  isActive: boolean;
}
interface Props {
  appLink: AppLinkProps;
}

// eslint-disable-next-line no-empty-pattern
export const AppLink = ({
  appLink: { linkPath, linkText, isActive },
}: Props) => {
  return (
    <AppLinkWrapper isActive={isActive}>
      <NavLink
        to={linkPath}
        style={{
          color: isActive ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.4)',
          textDecoration: 'none',
        }}
      >
        <AppLinkText isActive={isActive}>{linkText.toUpperCase()}</AppLinkText>
      </NavLink>
    </AppLinkWrapper>
  );
};
