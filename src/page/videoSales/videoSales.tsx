import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { IVideo } from '../../types/IVideo';
import { VideoSalesProps } from '../../types/VideoSalesProps';

const VideoSales: React.FC<VideoSalesProps> = ({ videos, isLoggedIn, onDeleteVideo }) => {
  const navigate = useNavigate();
  const [deletingVideoId, setDeletingVideoId] = useState<string | null>(null);
  const deleteButtonRef = useRef<HTMLButtonElement>(null);
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [filteredVideoSales, setFilteredVideoSales] = useState<IVideo[]>([]);
  const loggedInUserId = userData?.id;

  useEffect(() => {
    if (videos && loggedInUserId) {
      const filteredVideos = videos.filter((video: IVideo) => video.id === loggedInUserId);
      setFilteredVideoSales(filteredVideos);
    }
  }, [videos, loggedInUserId]);

  console.log('userData:', userData);
  console.log('videos:', videos);
  console.log('filteredVideoSales:', filteredVideoSales);

  const handleVideoClick = (video: IVideo) => {
    navigate('/videoManagement', { state: { video } });
    setDeletingVideoId(null);
  };

  const handleDelete = (videoId: string) => {
    onDeleteVideo(videoId);
    setDeletingVideoId(null);
  };

  const handleDeleteIconClick = (videoId: string) => {
    setDeletingVideoId(prev => (prev === videoId ? null : videoId));
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (deleteButtonRef.current && !deleteButtonRef.current.contains(e.target as Node)) {
      setDeletingVideoId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <VideoContainer>
        {!isLoggedIn ? (
        <VideoDiv>
          <NotLoggedInMessage>로그인 후 동영상을 판매해보세요!</NotLoggedInMessage>
          </VideoDiv>
        ) : (
          <VideoDivs>
            <VideoSale>
              <Videoh1>동영상 관리</Videoh1>
              <ExplanationButton>
                <Link to="/videoUpload" style={{ color: "#fff", textDecorationLine: "none" }}>판매하기</Link>
              </ExplanationButton>
            </VideoSale>
            <ServiceUl>
              {filteredVideoSales.map((video: IVideo, index: number) => (
                <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
                  <DivVideo>
                    {video.videoFile && video.videoFile instanceof Blob && (
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
                    <DivIcon>
                      <Icon
                        className="material-symbols-outlined"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteIconClick(video.videoStr);
                        }}
                      >
                        more_vert
                      </Icon>
                      {deletingVideoId === video.videoStr && (
                        <DeleteButton ref={deleteButtonRef} onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(video.videoStr);
                        }}>삭제하기</DeleteButton>
                      )}
                    </DivIcon>
                  </VidesoDiv>
                </ServiceLi>
              ))}
            </ServiceUl>
          </VideoDivs>
        )}
    </VideoContainer>
  );
};


const VideoDiv = styled.div`
  color: #fff;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 18vh;
  padding-bottom: 104px;
`;

const VideoDivs = styled.div`
  color: #fff;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 80vh;

  @media screen and (max-width: 768px) {
    margin-top: 0vh;
  }
`;

const DivIcon = styled.span`
  position: absolute;
  right: 0px;
  width: 10%;
  top: 20px;
`;

const DeleteButton = styled.button`
  width: 83px;
  height: 27px;
  margin: 0 auto;
  position: absolute;
  right: 15px;
  top: 26px;
  background: #fff;
  font-weight: 600;
  border-radius: 0.2rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  cursor: pointer;
`;

const Icon = styled.span`
  font-size: 22px;
  color: #7c7c7c;
  cursor: pointer;
`;

const VideoContainer = styled.div`
  background-color: #202124;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;;
  text-align: center;
  position: relative;
  padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

const VideoSale = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Videoh1 = styled.h1`
  text-align: left;
  color: #fff;
  font-size: 1.7vw;
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
  width: 12vw;
  border-radius: 1rem;
  border: 1px solid #907AE7;
  background: #907AE7;
  cursor: pointer;
  color: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 17px;
  font-weight: bolder;
  margin: auto 0;
  height: 5vh;
  font-size: 1.2vw;

  &:hover {
    background-color: #8774d9;
  }
`;

const ServiceUl = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  justify-content: flex-start;
  margin-top:90px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin:0px;
  }
`;

const ServiceLi = styled.li`
  width: 340px;
  height: 340px;
  display: block;
  margin: 30px 44px 0 0;

  @media screen and (max-width: 768px) {
    margin:0px;
    margin-top:20px;
  }
`;

const DivVideo = styled.div`
  width: 100%;
  height: 205px;
  display: block;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px #b2b2b2;
  margin: 10px 0;
`;


const VideoH3 = styled.h3`
  font-size: 1vw;
  margin-top: 12px;
  margin-bottom: 0px
  color:#fff;
`;

const VideoP = styled.p`
  font-size: 0.8vw;
  margin-top: 15px;
  color: #aeaeae;
`;

const Videoss = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
  margin-left:20px;
`;

const VidesoDiv = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  flex-direction: row;
`;

const NotLoggedInMessage = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: 0;
`;


export default VideoSales;
