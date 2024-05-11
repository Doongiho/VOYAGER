import React from 'react';
import styled from 'styled-components';

const VideoSales: React.FC = () => {
    return (
      <div>
        <VideoSalesContainer>
            <h1>동영상 판매 페이지</h1>
        </VideoSalesContainer>
      </div>
    );
  };
  
const VideoSalesContainer = styled.div`
  background-color: #202124;
  height:100vh;
`;
export default VideoSales;
