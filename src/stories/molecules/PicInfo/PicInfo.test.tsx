// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/PicInfo/PicInfo.stories';

const { Default} = composeStories(stories);

describe('PicInfo unit tests', () => {
  it('Should render the PicInfo component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('profile-picture')).toBeInTheDocument();
  });
});