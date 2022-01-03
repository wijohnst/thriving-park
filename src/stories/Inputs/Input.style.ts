// Global Imports
import styled from 'styled-components';

export const InputWrapper = styled.input<{
  isActive: boolean;
}>`
  border: solid thin;
	border-color: ${(props) =>
    props.isActive ? `${props.theme.brightGreen};` : 'black;'}
  text-decoration: none;
  border-radius: 5px;
  outline: none;
	padding: .2rem;
`;
