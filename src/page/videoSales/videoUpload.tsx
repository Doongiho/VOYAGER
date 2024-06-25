import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ImageUpload from '../../assets/Upload.png';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IVideo } from '../../types/IVideo';
import FileUpload from "./FileUpload";


interface VideoUploadProps {
  onAddVideo: (newVideo: IVideo) => void;
}


const VideoUpload: React.FC<VideoUploadProps> = ({ onAddVideo }) => {
  const { register, handleSubmit, reset, setValue, formState: { isValid, errors } } = useForm<IVideo>();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const onSubmit: SubmitHandler<IVideo> = data => {
    const formData: IVideo = {
      ...data,
      videoFile: videoFile,
      id: userData.id,
      username: userData.username,
      twitterImage: userData.twitterImage,
      videoStr: Math.random().toString(36).substring(7),
    };

    const storedVideos = localStorage.getItem('videos');
    const videos = storedVideos ? JSON.parse(storedVideos) : [];
    localStorage.setItem('videos', JSON.stringify([...videos, formData]));

    onAddVideo(formData);
    reset();
    setVideoUrl(null);
    setVideoFile(null);
    navigate('/videoSales');
  };


  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (file: File) => {
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setVideoFile(file);
    setValue("videoUrl", url);
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
                    <VideoThumbnail src={videoUrl} controls />
                  ) : (
                    <FileUpload onChange={handleFileChange} />
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
                  valid={isValid && videoUrl !== null ? "true" : "false"}
                  type="submit"
                  disabled={!isValid || videoUrl === null}>
                  저장하기
                </ExplanationButton>
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
  width: 22vw;
  margin: 13vh auto;
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
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    position: relative;
    padding-top: 100px;
  }
`;

const ErrorP = styled.div`
  padding: 0rem 1rem 0rem 2.4rem;
  color: #F90;
  font-size: 1vw;
`;

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 1.4vw;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    text-align:center;
  }
`;

const DivError = styled.span`
  position: absolute;
  left: 0.6rem;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;

const DivIcons = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
`;

const ExplanationButton = styled.button<{ valid: string  }>`
  border-radius: 1rem;
  border: 1px solid #00000012;
  padding: 1vh 1vw;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 1vw;
  font-weight: 500;
  margin-top: 5vh;
  width: 22.2vw;
  margin-bottom: 0.5vh;
  margin-top: 5.5vh;
  background-color:  ${props => props.valid === 'true' ?  '#907AE7' : '#00000012'};
  color: ${props => props.valid === 'true' ?  '#FFF' : '#555656'};
  cursor: ${props => props.valid === 'true' ?  'pointer' : 'no-drop'};
  
  @media screen and (max-width: 768px) {
    margin-top:20px;
  }
`;

const ErrorIcon = styled.div`
  font-size: 1.2vw;
  position: absolute;
  transform: translateY(-50%);
  color: #F90;
  top: 12px;
`;

const Input = styled.input`
  border: 1px solid #00000012;
  background: #00000012;
  color: #555656;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 20.5vw;
  padding: 1vh 0.7vw;
  border-radius: 1rem;
  font-size:1vw;

  &:focus {
    outline: none;
    border-color: #3b393973;
    color: #3b393973;
  }
`;

const PurchaseDiv = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const ExplanationDiv = styled.div`
  width: 25vw;
  border: 1px solid #00000012;
  font-weight: 500;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background: #fff;
  padding: 20px 0;
  height: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const DivVideo = styled.div`
  width: 25vw;
  display: block;
  border-radius: 1rem;
  background: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding-top: 4px;
  padding-bottom: 5px;
  height: 95%;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const UploadImage = styled.img`
  width: 80%;
  margin: 2vw auto;
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

`;

const ExplanationLi = styled.li`
  list-style-type: none;
  display: flex;
  color: #565656;
  font-size: 1.2vw;    
  width: 22vw;
  flex-direction: column;
  margin: 3px auto;
  text-align: left;
`;

const ExplanationLi1 = styled.li`
  list-style-type: none;
  box-shadow: 1px 1px 1px #3b393973;
  padding-bottom: 5px;
  padding-left: 20px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;
const ExplanationLis = styled.li`
  display: flex;
  justify-content: center;
`;

const ExplanationP = styled.p`
  margin-top: 2vh;
`;

export default VideoUpload;