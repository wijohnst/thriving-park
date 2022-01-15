// Global Imports
import * as React from 'react';

// Local Imports
import {
  TextAreaWrapper,
  TextAreaElement,
  CharacterCount,
} from 'stories/Inputs/TextArea/TextArea.style';

export type Rows = 3 | 4 | 5;

interface Props {
  isActive: boolean;
  rows?: Rows;
  placeholder?: string;
  maxChararacterLength?: number;
  onChange: (textAreaValue: string) => void;
}

// eslint-disable-next-line no-empty-pattern
export const TextArea = ({
  isActive,
  rows = 3,
  placeholder,
  maxChararacterLength,
  onChange,
}: Props) => {
  const [inputValue, setInputValue] = React.useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [charCount, setCharCount] = React.useState(0);

  const charCountString = `${charCount}/${maxChararacterLength}`;

  const handleChange = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
    if (!maxChararacterLength || charCount < maxChararacterLength) {
      onChange(event.currentTarget.value);
      setInputValue(event.currentTarget.value);
    }
  };

  const handleBackspacePress = (
    event: React.SyntheticEvent<HTMLTextAreaElement, KeyboardEvent>
  ) => {
    if (
      maxChararacterLength &&
      // @ts-ignore
      event.code === 'Backspace' &&
      charCount >= maxChararacterLength
    ) {
      const inputValueCopy = inputValue;
      const inputValueArray = inputValueCopy.split('');
      inputValueArray.pop();
      const finalString = inputValueArray.reduce(
        (acc: string, cur: string) => acc + cur
      );
      setInputValue(finalString);
    }
  };

  React.useEffect(() => {
    setCharCount(inputValue.length);
  }, [inputValue]);

  return (
    <TextAreaWrapper data-testid="textarea-wrapper">
      <TextAreaElement
        isActive={isActive}
        rows={rows}
        placeholder={placeholder || ''}
        maxLength={maxChararacterLength}
        onChange={(event: React.SyntheticEvent<HTMLTextAreaElement>) =>
          handleChange(event)
        }
        onKeyDown={(
          event: React.SyntheticEvent<HTMLTextAreaElement, KeyboardEvent>
        ) => handleBackspacePress(event)}
        value={inputValue}
        data-testid="textarea"
      />
      {maxChararacterLength && (
        <CharacterCount>{charCountString}</CharacterCount>
      )}
    </TextAreaWrapper>
  );
};
