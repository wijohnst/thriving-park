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

export const UploadElement = styled(InputElement)<{
  hasFile: boolean;
}>`
  color: transparent;
  border: none;
  &:before {
    cursor: pointer;
  }

  ::-webkit-file-upload-button {
    display: ${(props) => (props.hasFile ? 'none' : 'inline-block')};
    border: none;
    border-radius: 5px;
    padding: 0.25rem;
    text-decoration: none;
    backgrond-color: none;
    outline: none;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
    font-weight: 800;
    text-decoration: underline;
    font-size: 1rem;
  }
`;
