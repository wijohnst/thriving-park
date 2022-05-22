// Global Imports
import React from 'react';

// Local Imports
import { EditWrapper } from 'stories/pages/ProfilePage/ProfilePageRender/Edit/Edit.style';
import { EditProfileForm } from 'stories/molecules/forms/EditProfileForm/EditProfileForm';
import { CTALink } from 'stories/atoms/CTALink/CTALink';

interface Props {
  isLoading: boolean;
  isSubmitted: boolean;
  handleCancelClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const Edit = ({
  isLoading = false,
  isSubmitted = false,
  handleCancelClick,
}: Props) => {
  return (
    <EditWrapper>
      <EditProfileForm isLoading={isLoading} isSubmitted={isSubmitted} />
      <CTALink text="Cancel" onClick={handleCancelClick} hideUnderline />
    </EditWrapper>
  );
};
