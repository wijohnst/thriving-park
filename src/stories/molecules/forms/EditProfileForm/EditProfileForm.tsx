// Global Imports
import * as React from 'react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Local Imports
import {
  AboutQuestions,
  EditProfileFormWrapper,
  NameQuestions,
} from 'stories/molecules/forms/EditProfileForm/EditProfileForm.style';
import { InputContainer } from 'stories/InputContainer';
import { OptionInfo } from 'stories/Inputs/Select/Option/Option';
import { NeightborTypes } from 'utils/sharedTypes';

interface Props {}

interface ProfileForm {
  firstName: string;
  lastName: string;
  neighborType: NeightborTypes;
  userBlurb: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const neighborTypeOptions: OptionInfo[] = [
  {
    key: 0,
    label: 'Current Driving Park resident',
    value: 'Resident',
  },
  {
    key: 1,
    label: 'Former Driving Park resident',
    value: 'Former Resident',
  },
  {
    key: 2,
    label: 'Driving Park business owner',
    value: 'Business Owner',
  },
  {
    key: 3,
    label: 'Just a fan',
    value: 'Fan',
  },
];

// eslint-disable-next-line no-empty-pattern
export const EditProfileForm = ({}: Props) => {
  const { handleSubmit, setValue, control } = useForm<ProfileForm>({
    resolver: yupResolver(schema),
  });

  return (
    <EditProfileFormWrapper>
      <form onSubmit={handleSubmit((formVals) => console.log(formVals))}>
        <NameQuestions>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange } }) => (
              <InputContainer
                label="First Name"
                inputType="Text"
                labelDisplayStyle="flexLeft"
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange } }) => (
              <InputContainer
                label="Last Name"
                inputType="Text"
                labelDisplayStyle="flexLeft"
                onChange={onChange}
              />
            )}
          />
        </NameQuestions>
        <AboutQuestions>
          <Controller
            control={control}
            name="neighborType"
            render={() => {
              return (
                <InputContainer
                  label="About"
                  inputType="Select"
                  labelDisplayStyle="flexLeft"
                  placeholder={`What's your relationship to the neighborhood?`}
                  options={neighborTypeOptions}
                  onChange={(option: NeightborTypes) =>
                    setValue('neighborType', option)
                  }
                />
              );
            }}
          />
          <Controller
            control={control}
            name="userBlurb"
            render={() => (
              <InputContainer
                label="Bio"
                inputType="TextArea"
                labelDisplayStyle="flexLeft"
                placeholder="Tell us about yourself..."
                rows={4}
                maxCharacterLength={255}
                onChange={(textAreaValue: string) =>
                  setValue('userBlurb', textAreaValue)
                }
              />
            )}
          />
        </AboutQuestions>
        <input type="submit" />
      </form>
    </EditProfileFormWrapper>
  );
};
