// Global Imports
import * as React from 'react';

// Local Imports
import {
  AuthCTAWrapper,
  LinkWrapper,
} from 'stories/molecules/AuthCTA/AuthCTA.style';
import { CTALink } from 'stories/atoms/CTALink/CTALink';

export enum AuthCTATextEnum {
  signIn = 'Sign In / Sign Up',
  signOut = 'Sign Out',
}

interface Props {
  isAuthenticated: boolean;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const AuthCTA = ({ isAuthenticated = false, onClick }: Props) => {
  return (
    <AuthCTAWrapper>
      <LinkWrapper>
        <CTALink
          text={
            isAuthenticated ? AuthCTATextEnum.signOut : AuthCTATextEnum.signIn
          }
          onClick={onClick}
          color="white"
        />
      </LinkWrapper>
    </AuthCTAWrapper>
  );
};
