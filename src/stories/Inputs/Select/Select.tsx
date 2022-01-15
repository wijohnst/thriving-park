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
import { defaultOptions } from 'stories/Inputs/Select/OptionList/OptionList.stories';
import { CaretIcon } from 'stories/CaretIcon';
import { SelectContext } from 'stories/Inputs/Select/SelectContext';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';
import { Icon } from 'stories/Icon';
import { ReactComponent as CloseIcon } from 'stories/assets/ex_icon.svg';

interface Props {
  placeholder?: string;
  options?: Array<OptionInfo>;
  // onChange: (value: Pick<OptionInfo, 'value'>) => void;
  onChange: (optionValue: string | number | boolean) => void;
}

export const Select = ({
  placeholder = 'Please select an option',
  options = defaultOptions,
  onChange,
}: Props) => {
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
    window.clearTimeout();
  };

  const handleExternalClick = () => {
    setIsSelectOpen(false);
    window.clearTimeout();
  };

  const updateSelectValue = (option: OptionInfo) => {
    setIsSelectOpen(false);
    setSelectValue(option);
    onChange(option.value);
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
        onMouseEnter={
          !selectValue ? () => window.setTimeout(handleClick, 500) : () => {}
        }
        onMouseLeave={
          !selectValue
            ? () => window.setTimeout(handleExternalClick, 500)
            : () => {}
        }
      >
        <SelectHeader>
          {selectValue ? (
            <span>{selectValue.label}</span>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          <IconWrapper>
            {selectValue ? (
              <Icon
                icon={<CloseIcon />}
                onClick={() => setSelectValue(undefined)}
                height={24}
              />
            ) : (
              <CaretIcon
                orientation={isSelectOpen ? 'Down' : 'Up'}
                height={24}
                onClick={handleClick}
              />
            )}
          </IconWrapper>
        </SelectHeader>
        <OptionListWrapper isSelectOpen={isSelectOpen}>
          <OptionList options={options} />
        </OptionListWrapper>
      </SelectWrapper>
    </SelectContext.Provider>
  );
};
