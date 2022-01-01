// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/AppLink.stories';

const { Default, Active } = composeStories(stories);

describe('AppLink component unit tests', () => {
  it('Should render the default AppLink', () => {
    const { getByText } = render(<Default />);
    expect(getByText('HOME')).toBeInTheDocument();
  });

  it('Shold render an active AppLink component', () => {
    const { getByText } = render(<Active />);
    const activeAppLink = getByText('HOME');
    expect(activeAppLink).toHaveAttribute(
      'style',
      'color: rgb(0, 0, 0); text-decoration: none;'
    );
  });
});
