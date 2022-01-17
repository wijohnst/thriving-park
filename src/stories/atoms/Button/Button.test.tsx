// Global Imports
import React from 'react';

// Local Imports
import { render } from 'utils/test-utils';
import { Button } from 'stories/atoms/Button/Button';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

const onClick = jest.fn();

describe('Button component unit tests', () => {
  it('Should render the Button component', () => {
    const { getByText } = render(
      <Button label="Button" isMobile={false} onClick={onClick} />
    );

    expect(getByText('Button')).toBeInTheDocument();
  });
});
