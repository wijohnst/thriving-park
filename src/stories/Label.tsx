import * as React from 'react';
import styled from 'styled-components';

export type DisplayStyles = 'flexCenter' | 'flexRight' | 'flexLeft';

interface DisplayStyle {
  justifyContent: string;
  alignItems: string;
}

interface Props {
  text: string;
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

const Element = styled.label<Pick<Props, 'isUnderlined'>>`
  font-family: ${(props) => props.theme.primaryFontFamily};
  font-weight: 700;
  letter-spacing: 0.05rem;
  border-bottom: ${(props) => (props.isUnderlined ? '.01rem solid black' : '')};
`;

export const Label = ({
  text,
  displayStyle = 'flexLeft',
  isUnderlined = false,
}: Props) => (
  <Wrapper displayStyle={displayStyle}>
    <Element isUnderlined={isUnderlined}>{text}</Element>
  </Wrapper>
);
