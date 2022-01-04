// Global Imports
import * as React from 'react';

// Local Imports
import { InputWrapper } from 'stories/Input.style';
import { TextInput } from 'stories/Inputs';

export type InputType = 'Text' | 'Select';

interface Props {
  inputType: InputType;
}

const renderInputByType = (inputType: InputType, isActive: boolean) => {
  switch (inputType) {
    case 'Text':
      return <TextInput isActive={isActive} />;
    case 'Select':
      return <span>Select</span>;
    default:
      return <TextInput />;
  }
};

export const Input = ({ inputType = 'Text' }: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <InputWrapper
      onBlur={() => setIsActive(!isActive)}
      onClick={() => setIsActive(!isActive)}
    >
      {renderInputByType(inputType, isActive)}
    </InputWrapper>
  );
};
