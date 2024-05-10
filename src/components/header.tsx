import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../assests/logo.png'

const HeaderContainer = styled.header`
  background-color: #202124;
  width:100%;
  text-align:center;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(108, 108, 108, 0.57); 
  position: fixed;
  top: 0;
  z-index: 10;
`;


const HeaderUl = styled.ul`
  list-style-type: none;
  display:flex;
  width:80%;
  justify-content: end;
`;

const HeaderLi = styled.li`
  margin: 0 25px;
  color: #fff;
`
;
const HeaderH2 = styled.h2`
  margin: 0 25px;
  color: #fff;
  font-size: 1vw
`;

const HeaderLogo = styled.image`
  width:20%;
`;

const GnbUl = styled.ul`
    list-style-type: none;
    display: flex;
    margin-top: 15px;
`;

const EnbUl = styled.ul`
 list-style-type: none;
 display: flex;
 justify-content: end;
`;

const LogoImage = styled.img`
  width: 100px;
`;


const Header: React.FC = () => {
  return (
    <HeaderContainer>
    <LogoImage src={ImageLogo} alt="Logo" />
     <HeaderUl>
       <HeaderLi>
          <EnbUl>
            <HeaderH2>로그인</HeaderH2>
            <HeaderH2>회원가입</HeaderH2>
          </EnbUl>
          <GnbUl>
          <HeaderH2>소개</HeaderH2>
          <HeaderH2>동영상 구매</HeaderH2>
          <HeaderH2>동영상 판매</HeaderH2>
          <HeaderH2>고객센터</HeaderH2>
          </GnbUl>
        </HeaderLi>
      </HeaderUl>
    </HeaderContainer>
  );
};

export default Header;
