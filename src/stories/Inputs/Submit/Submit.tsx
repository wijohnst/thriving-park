// Global Imports
import * as React from 'react';

// Local Imports
import {
  SubmitWrapper,
  SubmitInput,
  IconWrapper,
} from 'stories/Inputs/Submit/Submit.style';
import { Loading } from 'stories/molecules/Loading/Loading';
import { Icon } from 'stories/atoms/Icon/Icon';
import { ReactComponent as CheckIcon } from 'stories/assets/check_icon.svg';

interface SubmitStateStrings {
  preSubmitText: string;
  submittingText: string;
  submittedText: string;
}

interface Props {
  submitStateStrings?: SubmitStateStrings;
  isLoading?: boolean;
  isSubmitted?: boolean;
}

// eslint-disable-next-line no-empty-pattern
export const Submit = ({
  submitStateStrings = {
    preSubmitText: 'Submit',
    submittingText: 'Submitting',
    submittedText: 'Submitted',
  },
  isLoading = false,
  isSubmitted = false,
}: Props) => {
  return (
    <SubmitWrapper>
      <SubmitInput
        data-testid="submit-input"
        isLoading={isLoading}
        type="submit"
      >
        {!isLoading && !isSubmitted && (
          <span>{submitStateStrings.preSubmitText}</span>
        )}
        {isLoading && <span>{submitStateStrings.submittingText}</span>}
        {isSubmitted && <span>{submitStateStrings.submittedText}</span>}
        <IconWrapper>
          {isLoading && <Loading height={24} width={24} />}
          {isSubmitted && <Icon icon={<CheckIcon />} />}
        </IconWrapper>
      </SubmitInput>
    </SubmitWrapper>
  );
};
