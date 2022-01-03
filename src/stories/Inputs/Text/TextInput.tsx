// Global Imports
import React from 'react';

// Local Imports
import { InputWrapper } from 'stories/Inputs/Input.style';
// import { TextInputWrapper } from 'stories/Inputs/Text/TextInput.style';

interface Props {
  isActive?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TextInput = ({ isActive = false }: Props) => {
  return (
    <InputWrapper type="text" isActive={isActive} data-testid="textinput" />
  );
};
