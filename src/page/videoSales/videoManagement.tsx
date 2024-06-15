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
                      <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
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
const VideoDiv = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoThumbnail = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

const VideoContainer = styled.div`
  background-color: #202124;
  padding: 100px 0;
`;

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 25px;
  font-weight: bolder;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin-top: 50px;
`;

const ExplanationButton = styled.button`
  border-radius: 1rem;
  border: 1px solid #907AE7;
  background: #907AE7;
  cursor: pointer;
  padding: 12px;
  color: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 17px;
  font-weight: bolder;
  margin-top: 70px;
`;

const Input = styled.input`
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 100%;
  padding: 0.6rem 0rem 0.6rem 0rem;
  line-height: 24px;
  border-radius: 1rem;
  font-size: 17px;
  &:focus {
    outline: none;
    border-color: #3b393973;
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
  box-shadow: 2px 
 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background:#fff;

`;
const DivVideo = styled.div`
  width: 100%;
  display: block;
  border-radius: 1rem;
  background:#fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding-top:4px;
  padding-bottom:5px;
`;
const DivVideo1 = styled.div`
  width: 100%;
  height:300px;
  display: block;
  border-radius: 1rem;
  background:#ddd;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding-top:4px;
  padding-bottom:5px;
  margin-top:20px;
`;






const UploadImage = styled.img`
  width:80%;
  margin: 0 auto;
  border-radius: 50%;
  
`;


const ExplanationUl = styled.ul`
padding:0px;
`;
const ExplanationLi = styled.li`
list-style-type: none;
padding:8px 20px 0 20px;
display:flex;
color:#565656;
font-size:20px;
flex-direction: column;
`;
const ExplanationLi1 = styled.li`
  list-style-type: none;
  box-shadow: 1px 1px 1px #3b393973;
  padding-bottom:5px;
  padding-left:20px;
  `;

const ExplanationP = styled.p`

`;
const ExplanationP1 = styled.p`
    margin: 0px;
    padding: 0px;
    margin-top: 20px;
`;
export default VideoManagement;