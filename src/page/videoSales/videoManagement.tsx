import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IVideo } from '../../types/IVideo';
import { useForm, SubmitHandler } from 'react-hook-form';

const VideoManagement: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const video = location.state?.video as IVideo;

  const { register, handleSubmit } = useForm<IVideo>({
    defaultValues: {
      title: video.title,
      explanation: video.explanation,
      price: video.price,
    },
  });

  if (!video) {
    return <div>비디오 데이터를 찾을 수 없습니다.</div>;
  }

  const onSubmit: SubmitHandler<IVideo> = (data) => {
    const updatedVideo = { ...video, ...data };
    navigate('/videoSales', { state: { updatedVideo } });
  };

  return (
    <VideoContainer>
      <VideoDiv>
        <Div>
          <PurchaseDiv>
            <DivVideo>
              <ExplanationUl>
                <ExplanationLi1>
                  <Videoh1>동영상 관리</Videoh1>
                </ExplanationLi1>
                <ExplanationLi>
                  <DivVideo1>
                    {video.videoFile instanceof Blob && (
                      <VideoThumbnail src={URL.createObjectURL(video.videoFile)} controls/>
                    )}
                  </DivVideo1>
                  <ExplanationP1>구매수:</ExplanationP1>
                </ExplanationLi>
              </ExplanationUl>
            </DivVideo>
          </PurchaseDiv>
          <ExplanationDiv>
            <ExplanationUl>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ExplanationLi>
                  <ExplanationP>제목</ExplanationP>
                  <Input {...register('title')} />
                </ExplanationLi>
                <ExplanationLi>
                  <ExplanationP>설명</ExplanationP>
                  <Input {...register('explanation')} />
                </ExplanationLi>
                <ExplanationLi>
                  <ExplanationP>판매가격</ExplanationP>
                  <Input {...register('price')} />
                </ExplanationLi>
                <ExplanationLi>
                  <ExplanationButton type="submit">저장하기</ExplanationButton>
                </ExplanationLi>
              </form>
            </ExplanationUl>
          </ExplanationDiv>
        </Div>
      </VideoDiv>
    </VideoContainer>
  );
};

const VideoThumbnail = styled.video`
  width: 22vw;
  margin-top: 4vh;
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

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 1.4vw;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    text-align:center;
    text-align: center;
  }
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

const ExplanationButton = styled.button`
  border-radius: 1rem;
  border: 1px solid #00000012;
  padding: 1vh 1vw;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 1vw;
  font-weight: 500;
  width: 22.2vw;
  background: #907AE7;
  cursor: pointer;
  color: #fff;
  margin-bottom: 0.5vh;
  margin-top: 5.5vh;

  @media screen and (max-width: 768px) {
    margin-top:20px;
  }
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
    height: 60vh
    margin-bottom: 60px;
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

const DivVideo1 = styled.div`
  display: block;
  border-radius: 1rem;
  padding-bottom: 5px;
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

const ExplanationP = styled.p`
  margin: 2.3vh 0;
`;

const ExplanationP1 = styled.p`
  margin: 0px;
  padding: 0px;
  margin-top: 20px; 
`;
export default VideoManagement;