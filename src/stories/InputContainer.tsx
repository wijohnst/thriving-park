// Global Imports
import React from 'react';

// Local Imports
import {
  InputContainerWrapper,
  LabelWrapper,
  InputWrapper,
} from 'stories/InputContainer.style';
import { Label, DisplayStyles } from 'stories/Label';
import { Input } from 'stories/Input';
import { InputType } from 'utils/sharedTypes';

interface Props {
  label: string;
  inputType: InputType;
  labelDisplayStyle: DisplayStyles;
}

// eslint-disable-next-line no-empty-pattern
export const InputContainer = ({
  label,
  inputType,
  labelDisplayStyle = 'flexLeft',
}: Props) => {
  return (
    <InputContainerWrapper>
      <LabelWrapper>
        <Label text={label} displayStyle={labelDisplayStyle} />
      </LabelWrapper>
      <InputWrapper>
        <Input inputType={inputType} />
      </InputWrapper>
    </InputContainerWrapper>
  );
};
