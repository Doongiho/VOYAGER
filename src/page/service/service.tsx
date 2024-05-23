import styled from 'styled-components';
import React, { useState } from 'react';

const Service: React.FC = () => {
  
    return (
      <div>
        <ServiceContainer>
            <ServiceBox>
            
              <ServiceDiv>
                <ServiceTitle>무엇을 도와드릴까요?</ServiceTitle>
                <ServiceUl>
                  <ServiceLi>
                    <ServiceText>계정 관리</ServiceText>
                  </ServiceLi>
                  <ServiceLi>
                    <ServiceText>계정 관리</ServiceText>
                  </ServiceLi>
                    <ServiceLi>
                  <ServiceText>동영상 구매</ServiceText>
                  </ServiceLi>
                   <ServiceLi>
                  <ServiceText>동영상 판매</ServiceText>
                  </ServiceLi>
                  <ServiceLi>
                  <ServiceText>수익 창출</ServiceText>
                  </ServiceLi>
                  <ServiceLi>
                  <ServiceText>결제 방식</ServiceText>
                  </ServiceLi>

          

                </ServiceUl>
            </ServiceDiv>
                
            </ServiceBox>
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

const ServiceDiv = styled.div`
background-color: #fff;
height: 100%;
border-radius: 1rem;
margin: 200px 0;
padding: 2rem 2.5rem;
width:1200px;
`;

const ServiceUl = styled.ul`

display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-wrap: wrap;
`;

const ServiceLi = styled.li`
background-color: #20212417;
width: 300px;
height: 160px;
display: block;
margin: 50px 30px;
border-radius: 1rem;
box-shadow: 2px 2px 2px #b2b2b2;
`;
const ServiceText = styled.h1`
font-size:24px;
font-weight:bolder;
margin-bottom: 2rem;
`;


const ServiceBox = styled.div`

`;

const ServiceTitle = styled.h1`
    font-size:30px;
    font-weight:bolder;
    margin-bottom: 2rem;
`;


export default Service;
