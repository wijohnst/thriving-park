// Global Imports
import React from 'react';

// Local Imports
import { CTALinkWrapper, LinkText } from 'stories/atoms/CTALink/CTALink.style';

interface Props {
  text: string;
  color?: string;
  hideUnderline?: boolean;
  onClick: () => void;
}

export const CTALink = ({
  text,
  color = '#000000',
  onClick,
  hideUnderline = false,
}: Props) => {
  return (
    <CTALinkWrapper
      onClick={onClick}
      data-testid="cta-link"
      color={color}
      hideUnderline={hideUnderline}
    >
      <LinkText color={color}>{text}</LinkText>
    </CTALinkWrapper>
  );
};
