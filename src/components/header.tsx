import React from 'react';
import styled from 'styled-components';
import ImageLogo from '../assests/logo.png'
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/Video">
        <LogoImage src={ImageLogo} alt="Logo" />
      </Link>
      <HeaderUl>
        <HeaderLi>
          <EnbUl>
            <Link to="/login">
              <HeaderH2>로그인</HeaderH2>
            </Link>
            <Link to="/signUp">
              <HeaderH2>회원가입</HeaderH2>
            </Link>
          </EnbUl>
          <GnbUl>
            <Link to="/main">
              <HeaderH2>소개</HeaderH2>
            </Link>
            <Link to="/video">
              <HeaderH2>동영상 구매</HeaderH2>
            </Link>
            <Link to="/videoSales">
              <HeaderH2>동영상 판매</HeaderH2>
            </Link>
            <Link to="/service">
              <HeaderH2>고객센터</HeaderH2>
            </Link>
          </GnbUl>
        </HeaderLi>
      </HeaderUl>
    </HeaderContainer>
  );
};

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
  width:60%;
  justify-content: center;
`;

const HeaderLi = styled.li`
  margin: 0 25px;
  color: #fff;
`
  ;
const HeaderH2 = styled.h2`
  margin: 0 25px;
  color: #fff;
  font-size: 15px;
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
  width: 20%;
`;
export default Header;
