// Global Imports
import React from 'react';

// Local Imports
import { InputElement as StyledInput } from 'stories/Inputs/Input.style';

interface Props {
  isActive?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TextInput = ({ isActive = false }: Props) => {
  return (
    <StyledInput type="text" isActive={isActive} data-testid="textinput" />
  );
};
