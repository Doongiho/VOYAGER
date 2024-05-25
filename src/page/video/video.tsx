import React from 'react';
import styled from 'styled-components';
import ImageUser from '../../assests/kakao.png';


const Video: React.FC = () => {
  return (
    <VideoContainer>
      <VideoDiv>
        <Videoh1>원하는 동영상을 검색해보세요.</Videoh1>
        <Input></Input>
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
  color:#fff;
  flex-direction: column;
  width:1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;
const VideoContainer = styled.div`
  background-color: #202124;
  height:100vh;
  padding:300px 0;
`;
const Videoh1 = styled.h1`
`;


const Input = styled.input`
  border: 1px solid #00000012;
    background: #fff;
    color: #3b393973;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 2px 2px 2px #b2b2b2;
    width: 60%;
    margin:20px 0;
    padding: 0.6rem 1.5rem 0.6rem 2.875rem;
    line-height: 24px;
    border-radius: 1rem;
    font-size:17px;
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
  width:100%;
`;

const ServiceLi = styled.li`
  width: 400px;
  height: 500px;
  display: block;
  margin:80px 20px 0 0;
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
`;

const VideoP = styled.p`
font-size:15px;
margin-top: 15px
color:#eee;
  
`;
const UserImage = styled.img`
    width: 40px;
    height: 40px;
    margin: 15px auto;
    border-radius: 50%;
    width:10%;
  
`;

const Videos = styled.div`
  display:flex;
  flex-direction: column;
  width: 20%;
  text-align: center;
`;
const Videoss = styled.div`
  display:flex;
  flex-direction: column;
  width: 70%;
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
