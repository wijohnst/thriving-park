// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/AuthCTA/AuthCTA.stories';
import { AuthCTATextEnum } from './AuthCTA';

const { SignIn, SignOut } = composeStories(stories);

describe('AuthCTA unit tests', () => {
  it('Should render the Sign In CTA', () => {
    const { getByText } = render(<SignIn />);
    expect(getByText(AuthCTATextEnum.signIn)).toBeInTheDocument();
  });

  it('Should render the SignOut CTA', () => {
    const { getByText } = render(<SignOut />);
    expect(getByText(AuthCTATextEnum.signOut)).toBeInTheDocument();
  });
});
