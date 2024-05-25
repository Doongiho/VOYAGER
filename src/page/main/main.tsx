import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageShopping from '../../assests/shopping.png';
import ImageFlash from '../../assests/Flash.png';
import ImageStar from '../../assests/star.png';
import ImageCash from '../../assests/cash.png';
import ImageCard from '../../assests/card.png';
import ImageBulb from '../../assests/bulb.png'
import ImageSecurity from '../../assests/security.png'
import Imagevideo from '../../assests/video.png'

const Main: React.FC = () => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <MainContainer>
      <FirstContainer>
        <StyledSlider {...settings}>
          <SliderDiv>
            <SliderUl>
              <SliderLiLeft>
                <SliderH1>필요한 동영상이 있을 땐<ColoredText>보이저</ColoredText></SliderH1>
                <SliderP>다양한 동영상 보러가기</SliderP>
              </SliderLiLeft>
              <SliderLiRight>
                <PurpleBox></PurpleBox>
                <ShoppingImage src={ImageShopping} alt="Logo" />
                <FlashImage src={ImageFlash} alt="Star" />
                <StarImage src={ImageStar} alt="Flash" />
              </SliderLiRight>
            </SliderUl>
          </SliderDiv>
          <SliderDiv>
            <SliderUl>
              <SliderLiRight>
                <BlueBox></BlueBox>
                <ShoppingImage src={Imagevideo} alt="video" />
              </SliderLiRight>
              <SliderLiLeft>
                <SliderH1>고객님의 재능을 세상에<ColoredText> 알리는 기회</ColoredText></SliderH1>
                <SliderP>당신의 창의력이 빛나는 영상을 공유해주세요!</SliderP>
              </SliderLiLeft>
            </SliderUl>
          </SliderDiv>
          <SliderDiv>
            <SliderUl>
              <SliderLiLeft>
                <SliderH1><ColoredText>워터마크가 들어간 안전한</ColoredText>영상거래사이트</SliderH1>
                <SliderP>보이저는 영상 거래의 안전을 위해 워터마크를 삽입하여<ColoredText></ColoredText> 안전한 거래를 보장합니다!</SliderP>
              </SliderLiLeft>
              <SliderLiRight>
                <SkyblueBox></SkyblueBox>
                <ShoppingImage src={ImageSecurity} alt="security" />
              </SliderLiRight>
            </SliderUl>
          </SliderDiv>
        </StyledSlider>
      </FirstContainer>
      <SliderDivW>
        <SliderUl>
          <SliderLiRight>
            <BlueBox></BlueBox>
            <ShoppingImage src={ImageBulb} alt="bulb" />
          </SliderLiRight>
          <SliderLiLeft>
            <SliderH1w>창작자의 열정과<ColoredText> 독창성을 존중합니다</ColoredText></SliderH1w>
            <SliderPw>퀄리티에 구애받지 않는 자유로운 업로드 환경을 제공합니다. 아마추어에서부터 전문가에 이르기까지, 모든 수준의 창작자들이 자신의 작품을 세상과 나누고, 가치를 인정받을 수 있는 공간입니다.</SliderPw>
          </SliderLiLeft>
        </SliderUl>
      </SliderDivW>
      <SliderDivG>
        <SliderUl>
          <SliderLiLeft>
            <SliderH1w><ColoredText>영상 업로드 하고
            </ColoredText>용돈 벌자!</SliderH1w>
            <SliderPw>사진첩에 있는 동영상 가만히 두지말고<ColoredText></ColoredText>
              보이저에 올리고 용돈 벌자</SliderPw>
          </SliderLiLeft>
          <SliderLiRight>
            <SkyblueBox></SkyblueBox>
            <ShoppingImage src={ImageSecurity} alt="security" />
          </SliderLiRight>
        </SliderUl>
      </SliderDivG>
    </MainContainer>
  );
};

const StyledSlider = styled(Slider)`

  .slick-prev {
    z-index: 1;
    left: 80px;
  }
  .slick-slider
{
   position:static !important;
}

  .slick-next {
    right: 80px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
   
    }
   
  }
`;

const FirstContainer = styled.div`
    width:100%;
    height:100%;
`;


const MainContainer = styled.div`
  background-color: #202124;
  height:100%;
`;



const SliderDiv = styled.div`
  background-color: #202124;
  height:100vh;
`;

const SliderDivW = styled.div`
  background-color: #fff;
  height:100vh;
`;


const SliderDivG = styled.div`
  background-color: #F8F8F8;
  height:100vh;
`;

const SliderP = styled.h1`
  font-size: 1.2vw;
  color:#c0bdbdcf;
  cursor: pointer;
  font-weight:bold;
`;

const SliderPw = styled.h1`
  font-size: 1.2vw;
  color:#c0bdbdcf;
  cursor: pointer;
  font-weight:bold;
`;


const SliderH1 = styled.h1`
  margin: 6px auto;
  margin-bottom: 80px;
  font-size: 2.5vw;
`;

const SliderH1w = styled.h1`
  color:black;
  font-size: 2.5vw;
  margin: 6px auto;
  margin-bottom:80px;
`;


const SliderUl = styled.ul`
  list-style-type: none;
  margin: 0 auto;
  align-items: center;
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

const SliderLiLeft = styled.li`
  color: #fff;
  width: 30vw;
  margin: 0 auto;
  
  `;

const SliderLiRight = styled.li`
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px !important;
  position:relative;
  margin: 0 auto;
`;



const PurpleBox = styled.div`
  background-color: #907ae7;
  width: 27vw;
  border-radius: 50%;
  height: 27vw;
  margin-bottom: 20px
`;

const BlueBox = styled.div`
  background-color: #DEF3F5;
  width: 18vw;
  border-radius: 300px;
  height: 33vw;
  margin-bottom: 20px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(25deg);
`;

const SkyblueBox = styled.div`
  background-color: #CDE1F8;
  width: 18vw;
  border-radius: 300px;
  height: 33vw;
  margin-bottom: 20px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  transform: rotate(150deg);
`;

const ShoppingImage = styled.img`
  display: block;
  position: absolute;
  width: 30vw;
`;
const FlashImage = styled.img`
  display: block;
  position: absolute;
  width: 10vw;
  left: 0vw;
}
`;
const ColoredText = styled.p`
  font-size: 2.5vw;
  color: #8f7ce0;
  margin: 6px auto;
  font-weight:bolder;
}`;


const StarImage = styled.img`
  display: block;
  position: absolute;
  width: 10vw;
  right: 0vh;
}


`;
export default Main;
