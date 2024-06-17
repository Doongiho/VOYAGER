import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IVideo } from '../../types/IVideo';
import { useForm, SubmitHandler } from 'react-hook-form';

const VideoPurchase: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const video = location.state?.video as IVideo;

  const [uploaderProfileImage, setUploaderProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.username === video.username) {
        setUploaderProfileImage(userData.twitterImage);
      }
    }
  }, [video.username]);

  const { register, handleSubmit } = useForm<IVideo>({
    defaultValues: {
      title: video.title,
      explanation: video.explanation,
      price: video.price,
    },
  });

  return (
    <VideoContainer>
      <VideoDiv>
        <Div>
          <PurchaseDiv>
              <ExplanationLi1>
                <Videoh1>동영상 구매</Videoh1>
              </ExplanationLi1>
              <DivVideo>
                  {video.videoFile instanceof Blob && (
                    <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                  )}
            </DivVideo>
              <VidesoDiv>
                {uploaderProfileImage && <UserImage src={uploaderProfileImage} alt="User" />}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
          </PurchaseDiv>
          <ExplanationDiv>
            <ExplanationUl>
              <ExplanationLi3>
                <ExplanationP>워터마크 있는 채로</ExplanationP>
                <ExplanationButton>무료 다운로드</ExplanationButton>
              </ExplanationLi3>
              <ExplanationLi2>
                <ExplanationP>
                  <ColoredText>구매 혜택:</ColoredText> 워터마크 제거, 고화질 영상
                </ExplanationP>
              </ExplanationLi2>
              <ExplanationLi3>
                <ExplanationP>{video.price}₩</ExplanationP>
                <ExplanationButton>구매하기</ExplanationButton>
              </ExplanationLi3>
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

  @media screen and (max-width: 768px) {
   padding-top: 100px;
  }
`;

const VideoContainer = styled.div`
  background-color: #202124;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  text-align: center;
  position: relative;
  padding-bottom: 50px;
`;

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 1.7vw;
  font-weight: 700;
  color:#fff;
  margin-bottom: 50px;

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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
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
  width: 38%;
  border: 1px solid #00000012;
  font-weight: 500;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background: #fff;
  margin-top: 161px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const DivVideo = styled.div`
  width: 92%;
  display: block;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 40%;
    margin: 0 auto;
  }
`;

const VideoThumbnail = styled.video`
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;
`;

const VideoA = styled.a`
  font-size:0.7vw;    
  color: #c2c2c2;
`;

const VideoH3 = styled.h3`
  font-size: 1.1vw;
  margin-top: 12px;
  margin-bottom: 0px;
  color: #fff;
`;

const VideoP = styled.p`
  font-size: 0.8vw;
  margin-top: 15px;
  color: #c2c2c2;
  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const UserImage = styled.img`
  width: 3vw;
  height: 3vw;
  margin: 15px auto;
  border-radius: 50%;
`;



const Videoss = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;
`;

const VidesoDiv = styled.div`
  display: flex;
  width: 100%;
  justify - content: normal;
  padding-top: 5px;
  
  @media screen and (max-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

const ExplanationUl = styled.ul`
`;


const ExplanationLi1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;    
  padding: 20px 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0px;
  }
`;
const ExplanationLi2 = styled.li`
  list-style-type: none;
  padding: 30px 20px 15px 20px;
  display: flex;
  font-size: 1.2vw;
  justify-content: space-between;
  margin-bottom: 82px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px 30px 20px;
    margin-bottom: 0px;
  }
`;
const ExplanationLi3 = styled.li`
  list-style-type: none;
  padding:20px 20px 0px 20px;
  display:flex;
  font-size:1.2vw;
  justify-content: space-between;
`;

const ExplanationButton = styled.button`
  border-radius: 1rem;
  border: 1px solid #907AE7;
  background: #907AE7;
  cursor: pointer;
  padding: 12px;
  color: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 1vw;
  font-weight: 500;
  height: 0%;
  
  @media screen and (max-width: 768px) {
    padding:2px 0;
    margin-top:16px;
    width:40%;
    font-size: 0.8vw;
  }
`;

const ExplanationP = styled.p`

`;

const ColoredText = styled.p`
  color: #8f7ce0;
}`;


export default VideoPurchase;
