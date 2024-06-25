import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ImageUpload from '../../assets/Upload.png';

const FileUpload = ({ onChange }: { onChange: (file: File) => void }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      onChange(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <UploadDiv>
      {fileUrl ? (
        <FilePreviewImage src={fileUrl} alt="file preview" onClick={handleImageClick} />
      ) : (
        <UploadImage src={ImageUpload} alt="upload" onClick={handleImageClick} />
      )}
      <HiddenFileInput
        type="file"
        accept="video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </UploadDiv>
  );
};

const UploadDiv = styled.div`
  display: flex;
`;

const UploadImage = styled.img`
  width: 80%;
  margin: 2vw auto;
  border-radius: 50%;
  cursor: pointer;
`;

const FilePreviewImage = styled.img`
  width: 22vw;
  margin: 13vh auto;
  border-radius: 1rem;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

export default FileUpload;
