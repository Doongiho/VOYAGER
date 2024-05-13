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
                <ShoppingImage src={ImageCash} alt="cash" />
              </SliderLiRight>
              <SliderLiLeft>
                <SliderH1>영상 업로드 하고 <ColoredText>용돈 벌자!</ColoredText></SliderH1>
                <SliderP>사진첩에 있는 동영상 가만히 두지 말고 <ColoredText></ColoredText> 보이저에 올리고 용돈 벌자 </SliderP>
              </SliderLiLeft>
            </SliderUl>
          </SliderDiv>
          <SliderDiv>
            <SliderUl>
              <SliderLiLeft>
                <SliderH1><ColoredText>첫 구매 시</ColoredText>10% 할인 쿠폰 증정 </SliderH1>
                <SliderP>첫 구매 한하여 10% 할인 쿠폰 증정<ColoredText></ColoredText> 다같이 알찬 쇼핑하자!</SliderP>
              </SliderLiLeft>
              <SliderLiRight>
                <SkyblueBox></SkyblueBox>
                <ShoppingImage src={ImageCard} alt="card" />
              </SliderLiRight>
            </SliderUl>
          </SliderDiv>
        </StyledSlider>
      </FirstContainer>
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

const SliderP = styled.h1`
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
