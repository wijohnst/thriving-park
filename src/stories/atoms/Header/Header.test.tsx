// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/atoms/Header/Header.stories';

const { Primary, RegularCasing, Subheading } = composeStories(stories);

describe('Header component unit tests', () => {
  it('Should render the Primary Header', () => {
    const { getByText } = render(<Primary />);
    expect(getByText('HEADER')).toBeInTheDocument();
  });

  it('Should render the Header component with regular casing', () => {
    const { getByText } = render(<RegularCasing />);
    expect(getByText('Header')).toBeInTheDocument();
  });

  it('Should render the Primary heading with a subheading', () => {
    const { getByText } = render(<Subheading />);
    expect(getByText('SUBHEADING')).toBeInTheDocument();
  });
});
