// Global Imports
import React from 'react';

// Local Imports
import { OptionListWrapper } from 'stories/Inputs/Select/OptionList/OptionList.style';
import { Option, OptionInfo } from 'stories/Inputs/Select/Option/Option';

interface Props {
  options: Array<OptionInfo>;
}

export const OptionList = ({ options }: Props) => {
  return (
    <OptionListWrapper>
      {options.map((option) => (
        <Option option={option} key={option.key} />
      ))}
    </OptionListWrapper>
  );
};
