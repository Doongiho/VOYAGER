import React from 'react';
import styled from 'styled-components';
import ImageUser from '../../assests/kakao.png';
import { Link } from 'react-router-dom';

export interface IFormInput {
  title: string;
  explanation: string;
  price: number;
  isValid: boolean;
  videoFile?: File | null;
}

interface VideoSalesProps {
  videoSales: IFormInput[];
}

const VideoSales: React.FC<VideoSalesProps> = ({ videoSales }) => {
  return (
    <VideoContainer>
      <VideoDiv>
        <VideoSale>
          <Videoh1>동영상 관리</Videoh1>
          <ExplanationButton><Link to="/videoUpload" style={{ color: "#fff", textDecorationLine: "none" }}>판매하기</Link></ExplanationButton>
        </VideoSale>
        <ServiceUl>
          {videoSales.map((video, index) => (
            <ServiceLi key={index}>
              <DivVideo>
                {video.videoFile && (
                  <VideoThumbnail
                    src={URL.createObjectURL(video.videoFile)}
                  />
                )}
              </DivVideo>
              <VidesoDiv>
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
        </ServiceUl>
      </VideoDiv>
    </VideoContainer>
  );
};

const VideoDiv = styled.div`
  flex-direction: column;
  width:80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const VideoContainer = styled.div`
  background-color: #202124;
  min-height: 100vh;
  padding: 140px 0;
`;
const VideoSale = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`;


const Videoh1 = styled.h1`
  text-align: left;
  color:#fff;
  
`;
const VideoThumbnail = styled.video`
    width: 100%;
    margin: 0 auto;
    border-radius: 1rem;
    cursor: pointer;
    background-position: bottom;
    margin-bottom: 200px;
`;

const ExplanationButton = styled.button`
    width: 15%;
    border-radius: 1rem;
    border: 1px solid #907AE7;
    background: #907AE7;
    cursor: pointer;
    padding: 12px;
    color: #fff;
    box-shadow: 2px 2px 2px #b2b2b2;
    font-size: 17px;
    font-weight: bolder;
    margin: auto 0;
    height: 100%;
    &:hover {
        background-color: #8774d9;
    }
    
`;
const ServiceUl = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width:100%;
  padding:0px;
`;

const ServiceLi = styled.li`
  width: 380px;
  height: 380px;
  display: block;
  margin: 30px 20px 0px 0px;
`;
const DivVideo = styled.div`
  width: 100%;
  height: 205px;
  display: block;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px #b2b2b2;
  margin:10px 0;
`;

const VideoA = styled.a`
  font-size:12px;
  color:#eee;
  margin-left: 2px;
  `;

const VideoH3 = styled.h3`
    font-size: 19px;
    margin-top: 12px;
    margin-bottom: 0px
    color:#fff;
    margin-bottom: 3px;
`;

const VideoP = styled.p`
    font-size: 12px;
    margin-top: 15px;
    color: #aeaeae;
  margin-left: 2px;
`;
const UserImage = styled.img`
    width: 40px;
    height: 40px;
    margin: 15px auto;
    border-radius: 50%;
  
`;

const Videoss = styled.div`
  display:flex;
  flex-direction: column;
  width: 90%;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;

`;
const VidesoDiv = styled.div`
  display:flex;
  width:100%;
  justify-content: normal;


`;


export default VideoSales;
