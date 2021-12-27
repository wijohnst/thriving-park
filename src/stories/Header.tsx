// Global Imports
import * as React from 'react';
import styled from 'styled-components';

// Local Imports
import { SizesEnum } from 'utils/sharedTypes';

interface Props {
  /** What should the header say? */
  text: string;
  /** What color should the text be? */
  color?: string;
  /** Should the text be all caps? */
  shouldAllCaps?: boolean;
  /** What should the subheading say? */
  subheadingText?: string | null;
  /** What size should the header be? */
  size?: SizesEnum;
}

const sizeTable: { [index: number]: string } = {
  [SizesEnum.Small]: '1rem',
  [SizesEnum.Medium]: '2rem',
  [SizesEnum.Large]: '3rem',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
`;

const Text = styled.h1<Pick<Props, 'color' | 'size'>>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  color: ${(props) => props.color};
  letter-spacing: 0.25rem;
  font-size: ${(props) =>
    props.size || props.size === 0 ? sizeTable[props.size] : null};
`;

const SubheadingText = styled.span<Pick<Props, 'color'>>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  color: ${(props) => props.color};
  position: relative;
  top: -1rem;
  letter-spacing: 0.1rem;
  font-weight: 700;
`;

export const Header = ({
  text,
  color = 'white',
  shouldAllCaps = true,
  subheadingText,
  size = SizesEnum.Large,
}: Props) => {
  return (
    <Wrapper>
      <Text color={color} size={size}>
        {shouldAllCaps ? text.toUpperCase() : text}
      </Text>
      {subheadingText && (
        <SubheadingText color={color}>
          {shouldAllCaps ? subheadingText?.toUpperCase() : subheadingText}
        </SubheadingText>
      )}
    </Wrapper>
  );
};
