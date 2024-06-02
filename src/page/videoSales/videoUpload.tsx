import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ImageUpload from '../../assests/Upload.png';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface IFormInput {
  title: string;
  explanation: string;
  price: number;
  isValid: boolean;
  videoFile?: File | null;
}


interface VideoUploadProps {
  onAddVideo: (newVideo: IFormInput) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onAddVideo }) => {
  const { register, handleSubmit, reset, formState: { isValid, errors } } = useForm<IFormInput>();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    const formData: IFormInput = {
      ...data,
      videoFile: videoFile,
      isValid: true,
    };

    onAddVideo(formData);
    reset();
    setVideoUrl(null);
    setVideoFile(null);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setVideoFile(file);
    }
  };

  return (
    <VideoContainer>
      <VideoDiv>
        <Div>
          <PurchaseDiv>
            <DivVideo>
              <ExplanationUl>
                <ExplanationLi1>
                  <Videoh1>동영상 업로드</Videoh1>
                </ExplanationLi1>
                <ExplanationLis>
                  {videoUrl ? (
                    <VideoThumbnail
                      src={videoUrl} controls />
                  ) : (
                    <UploadDiv>
                      <UploadImage src={ImageUpload} alt="upload" onClick={handleImageClick} />
                      <HiddenFileInput
                        type="file"
                        accept="video/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </UploadDiv>
                  )}
                </ExplanationLis>
              </ExplanationUl>
            </DivVideo>
          </PurchaseDiv>
          <ExplanationDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ExplanationUl>
                <ExplanationLi>
                  <ExplanationP>제목</ExplanationP>
                  <Input
                    type="text"
                    id="title"
                    {...register("title", {
                      required: true,
                    })}
                  />
                </ExplanationLi>
                <ExplanationLi>
                  <ExplanationP>설명</ExplanationP>
                  <Input
                    type="text"
                    id="explanation"
                    {...register("explanation", {
                      required: true,
                    })}
                  />
                </ExplanationLi>
                <ExplanationLi>
                  <ExplanationP>판매가격</ExplanationP>
                  <Input
                    type="text"
                    id="price"
                    {...register('price', {
                      required: true,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: '숫자만 입력 가능합니다.'
                      }
                    })}
                  />
                </ExplanationLi>
                {errors.price && (
                  <DivIcons>
                    <DivError>
                      <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                    </DivError>
                    <ErrorP>
                      {errors.price.type === "pattern"
                        ? '숫자만 입력 가능합니다.'
                        : '모든 내용을 입력해 주세요.'}
                    </ErrorP>
                  </DivIcons>
                )}
                <ExplanationLi>
                  <ExplanationButton
                    isValid={isValid}
                    type="submit">저장하기</ExplanationButton>
                </ExplanationLi>
              </ExplanationUl>
            </form>
          </ExplanationDiv>
        </Div>
      </VideoDiv>
    </VideoContainer>
  );
};

const VideoThumbnail = styled.video`
  width: 80%;
  margin: 80px auto;
  border-radius: 1rem;
  cursor: pointer;
`;

const VideoDiv = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  background-color: #202124;
  padding: 100px 0;
`;

const ErrorP = styled.div`
  padding: 0rem 1rem 0rem 2.4rem;
  color: #F90;
  font-size: 15px;
`;

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 25px;
  font-weight: bolder;
`;

const DivError = styled.span`
  position: absolute;
  left: 0.6rem;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-top: 50px;
`;

const DivIcons = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
`;

const ExplanationButton = styled.button<{ isValid: boolean }>`
  border-radius: 1rem;
  border: 1px solid #00000012;
  cursor: pointer;
  padding: 12px;
  color: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 17px;
  font-weight: bolder;
  margin-top: 70px;
  background-color: ${props => props.isValid ? '#907AE7' : '#00000012'};
  color: ${props => props.isValid ? '#FFF' : '#555656'};
  cursor: ${props => props.isValid ? 'pointer' : 'no-drop'};
`;

const ErrorIcon = styled.div`
  font-size: 21px;
  position: absolute;
  transform: translateY(-50%);
  color: #F90;
  top: 12px;
`;

const Input = styled.input`
  border: 1px solid #00000012;
  background: #00000012;
  color: #555656;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 100%;
  padding: 0.7rem 0rem 0.6rem 0.7rem;
  border-radius: 1rem;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #3b393973;
    color: #3b393973;
  }
`;

const PurchaseDiv = styled.div`
  width: 45%;
`;

const ExplanationDiv = styled.div`
  width: 45%;
  border: 1px solid #00000012;
  background: #00000012;
  font-weight: bolder;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background: #fff;
`;

const DivVideo = styled.div`
  width: 100%;
  display: block;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding-top: 4px;
  padding-bottom: 5px;
`;

const UploadImage = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 50%;
  cursor: pointer;
`;
const UploadDiv = styled.div`
  display:flex;
`;
const HiddenFileInput = styled.input`
  display: none;
`;

const ExplanationUl = styled.ul`
  padding: 0px;
`;

const ExplanationLi = styled.li`
  list-style-type: none;
  margin: 8px 20px 0 20px;
  display: flex;
  color: #565656;
  font-size: 20px;
  flex-direction: column;
`;

const ExplanationLi1 = styled.li`
  list-style-type: none;
  box-shadow: 1px 1px 1px #3b393973;
  padding-bottom: 5px;
  padding-left: 20px;
`;
const ExplanationLis = styled.li`
    display: flex;
    justify-content: center;
}
`;
const ExplanationP = styled.p``;

export default VideoUpload;