import React from 'react';
import styled from 'styled-components';
import ImageUser from '../../assests/kakao.png';


const videoPurchase: React.FC = () => {
  return (
    <VideoContainer>
      <VideoDiv>
        <Videoh1>동영상 구매</Videoh1>
        <Div>
          <PurchaseDiv>
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
          </PurchaseDiv>
          <ExplanationDiv>
            <ExplanationUl>
              <ExplanationLi1>
                <ExplanationP>워크마크 있는 채로</ExplanationP>
                <ExplanationButton>무료 다운로드</ExplanationButton>
              </ExplanationLi1>
              <ExplanationLi2>
                <ExplanationP><ColoredText>구매 혜택</ColoredText>워크마크 제거<ColoredText1></ColoredText1>고화질 영상</ExplanationP>
              </ExplanationLi2>
              <ExplanationLi3>
                <ExplanationP>12000₩</ExplanationP>
                <ExplanationButton>구매하기</ExplanationButton>
              </ExplanationLi3>
            </ExplanationUl>
          </ExplanationDiv>
        </Div>
      </VideoDiv>
    </VideoContainer>
  );
};

const VideoDiv = styled.div`
  flex-direction: column;
  width:80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  
`;
const VideoContainer = styled.div`
  background-color: #202124;
  height:100%;
  padding: 140px 0;
`;
const Videoh1 = styled.h1`
  text-align: left;
  color:#fff;
  
`;
const Div = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
  height: 100%;
  margin-top:50px;


`;
const PurchaseDiv = styled.div`
 width:50%;
 height:50%;
 

`;
const ExplanationDiv = styled.div`
  width:40%;
  height:65%;
  border: 1px solid #00000012;
  background: #00000012;
  font-weight: bolder;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background:#fff;

`;
const DivVideo = styled.div`
  width: 100%;
  height: 350px;
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
display: flex;
flex-direction: column;
width: 80%;
text-align: left;
justify-content: space-between;
margin: 0 auto;

`;
const VidesoDiv = styled.div`
display: flex;
width: 100%;
justify - content: normal;

`;
const ExplanationUl = styled.ul`
padding:0px;
`;
const ExplanationLi1 = styled.li`
list-style-type: none;
padding:20px 20px;
display:flex;
justify-content: space-between;
color:#565656;
font-size:20px;
box-shadow: 1px 2px 1px #3b393973;
`;
const ExplanationLi2 = styled.li`
  list-style-type: none;
  padding: 0 0 80px 20px;
  font-size:20px;

`;
const ExplanationLi3 = styled.li`
  list-style-type: none;
  padding:20px 20px;
  display:flex;
  font-size:20px;
  justify-content: space-between;
`;
const ExplanationButton = styled.button`
    width: 40%;
    border-radius: 1rem;
    border: 1px solid #907AE7;
    background: #907AE7;
    cursor: pointer;
    padding: 10px;
    color:#fff;
    box-shadow: 2px 2px 2px #b2b2b2;
    font-size:18px;
    font-weight:bolder;
    &:hover {
        background-color: #8774d9;
    }
`;
const ExplanationP = styled.p`

`;
const ColoredText = styled.p`
  color: #8f7ce0;
}`;
const ColoredText1 = styled.p`
}`;

export default videoPurchase;
