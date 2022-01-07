import * as React from 'react';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';

// export type AcceptedValues = Pick<OptionInfo, 'value'>;

const SelectContext = React.createContext<{
  selectedOption: OptionInfo | undefined;
  updateSelectedOption: (option: OptionInfo) => void;
}>({
  selectedOption: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateSelectedOption: (option: Pick<OptionInfo, 'value'>) => {},
});

const useSelectContext = () => {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error('Error creating the context');
  }
  return context;
};

export { SelectContext, useSelectContext };
