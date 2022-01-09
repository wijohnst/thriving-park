// Global Imports
import * as React from 'react';

// Local Imports
import { InputWrapper } from 'stories/Input.style';
import { InputType } from 'utils/sharedTypes';
import { TextInput, SelectInput, TextAreaInput } from 'stories/Inputs';

interface Props {
  inputType: InputType;
}

const renderInputByType = (inputType: InputType, isActive: boolean) => {
  switch (inputType) {
    case 'Text':
      return <TextInput isActive={isActive} />;
    case 'Select':
      return <SelectInput />;
    case 'TextArea':
      return <TextAreaInput isActive={isActive} />;
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
