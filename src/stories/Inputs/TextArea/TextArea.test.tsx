// Global Imports
import React from 'react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

// Local Imports
import { render } from 'utils/test-utils';
import * as stories from 'stories/Inputs/TextArea/TextArea.stories';

const { Default, MaxCharacterLength } = composeStories(stories);

describe('TextArea unit tests', () => {
  it('Should render the TextArea component', () => {
    const { getByTestId } = render(<Default />);
    expect(getByTestId('textarea-wrapper')).toBeInTheDocument();
  });

  it('Should render the max character length counter', () => {
    const { getByText } = render(<MaxCharacterLength />);
    expect(getByText('0/10')).toBeInTheDocument();
  });

  it('Should count down the number of characters', () => {
    const { getByText, getByTestId } = render(<MaxCharacterLength />);
    expect(getByText('0/10')).toBeInTheDocument();
    const textarea = getByTestId('textarea');
    userEvent.type(textarea, '1');
    expect(getByText('1/10')).toBeInTheDocument();
  });

  it('Should limit the number of characters entered to 10', () => {
    const tenCharacterString = 'abcdefghij';
    const elevenCharacterString = `${tenCharacterString}k`;

    const { getByText, getByTestId, queryByText } = render(
      <MaxCharacterLength />
    );
    expect(getByText('0/10')).toBeInTheDocument();
    const textarea = getByTestId('textarea');
    userEvent.type(textarea, tenCharacterString);
    expect(getByText(tenCharacterString)).toBeInTheDocument();
    userEvent.type(textarea, 'k');
    expect(getByText(tenCharacterString)).toBeInTheDocument();
    expect(queryByText(elevenCharacterString)).not.toBeInTheDocument();
  });
});
