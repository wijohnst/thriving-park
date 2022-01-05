// Global Imports
import * as React from 'react';

// Local Imports
import { OptionWrapper } from 'stories/Inputs/Select/Option/Option.style';

export interface OptionInfo {
  key: number | string;
  label: string;
  value: number | string | boolean;
}
interface Props {
  option: OptionInfo;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Option = ({ option: { key, label, value } }: Props) => {
  return (
    <OptionWrapper key={key} onClick={() => console.log(value)}>
      {label}
    </OptionWrapper>
  );
};

// TODO: Refactor `onClick` callback to pass value to context

// TODO: Refactor background color to conditionally render as theme.brightGreen when `Select` value equals value (eg: on select, the selected option should stay green)
