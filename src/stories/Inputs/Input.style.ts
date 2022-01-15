// Global Imports
import styled from 'styled-components';

export const InputElement = styled.input<{
  isActive: boolean;
}>`
  border: solid;
	border-color: ${(props) =>
    props.isActive ? `${props.theme.brightGreen};` : 'white;'}
  text-decoration: none;
  border-radius: 5px;
  outline: none;
	padding: 0.25rem 0 0.25rem 0.5rem;
	margin: 0.25rem;
	box-sizing: border-box;
	width: 100%;

	::placeholder{
		font-style: italic;
	}
`;
