// Global Imports
import React, { ReactNode } from 'react';

// Local Imports
import { CardWrapper } from 'stories/atoms/Card/Card.style';

interface Props {
  children: ReactNode[];
  color?: string;
}

// eslint-disable-next-line no-empty-pattern
export const Card = ({ children, color = '#FFFFFF' }: Props) => {
  return <CardWrapper color={color}>{children}</CardWrapper>;
};
