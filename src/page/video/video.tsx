import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IVideo } from '../../types/IVideo';
import { VideoSalesProps } from '../../types/VideoSalesProps';

const Video: React.FC<VideoSalesProps> = ({ videos }) => {
  const navigate = useNavigate();
  const [filteredVideoSales, setFilteredVideoSales] = useState<IVideo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<{ username: string; profileImage: string | null } | null>(null);

  useEffect(() => {
    if (videos) {
      setFilteredVideoSales(videos);
    }

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setCurrentUser({ username: userData.username, profileImage: userData.twitterImage });
    }
  }, [videos]);

  const handleVideoClick = (video: IVideo) => {
    navigate('/videoPurchase', { state: { video } });
  };

  useEffect(() => {
    if (videos) {
      const filteredVideos = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVideoSales(filteredVideos);
    }
  }, [searchTerm, videos]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <VideoContainer>
      <VideoDiv>
        <Videoh1>원하는 동영상을 검색해보세요.</Videoh1>
        <Input
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ServiceUl>
          {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </ServiceLi>
          ))}
           {filteredVideoSales.map((video: IVideo, index: number) => (
            <ServiceLi key={index} onClick={() => handleVideoClick(video)}>
              <DivVideo>
                {video.videoFile && video.videoFile instanceof Blob && (
                  <VideoThumbnail src={URL.createObjectURL(video.videoFile)} />
                )}
              </DivVideo>
              <VidesoDiv>
                {currentUser && currentUser.username === video.username && currentUser.profileImage && (
                  <UserImage src={currentUser.profileImage} alt="프로필 이미지" />
                )}
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
  color: #fff;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  padding-top: 18vh;
`;

const VideoContainer = styled.div`
  background-color: #202124;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;;
  text-align: center;
  position: relative;
  padding-bottom: 50px;
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
  font-size:2vw;
`;

const Input = styled.input`
  border: 1px solid #00000012;
  background: #fff;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 40vw;
  height:0.6vw;
  margin:20px 0;
  line-height: 24px;
  border-radius: 1rem;
  font-size:1vw;
  padding: 0.8vw 1.7vw 0.8vw 3vw;

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
    margin:50px 0px;
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

const VideoA = styled.a`
  font-size:0.8vw;
  color:#eee;
`;

const VideoH3 = styled.h3`
  font-size: 1vw;
  margin-top: 12px;
  margin-bottom: 0px;
  color:#fff;
`;

const VideoP = styled.p`
  font-size: 0.8vw;
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
