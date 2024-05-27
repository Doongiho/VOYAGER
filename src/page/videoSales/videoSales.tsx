import React from 'react';
import styled from 'styled-components';
import ImageUser from '../../assests/kakao.png';


const videoSales: React.FC = () => {
  return (
    <VideoContainer>
      <VideoDiv>
        <VideoSales>
          <Videoh1>동영상 관리</Videoh1>
          <ExplanationButton>구매하기</ExplanationButton>
        </VideoSales>
        <ServiceUl>
          <ServiceLi>
            <DivVideo>
            </DivVideo>
            <VidesoDiv>
              <UserImage src={ImageUser} alt="Flash" />
              <Videoss>
                <VideoH3>
                  왈왈 지는 강아지 영상
                </VideoH3>
                <VideoA>
                  유저이름
                </VideoA>
                <VideoP>
                  강아지는 왈왈 새끼강아지는 앙앙 고양이는 냥냥 부를때는 미야옹!
                </VideoP>
              </Videoss>
            </VidesoDiv>
          </ServiceLi>
        </ServiceUl>
      </VideoDiv>
    </VideoContainer>
  );
};


const VideoDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 140px 0;

`;


const VideoSales = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`;

const VideoContainer = styled.div`
  background-color: #202124;
  height:100%; 
`;
const Videoh1 = styled.h1`
  text-align: left;
  color:#fff;
  
`;


const ExplanationButton = styled.button`
    width: 15%;
    border-radius: 1rem;
    border: 1px solid #907AE7;
    background: #907AE7;
    cursor: pointer;
    padding: 12px;
    color: #fff;
    box-shadow: 2px 2px 2px #b2b2b2;
    font-size: 17px;
    font-weight: bolder;
    margin: auto 0;
    height: 100%;
    &:hover {
        background-color: #8774d9;
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
  height: 250px;
  display: block;
  border-radius: 1rem;
  background:#fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  margin:10px 0;
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

export default videoSales;
