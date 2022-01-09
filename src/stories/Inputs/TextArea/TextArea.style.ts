// Global Imports
import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  font-family: ${(props) => props.theme.primaryFontFamily};
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  width: 100%;
`;

export const CharacterCount = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  position: relative;
  bottom: 0.85rem;
  right: 0.25rem;
  font-size: 0.75rem;
  font-weight: 300;
`;

export const TextAreaElement = styled.textarea<{
  isActive: boolean;
}>`
	border: solid;
	border-color: ${(props) =>
    props.isActive ? `${props.theme.brightGreen};` : 'white;'}
  text-decoration: none;
  border-radius: 5px;
  outline: none;
	padding: 0.25rem 0 0.25rem 0.5rem;
	box-sizing: border-box;
	width: 100%;
	font-family: ${(props) => props.theme.primaryFontFamily};
	resize: none;

	::placeholder{
		font-family: ${(props) => props.theme.primaryFontFamily};
		font-style: italic;
	}
`;
