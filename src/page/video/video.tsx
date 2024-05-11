import React from 'react';
import styled from 'styled-components';

const Video: React.FC = () => {
    return (
      <div>
        <VideoContainer>
            <h1>동영상 구매 페이지</h1>
        </VideoContainer>
      </div>
    );
  };
  
const VideoContainer = styled.div`
  background-color: #202124;
  height:100vh;
`;
export default Video;
