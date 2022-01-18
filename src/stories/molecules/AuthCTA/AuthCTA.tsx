// Global Imports
import * as React from 'react';

// Local Imports
<<<<<<< HEAD
import { AuthCTAWrapper } from 'stories/molecules/AuthCTA/AuthCTA.style';
=======
import {
  AuthCTAWrapper,
  LinkWrapper,
} from 'stories/molecules/AuthCTA/AuthCTA.style';
>>>>>>> main
import { CTALink } from 'stories/atoms/CTALink/CTALink';

export enum AuthCTATextEnum {
  signIn = 'Sign In / Sign Up',
  signOut = 'Sign Out',
}

interface Props {
<<<<<<< HEAD
  isAuthorized: boolean;
=======
  isAuthenticated: boolean;
>>>>>>> main
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
<<<<<<< HEAD
export const AuthCTA = ({ isAuthorized = false, onClick }: Props) => {
  return (
    <AuthCTAWrapper>
      <CTALink
        text={isAuthorized ? AuthCTATextEnum.signOut : AuthCTATextEnum.signIn}
        // eslint-disable-next-line no-console
        onClick={onClick}
      />
=======
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
>>>>>>> main
    </AuthCTAWrapper>
  );
};
