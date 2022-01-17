// Global Imports
import React from 'react';

// Local Imports
import { render } from 'utils/test-utils';
import { Label } from 'stories/atoms/Label/Label';

beforeAll(() => {});
afterEach(() => {});
afterAll(() => {});

describe('Label component unit tests', () => {
  it('Should render the Label component', () => {
    const { getByText } = render(<Label text="Label" />);

    expect(getByText('Label')).toBeInTheDocument();
  });
});
