// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/UploadProfilePic/UploadProfilePic.stories';

const { Default } = composeStories(stories);

describe('UploadProfilePic unit tests', () => {
  it('Should render the UploadProfilePic component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('UploadProfilePic Works!')).toBeInTheDocument();
  });
});
