// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/molecules/EditPic/EditPic.stories';

const { Default } = composeStories(stories);

describe('EditPic unit tests', () => {
  it('Should render the EditPic component', () => {
    const { getByText } = render(<Default />);
    expect(getByText('EditPic works!'));
  });
});
