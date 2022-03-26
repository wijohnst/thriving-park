// Global Imports
import * as React from 'react';

// Local Imports
import { UploadElement } from 'stories/Inputs/Input.style';
import {
  UploadWrapper,
  UploadText,
  UploadIconWrapper,
  UploadElementWrapper,
} from 'stories/Inputs/Upload/Upload.style';
import { Icon } from 'stories/atoms/Icon/Icon';
import { ReactComponent as UploadIcon } from 'stories/assets/upload_icon.svg';
import { ReactComponent as CheckIcon } from 'stories/assets/check_icon.svg';
import { ReactComponent as XIcon } from 'stories/assets/ex_icon.svg';
import { defaultTheme } from 'themes';
import { Loading } from 'stories/molecules/Loading/Loading';

interface Props {
  /** How should we tell the user to select a file?  */
  selectFileText?: string;
  /** Has the user selected at least one file? */
  hasFile?: boolean;
  /** Is some uploading event taking place? */
  isUploading?: boolean;
  /** Was the upload event successful? */
  isUploadSuccessful?: boolean;
  /** Did the upload event fail? */
  hasFailed?: boolean;
  /** What kind of files can be uploaded? */
  accept?: string;
  /** Can the user upload more than one file? */
  isMultiple?: boolean;
  /** onChange callback - will always return a FileList */
  onChange: (fileList: FileList) => void;
}

export const Upload = ({
  selectFileText = 'Please select a file to upload.',
  hasFile = false,
  isUploading = false,
  isUploadSuccessful = false,
  hasFailed = false,
  accept = '*',
  isMultiple = false,
  onChange,
}: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  /**
   * Returns a FileList from refrenced Input element
   *
   */
  const handleChange = (): void => {
    const fileList = inputRef.current?.files as FileList;
    if (fileList) {
      onChange(fileList);
    }
  };

  return (
    <>
      <UploadWrapper isActive={false}>
        <UploadText>
          {!hasFile &&
            !isUploading &&
            !isUploadSuccessful &&
            !hasFailed &&
            selectFileText}
          {isUploading && 'Uploading'}
          {isUploadSuccessful && 'Uploaded Successfully'}
          {hasFailed && 'Upload failed. Please try again.'}
        </UploadText>
        <UploadIconWrapper>
          {!hasFile && !isUploading && !isUploadSuccessful && !hasFailed && (
            <Icon
              icon={<UploadIcon fill={defaultTheme.secondaryBlue} />}
              height={40}
              width={40}
            />
          )}
          {isUploading && <Loading width={40} height={40} />}
          {isUploadSuccessful && (
            <Icon
              icon={<CheckIcon fill={defaultTheme.primaryBlue} />}
              height={40}
              width={40}
            />
          )}
          {hasFailed && (
            <Icon
              icon={<XIcon fill={defaultTheme.secondaryBlue} />}
              height={40}
              width={40}
            />
          )}
        </UploadIconWrapper>
      </UploadWrapper>
      <UploadElementWrapper>
        <UploadElement
          type="file"
          isActive={false}
          hasFile={hasFile || isUploading || isUploadSuccessful}
          onChange={handleChange}
          accept={accept}
          ref={inputRef}
          multiple={isMultiple}
          data-testid="file-input"
        />
      </UploadElementWrapper>
    </>
  );
};
