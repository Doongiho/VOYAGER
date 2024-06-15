import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IVideo } from '../../types/IVideo';
import { VideoSalesProps } from '../../types/VideoSalesProps';

const Video: React.FC<VideoSalesProps> = ({ videos }) => {
  const navigate = useNavigate();
  const [filteredVideoSales, setFilteredVideoSales] = useState<IVideo[]>([]);

  useEffect(() => {
    if (videos) {
      setFilteredVideoSales(videos);
    }
  }, [videos]);

  const handleVideoClick = (video: IVideo) => {
    navigate('/videoManagement', { state: { video } });
  };

  return (
    <VideoContainer>
      <VideoDiv>
        <Videoh1>원하는 동영상을 검색해보세요.</Videoh1>
        <Input placeholder="검색어를 입력하세요"></Input>
        <ServiceUl>
          {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                <UserImage src={video.title} alt="User" />
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
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
  color:#fff;
  flex-direction: column;
  width:80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;
const VideoContainer = styled.div`
  background-color: #202124;
  height:100%;
  padding: 140px 0;
`;

const VideoThumbnail = styled.video`
  width: 100%;
  margin: 0 auto;
  border-radius: 1rem;
  cursor: pointer;
  background-position: bottom;
  margin-bottom: 200px;
`;

const Videoh1 = styled.h1`
`;


const Input = styled.input`
  border: 1px solid #00000012;
    background: #fff;
    color: #3b393973;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 2px 2px 2px #b2b2b2;
    width: 60%;
    margin:20px 0;
    padding: 0.6rem 1.5rem 0.6rem 2.875rem;
    line-height: 24px;
    border-radius: 1rem;
    font-size:17px;
    &:focus {
        outline: none;
        border-color: #3b393973;
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
  margin: 10px 0;
`;

const VideoA = styled.a`
  font-size:12px;
  color:#eee;
  `;

const VideoH3 = styled.h3`
    font-size: 19px;
    margin-top: 12px;
    margin-bottom: 0px
    color:#fff;
`;

const VideoP = styled.p`
    font-size: 12px;
    margin-top: 15px;
    color: #aeaeae;
  
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
  width: 80%;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;

`;
const VidesoDiv = styled.div`
  display:flex;
  width:100%;
  justify-content: normal;


`;


export default Video;
