// Global Imports
import * as React from 'react';

// Local Imports
import {
  Blurb,
  DisplayContent,
  DisplayHeader,
  DisplayHeaderContent,
  DisplayWrapper,
} from 'stories/pages/ProfilePageRender/Display/Display.style';
import { ProfilePic } from 'stories/ProfilePic';
import { IconLabel } from 'stories/molecules/IconLabel/IconLabel';
import { UserInfo } from 'utils/sharedTypes';
import { Label } from 'stories/Label';
import { Card } from 'stories/atoms/Card/Card';
import { defaultTheme } from 'themes';

interface Props {
  profilePictureURL: string;
  userInfo: UserInfo;
  onClick: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const Display = ({ profilePictureURL, userInfo, onClick }: Props) => {
  const year = userInfo?.neighborDate?.getFullYear().toString();
  const neighborString = `${userInfo.neighborType} since ${year}.`;
  return (
    <DisplayWrapper>
      <DisplayHeader>
        <ProfilePic profilePictureURL={profilePictureURL} />
        {userInfo.neighborDate && (
          <DisplayHeaderContent>
            <IconLabel
              iconString="edit"
              text={userInfo.userName}
              onClick={onClick}
            />
            <Label
              text={neighborString}
              textStyle="light"
              displayStyle="flexCenter"
            />
          </DisplayHeaderContent>
        )}
        {!userInfo.neighborDate && (
          <DisplayHeaderContent>
            <Label text={userInfo.userName} displayStyle="flexCenter" />
            <IconLabel
              iconString="edit"
              text="Add profile information"
              textStyle="light"
              onClick={onClick}
            />
          </DisplayHeaderContent>
        )}
      </DisplayHeader>
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
