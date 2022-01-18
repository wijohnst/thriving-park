// Global Imports
import * as React from 'react';

// Local Imports
import { AuthCTAWrapper } from 'stories/molecules/AuthCTA/AuthCTA.style';
import { CTALink } from 'stories/atoms/CTALink/CTALink';

export enum AuthCTATextEnum {
  signIn = 'Sign In / Sign Up',
  signOut = 'Sign Out',
}

interface Props {
  isAuthorized: boolean;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const AuthCTA = ({ isAuthorized = false, onClick }: Props) => {
  return (
    <AuthCTAWrapper>
      <CTALink
        text={isAuthorized ? AuthCTATextEnum.signOut : AuthCTATextEnum.signIn}
        // eslint-disable-next-line no-console
        onClick={onClick}
      />
    </AuthCTAWrapper>
  );
};
