// Global Imports
import * as React from 'react';

// Local Imports
import { OptionWrapper } from 'stories/Inputs/Select/Option/Option.style';
import { SelectContext } from 'stories/Inputs/Select/SelectContext';

export interface OptionInfo {
  key: number | string;
  label: string;
  value: number | string | boolean;
}
interface Props {
  option: OptionInfo;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Option = ({ option }: Props) => {
  const { updateSelectedOption } = React.useContext(SelectContext);
  return (
    <OptionWrapper
      key={option.key}
      onClick={() => updateSelectedOption(option)}
    >
      {option.label}
    </OptionWrapper>
  );
};
