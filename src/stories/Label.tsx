import * as React from 'react';
import styled from 'styled-components';

// Local Imports
import { TextStyles } from 'utils/sharedTypes';

export type DisplayStyles = 'flexCenter' | 'flexRight' | 'flexLeft';

interface DisplayStyle {
  justifyContent: string;
  alignItems: string;
}
interface Props {
  text: string;
  textStyle?: TextStyles;
  displayStyle?: DisplayStyles;
  isUnderlined?: boolean;
}

export const displayStyles: Record<DisplayStyles, DisplayStyle> = {
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexLeft: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

const Wrapper = styled.div<Pick<Props, 'displayStyle'>>`
  width: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.displayStyle
      ? displayStyles[props.displayStyle].justifyContent
      : displayStyles.flexLeft.justifyContent};
  align-items: ${(props) =>
    props.displayStyle
      ? displayStyles[props.displayStyle].alignItems
      : displayStyles.flexLeft.alignItems};
`;

const Element = styled.label<Pick<Props, 'isUnderlined' | 'textStyle'>>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-weight: ${(props) => (props.textStyle === 'bold' ? 700 : 300)};
  letter-spacing: 0.05rem;
  border-bottom: ${(props) => (props.isUnderlined ? '.01rem solid black' : '')};
`;

export const Label = ({
  text,
  textStyle = 'bold',
  displayStyle = 'flexLeft',
  isUnderlined = false,
}: Props) => (
  <Wrapper displayStyle={displayStyle}>
    <Element textStyle={textStyle} isUnderlined={isUnderlined}>
      {text}
    </Element>
  </Wrapper>
);
