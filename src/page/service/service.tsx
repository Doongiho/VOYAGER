import styled from 'styled-components';
import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

interface ServiceItem {
  title: string;
  description: string;
  extraDescription: string;
  icon: string;
}

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Service;