// Global Imports
import * as React from 'react';
// @ts-ignore - No declared typing available
import { uploadFile } from 'react-s3';

// Local Imports
import { UploadProfilePicWrapper } from 'stories/molecules/UploadProfilePic/UploadProfilePic.style';
import { UploadInput } from 'stories/Inputs';

interface Props {}

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  IMAGE_BUCKET_REGION,
  IMAGE_BUCKET_NAME,
} = process.env;

const config = {
  bucketName: IMAGE_BUCKET_NAME,
  region: IMAGE_BUCKET_REGION,
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
};

// eslint-disable-next-line no-empty-pattern
export const UploadProfilePic = ({}: Props) => {
  const [isUploading, setIsUploading] = React.useState(false);
  const [hasFailed, setHasFailed] = React.useState(false);

  const handleUpload = async (fileList: FileList) => {
    if (fileList[0]) {
      setIsUploading(true);
      const file = fileList[0];
      console.log(file);
      uploadFile(file, config)
        // @ts-ignore
        .then((data) => console.log(data))
        // @ts-ignore
        .catch((err) => {
          setIsUploading(false);
          setHasFailed(true);
          console.log(err);
        });
    }
  };

  return (
    <UploadProfilePicWrapper>
      <UploadInput
        accept="image/*"
        selectFileText="Please select a profile picture to upload"
        onChange={(fileList: FileList) => handleUpload(fileList)}
        isUploading={isUploading}
        hasFailed={hasFailed}
      />
    </UploadProfilePicWrapper>
  );
};
