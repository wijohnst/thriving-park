// Global Imports
import React from 'react';

// Local Imports
import {
  ErrorWrapper,
  InputContainerWrapper,
  LabelWrapper,
  InputWrapper,
} from 'stories/InputContainer.style';
import { Label, DisplayStyles } from 'stories/Label';
import { Input } from 'stories/Input';
import { InputType } from 'utils/sharedTypes';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';
import { Rows } from 'stories/Inputs/TextArea/TextArea';
import { ErrorMessage } from 'stories/atoms/ErrorMessage/ErrorMessage';

type ErrorTypes = 'error' | 'warning';
interface Error {
  type: ErrorTypes;
  message: string | undefined;
}

interface Props {
  label: string;
  inputType: InputType;
  labelDisplayStyle: DisplayStyles;
  placeholder?: string;
  options?: Array<OptionInfo>;
  rows?: Rows;
  maxCharacterLength?: number;
  error?: Error;
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
  error,
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
        {error && (
          <ErrorWrapper>
            <ErrorMessage
              message={error.message}
              isWarning={error.type === 'warning'}
            />
          </ErrorWrapper>
        )}
      </InputWrapper>
    </InputContainerWrapper>
  );
};
