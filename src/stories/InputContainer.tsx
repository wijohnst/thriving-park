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
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';
import { Rows } from 'stories/Inputs/TextArea/TextArea';

interface Props {
  label: string;
  inputType: InputType;
  labelDisplayStyle: DisplayStyles;
  placeholder?: string;
  options?: Array<OptionInfo>;
  rows?: Rows;
  maxCharacterLength?: number;
  onChange: (value?: any) => void;
}

// eslint-disable-next-line no-empty-pattern
export const InputContainer = ({
  label,
  inputType,
  labelDisplayStyle = 'flexLeft',
  placeholder,
  options,
  rows,
  maxCharacterLength,
  onChange,
}: Props) => {
  return (
    <InputContainerWrapper>
      <LabelWrapper>
        <Label text={label} displayStyle={labelDisplayStyle} />
      </LabelWrapper>
      <InputWrapper>
        <Input
          inputType={inputType}
          onChange={onChange}
          placeholder={placeholder}
          options={options}
          rows={rows}
          maxCharacterLength={maxCharacterLength}
        />
      </InputWrapper>
    </InputContainerWrapper>
  );
};
