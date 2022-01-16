export enum SizesEnum {
  Small,
  Medium,
  Large,
}

export type InputType = 'Text' | 'Select' | 'TextArea';

export type ScreenSize = 'Desktop' | 'Tablet' | 'Mobile';

export type NeightborTypes =
  | 'Resident'
  | 'Former Resident'
  | 'Business Owner'
  | 'Fan';
export interface UserInfo {
  userName: string;
  neighborType: NeightborTypes | undefined;
  neighborDate: Date | undefined;
  userBlurb: string | undefined;
}

export type TextStyles = 'bold' | 'light';
