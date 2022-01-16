// Global Imports
import * as React from 'react';

// Local Imports
import {
  Blurb,
  DisplayContent,
  // DisplayHeader,
  // DisplayHeaderContent,
  DisplayWrapper,
} from 'stories/pages/ProfilePageRender/Display/Display.style';
// import { ProfilePic } from 'stories/ProfilePic';
// import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { UserInfo } from 'utils/sharedTypes';
// import { Label } from 'stories/Label';
import { Card } from 'stories/atoms/Card/Card';
import { ProfileHeader } from 'stories/molecules/ProfileHeader/ProfileHeader';
import { defaultTheme } from 'themes';

interface Props {
  profilePictureURL: string;
  userInfo: UserInfo;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const Display = ({ profilePictureURL, userInfo, onClick }: Props) => {
  return (
    <DisplayWrapper>
      <ProfileHeader
        profilePictureURL={profilePictureURL}
        userInfo={userInfo}
        onClick={onClick}
      />
      {userInfo.userBlurb && (
        <DisplayContent>
          <Card color={defaultTheme.bightPurple}>
            <Blurb>{userInfo.userBlurb}</Blurb>
          </Card>
        </DisplayContent>
      )}
    </DisplayWrapper>
  );
};
