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
                    <ServiceText>계정 관리
                         <Icon className="material-symbols-outlined">person</Icon>
                    </ServiceText>
                    <ServicDes>회원 탈퇴를 하고 싶어요.</ServicDes>
                  </ServiceLi>
                  <ServiceLi>
                    <ServiceText>계정 관리
                    <Icon className="material-symbols-outlined">person</Icon>
                    </ServiceText>
                    <ServicDes>회원 수정을 하고 싶어요.</ServicDes>
                  </ServiceLi>
                    <ServiceLi>
                  <ServiceText>동영상 구매
                  <Icon className="material-symbols-outlined">play_arrow</Icon>
                  </ServiceText>
                  <ServicDes>동영상을 구매하고 싶어요.</ServicDes>
                  </ServiceLi>
                   <ServiceLi>
                  <ServiceText>동영상 판매
                  <Icon className="material-symbols-outlined">play_arrow</Icon>
                  </ServiceText>
                  <ServicDes>동영상 업로드는 어떻게 하나요?</ServicDes>
                  </ServiceLi>
                  <ServiceLi>
                  <ServiceText>수익 창출
                  <Icon className="material-symbols-outlined">payments</Icon>
                  </ServiceText>
                  <ServicDes>수익은 어떻게 이루어지나요?</ServicDes>
                  </ServiceLi>
                  <ServiceLi>
                  <ServiceText>결제 방식
                  <Icon className="material-symbols-outlined">payments</Icon>
                  </ServiceText>
                  <ServicDes>결제는 어떻게 하나요?</ServicDes>
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
font-size:22px;
font-weight:bolder;
margin: 2rem;
text-align: left;
color: 000000
`;
const ServicDes = styled.h1`
font-size:17px;
margin: 2rem;
text-align: left;
color: #3B3939;
letter-spacing: -1px;
`;

const Icon = styled.span`
  font-size: 30px;
  position: absolute;
  margin: 0.5rem;
  transform: translateY(-28%); 
  color: #7c7c7c;
  `



const ServiceBox = styled.div``

;

const ServiceTitle = styled.h1`
    font-size:30px;
    font-weight:bolder;
    margin-bottom: 2rem;
    color: 1F1F1F
`;


export default Service;
