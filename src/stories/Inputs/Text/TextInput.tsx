// Global Imports
import React from 'react';

// Local Imports
import { InputElement as StyledInput } from 'stories/Inputs/Input.style';

interface Props {
  isActive?: boolean;
  placeholder?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TextInput = ({ isActive = false, placeholder = '' }: Props) => {
  return (
    <StyledInput
      type="text"
      isActive={isActive}
      data-testid="textinput"
      placeholder={placeholder}
    />
  );
};
