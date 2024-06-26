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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services: ServiceItem[] = [
    { 
      title: '계정 관리', 
      description: '회원 탈퇴를 하고 싶어요.', 
      extraDescription: '마이페이지 - 회원탈퇴를 클릭하면 회원탈퇴가 가능합니다.', 
      icon: 'person' 
    },
    { 
      title: '계정 관리', 
      description: '회원 수정을 하고 싶어요.', 
      extraDescription: '계정 관리 - 회원수정을 클릭하면 회원 수정이 가능합니다.', 
      icon: 'person' 
    },
    { 
      title: '동영상 구매', 
      description: '동영상을 구매하고 싶어요.', 
      extraDescription: '동영상 구매 - 원하는 동영상을 클릭하면 동영상 구매가 가능합니다.', 
      icon: 'play_arrow' 
    },
    { 
      title: '동영상 판매', 
      description: '동영상 업로드는 어떻게 하나요?', 
      extraDescription: '여기에는 동영상 업로드에 대한 추가 정보가 표시됩니다.', 
      icon: 'play_arrow' 
    },
    { 
      title: '수익 창출', 
      description: '수익은 어떻게 이루어지나요?', 
      extraDescription: '여기에는 수익 창출에 대한 추가 정보가 표시됩니다.', 
      icon: 'payments' 
    },
    { 
      title: '결제 방식', 
      description: '결제는 어떻게 하나요?', 
      extraDescription: '여기에는 결제 방식에 대한 추가 정보가 표시됩니다.', 
      icon: 'payments' 
    },
  ];

  return (
    <div>
      <ServiceContainer>
        <ServiceBox>
          <ServiceDiv>
            <ServiceTitle>무엇을 도와드릴까요?</ServiceTitle>
            <ServiceUl>
              {services.map((service, index) => (
                <Transition in={activeIndex === index} timeout={300} key={index}>
                  {state => (
                    <ServiceLi
                      onClick={() => handleClick(index)}
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                    >
                      <ServiceText>
                        {service.title}
                        <Icon className="material-symbols-outlined">{service.icon}</Icon>
                      </ServiceText>
                      <ServiceDes>{service.description}</ServiceDes>
                      {activeIndex === index && (
                        <ServiceExtra>
                          {service.extraDescription}
                        </ServiceExtra>
                      )}
                    </ServiceLi>
                  )}
                </Transition>
              ))}
            </ServiceUl>
          </ServiceDiv>
        </ServiceBox>
      </ServiceContainer>
    </div>
  );
};

const defaultStyle = {
  transition: 'all 300ms ease-in-out',
  height: '160px',
  overflow: 'hidden',
};

const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { height: '220px' },
  entered: { height: '220px' },
  exiting: { height: '160px' },
  exited: { height: '160px' },
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
  width: 1200px;
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
  display: block;
  margin: 50px 30px;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px #b2b2b2;
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

const ServiceText = styled.h1`
  font-size: 22px;
  font-weight: bolder;
  margin: 2rem;
  text-align: left;
  color: #000000;
`;

const ServiceDes = styled.h1`
  font-size: 17px;
  margin: 2rem;
  text-align: left;
  color: #3b3939;
  letter-spacing: -1px;
`;

const ServiceExtra = styled.p`
  font-size: 16px;
  margin: 2rem;
  text-align: left;
  color: #3b3939;
`;

const Icon = styled.span`
  font-size: 30px;
  position: absolute;
  margin: 0.5rem;
  transform: translateY(-28%);
  color: #7c7c7c;
`;

const ServiceBox = styled.div``;

const ServiceTitle = styled.h1`
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 2rem;
  color: #1f1f1f;
`;

export default Service;