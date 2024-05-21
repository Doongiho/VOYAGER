import React from 'react';
import styled from 'styled-components';

const Service: React.FC = () => {
  return (
    <div>
      <ServiceContainer>
        <h1>고객센터 페이지</h1>
      </ServiceContainer>
    </div>
  );
};

const ServiceContainer = styled.div`
  background-color: #202124;
  height:100vh;
`;
export default Service;
