// Global Imports
import * as React from 'react';

// Local Imports
import { OptionWrapper } from 'stories/Inputs/Select/Option/Option.style';

interface OptionInfo {
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
