// Global Imports
import React from 'react';

// Local Imports
import { useOnExternalClick } from 'hooks/useOnExternalClick';
import {
  SelectWrapper,
  SelectHeader,
  OptionListWrapper,
  Placeholder,
  IconWrapper,
} from 'stories/Inputs/Select/Select.style';
import { OptionList } from 'stories/Inputs/Select/OptionList/OptionList';
import { defaultOptions as optionsStub } from 'stories/Inputs/Select/OptionList/OptionList.stories';
import { CaretIcon } from 'stories/CaretIcon';
import { SelectContext } from 'stories/Inputs/Select/SelectContext';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';

interface Props {
  placeholder?: string;
}

export const Select = ({ placeholder = 'Please select an option' }: Props) => {
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [selectValue, setSelectValue] = React.useState<OptionInfo | undefined>(
    undefined
  );
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  /**
   * Event handler for Select click events
   */
  const handleClick = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleExternalClick = () => {
    setIsSelectOpen(false);
  };

  const updateSelectValue = (option: OptionInfo) => {
    setIsSelectOpen(false);
    setSelectValue(option);
  };

  useOnExternalClick(selectRef, handleExternalClick);

  const value = React.useMemo(
    () => ({
      selectedOption: selectValue,
      updateSelectedOption: updateSelectValue,
    }),
    [selectValue, setSelectValue]
  );

  return (
    <SelectContext.Provider value={value}>
      <SelectWrapper
        ref={selectRef}
        onClick={handleClick}
        onMouseEnter={!selectValue ? handleClick : () => {}}
        onMouseLeave={!selectValue ? handleExternalClick : () => {}}
      >
        <SelectHeader>
          {selectValue ? (
            <span>{selectValue.label}</span>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          <IconWrapper>
            <CaretIcon
              orientation={isSelectOpen ? 'Down' : 'Up'}
              height={24}
              onClick={handleClick}
            />
          </IconWrapper>
        </SelectHeader>
        <OptionListWrapper isSelectOpen={isSelectOpen}>
          <OptionList options={optionsStub} />
        </OptionListWrapper>
      </SelectWrapper>
    </SelectContext.Provider>
  );
};
