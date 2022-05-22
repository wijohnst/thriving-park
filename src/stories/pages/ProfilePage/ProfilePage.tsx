// Global Imports
import * as React from 'react';

// Local Imports
import { useAppSelector } from 'app/hooks';
import { selectSession } from 'features/session/sessionSlice';
import { useGetUserByIdQuery } from 'features/session/sessionApi';
// import { ProfilePic } from 'stories/atoms/ProfilePic/ProfilePic';
// import { SizesEnum } from 'utils/sharedTypes';
import {
  ProfilePageWrapper,
  // TextPicWrapper,
} from 'stories/pages/ProfilePage/ProfilePage.style';
import { ProfilePageRender } from 'stories/pages/ProfilePage/ProfilePageRender/ProfilePageRender';

interface Props {
  userId: string | undefined;
}

// eslint-disable-next-line no-empty-pattern
export const ProfilePage = ({ userId = '' }: Props) => {
  const { data, isLoading: queryIsLoading } = useGetUserByIdQuery(
    {
      userId,
    },
    {
      skip: userId === '',
    }
  );

  const [isEdit, setIsEdit] = React.useState(false);
  const [isPhotoUpload, setIsPhotoUpload] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isAuthLoading, isAuthenticated, user } = useAppSelector((state) =>
    selectSession(state)
  );

  return isAuthenticated && data ? (
    // return isAuthenticated ? (
    <ProfilePageWrapper>
      <ProfilePageRender
        isLoading={isAuthLoading || queryIsLoading}
        isEdit={isEdit}
        isPhotoUpload={isPhotoUpload}
        userInfo={{
          userName: 'Joe Byron',
          neighborType: undefined,
          neighborDate: undefined,
          userBlurb: undefined,
        }}
        profilePictureURL={data?.data.profilePictureURL ?? ''}
        isFormSubmitted={false}
        isFormSubmitting={false}
        onEditClick={
          !isEdit ? () => setIsEdit(true) : () => setIsPhotoUpload(true)
        }
        onCancelPhotoUploadClick={() => setIsPhotoUpload(false)}
      />
    </ProfilePageWrapper>
  ) : (
    <span>Please Login</span>
  );
};
