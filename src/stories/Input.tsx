// Global Imports
import * as React from 'react';

// Local Imports
import { InputWrapper } from 'stories/Input.style';
import { InputType } from 'utils/sharedTypes';
import { TextInput, SelectInput, TextAreaInput } from 'stories/Inputs';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';
import { Rows } from 'stories/Inputs/TextArea/TextArea';

interface Props {
  //* COMMON PROPS
  /** What kind of input should be returned? */
  inputType: InputType;
  onChange: () => void;
  /** What should the placeholder say? */
  placeholder?: string;
  //*	SELECT PROPS
  options?: Array<OptionInfo>;
  //* TEXTAREA PROPS
  rows?: Rows;
  maxCharacterLength?: number;
}

const renderInputByType = (
  inputType: InputType,
  onChange: () => void,
  isActive: boolean,
  placeholder: string | undefined,
  options?: Array<OptionInfo>,
  rows?: Rows,
  maxCharacterLength?: number
) => {
  switch (inputType) {
    case 'Text':
      return (
        <TextInput
          isActive={isActive}
          placeholder={placeholder}
          onChange={onChange}
        />
      );
    case 'Select':
      return (
        <SelectInput
          placeholder={placeholder}
          options={options}
          onChange={onChange}
        />
      );
    case 'TextArea':
      return (
        <TextAreaInput
          isActive={isActive}
          placeholder={placeholder}
          rows={rows}
          maxChararacterLength={maxCharacterLength}
          onChange={onChange}
        />
      );
    default:
      return <TextInput onChange={onChange} />;
  }
};

export const Input = ({
  inputType = 'Text',
  onChange,
  placeholder,
  options,
  rows,
  maxCharacterLength,
}: Props) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <InputWrapper
      onBlur={() => setIsActive(!isActive)}
      onClick={() => setIsActive(!isActive)}
    >
      {renderInputByType(
        inputType,
        onChange,
        isActive,
        placeholder,
        options,
        rows,
        maxCharacterLength
      )}
    </InputWrapper>
  );
};
