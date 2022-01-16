// Global Imports
import React from 'react';

// Local Imports
import { CTALinkWrapper, LinkText } from 'stories/atoms/CTALink/CTALink.style';

interface Props {
  text: string;
  color?: string;
  onClick: () => void;
}

export const CTALink = ({ text, color = '#000000', onClick }: Props) => {
  return (
    <CTALinkWrapper onClick={onClick} data-testid="cta-link" color={color}>
      <LinkText color={color}>{text}</LinkText>
    </CTALinkWrapper>
  );
};
