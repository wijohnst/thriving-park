// Global Imports
import React from 'react';

// Local Imports
import {
  ErrorMessageWrapper,
  ErrorMessageSpan,
} from 'stories/atoms/ErrorMessage/ErrorMessage.style';

interface Props {
  message: string;
  isWarning?: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const ErrorMessage = ({ message, isWarning = false }: Props) => {
  return (
    <ErrorMessageWrapper>
      <ErrorMessageSpan isWarning={isWarning}>{message}</ErrorMessageSpan>
    </ErrorMessageWrapper>
  );
};
