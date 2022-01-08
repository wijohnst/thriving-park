// Global Imports
import React from 'react';

// Local Imports
import {
  InputContainerWrapper,
  LabelWrapper,
  InputWrapper,
} from 'stories/InputContainer.style';
import { Label } from 'stories/Label';
import { Input, InputType } from 'stories/Input';

interface Props {
  label: string;
  inputType: InputType;
}

// eslint-disable-next-line no-empty-pattern
export const InputContainer = ({ label, inputType }: Props) => {
  return (
    <InputContainerWrapper>
      <LabelWrapper>
        <Label text={label} />
      </LabelWrapper>
      <InputWrapper>
        <Input inputType={inputType} />
      </InputWrapper>
    </InputContainerWrapper>
  );
};
