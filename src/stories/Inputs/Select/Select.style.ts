// Global Imports
import * as React from 'react';
import styled from 'styled-components';

export const SelectWrapper = styled.div<{
  ref: React.RefObject<HTMLDivElement>;
}>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  border: ${(props) => `solid thin ${props.theme.primaryGray}`};
  border-radius: 5px;
  padding: 0 0.5rem 0 1rem;
  display: flex;
  flex-direction: column;
  margin: 0.25rem;
`;

export const SelectHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Placeholder = styled.span`
  font-weight: 300;
  font-style: italic;
`;

export const OptionListWrapper = styled.div<{
  isSelectOpen: boolean;
}>`
  display: ${(props) => (props.isSelectOpen ? 'block' : 'none')};
`;
