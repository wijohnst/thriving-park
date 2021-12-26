// Global Imports
import React from 'react';


// Local Imports
import { render } from 'utils/test-utils';
import { Button }  from 'stories/Button'

beforeAll(() => { });
afterEach(() => { });
afterAll(() => { });

describe('Button component unit tests', () => {

	it('Should render the Button component', () => { 

		const { getByText } = render(<Button label="Button" />)
		expect(getByText("Button")).toBeInTheDocument();

	});

});