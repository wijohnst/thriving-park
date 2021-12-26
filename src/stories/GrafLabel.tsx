// Global Imports
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  rotation?: number;
}

const Wrapper = styled.div<Pick<Props, 'rotation'>>`
  background-color: ${(props) => props.theme.brightGreen};
  padding: 0.5rem;
  border-radius: 0.75rem;
  opacity: 75%;
  transform: ${(props) => {
    const roationString = `${props.rotation}deg`;
    return `rotate(${roationString})`;
  }};
`;

const Text = styled.span`
  font-family: ${(props) => props.theme.secondaryFontFamily};
  color: black;
`;

// eslint-disable-next-line no-empty-pattern
export const GrafLabel = ({
  text,
  rotation = 0,
}: Props): React.ReactElement => (
  <Wrapper rotation={rotation}>
    <Text>{text}</Text>
  </Wrapper>
);
