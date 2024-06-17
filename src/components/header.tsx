import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImageLogo from '../assets/logo.png';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    onLogout();
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderDiv>
        <Link to="/Video">
          <LogoImage src={ImageLogo} alt="Logo" />
        </Link>
        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
        <HeaderUl isOpen={isMenuOpen}>
          {isLoggedIn ? (
            <HeaderLi>
              <EnbUl>
                <Link to="/MyPage" onClick={handleMenuItemClick}>
                  <HeaderH2>마이페이지</HeaderH2>
                </Link>
                <Link to="/signUp" onClick={handleLogout}>
                  <HeaderH2>로그아웃</HeaderH2>
                </Link>
              </EnbUl>
              <GnbUl>
                <Link to="/main" onClick={handleMenuItemClick}>
                  <HeaderH2>소개</HeaderH2>
                </Link>
                <Link to="/video" onClick={handleMenuItemClick}>
                  <HeaderH2>동영상 구매</HeaderH2>
                </Link>
                <Link to="/videoSales" onClick={handleMenuItemClick}>
                  <HeaderH2>동영상 판매</HeaderH2>
                </Link>
                <Link to="/service" onClick={handleMenuItemClick}>
                  <HeaderH2>고객센터</HeaderH2>
                </Link>
              </GnbUl>
            </HeaderLi>
          ) : (
            <HeaderLi>
              <EnbUl>
                <Link to="/login" onClick={handleMenuItemClick}>
                  <HeaderH2>로그인</HeaderH2>
                </Link>
                <Link to="/signUp" onClick={handleMenuItemClick}>
                  <HeaderH2>회원가입</HeaderH2>
                </Link>
              </EnbUl>
              <GnbUl>
                <Link to="/main" onClick={handleMenuItemClick}>
                  <HeaderH2>소개</HeaderH2>
                </Link>
                <Link to="/video" onClick={handleMenuItemClick}>
                  <HeaderH2>동영상 구매</HeaderH2>
                </Link>
                <Link to="/videoSales" onClick={handleMenuItemClick}>
                  <HeaderH2>동영상 판매</HeaderH2>
                </Link>
                <Link to="/service" onClick={handleMenuItemClick}>
                  <HeaderH2>고객센터</HeaderH2>
                </Link>
              </GnbUl>
            </HeaderLi>
          )}
        </HeaderUl>
      </HeaderDiv>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #202124;
  width: 100%;
  border-bottom: 1px solid rgba(108, 108, 108, 0.57);
  position: fixed;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 768px) {
  
  }
`;


const HeaderDiv = styled.header`
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
`;


const HeaderUl = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  background-color: #202124;
  padding: 15px 0;
  margin: 0;

  @media screen and (min-width: 769px) {
    display: flex;
    position: static;
    background-color: transparent;
    width: auto;
  }

  @media screen and (max-width: 768px) {
    top: 101%;
  }
`;

const HeaderLi = styled.li`
  color: #fff;
`;

const GnbUl = styled.ul`
  display: flex;
  margin-top: 1.5vh;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const EnbUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const HeaderH2 = styled.h2`
  margin: 0.5vh 0.5vw;
  color: #fff;
  font-size: 0.8vw;
  cursor: pointer;

  &:hover {
    color: #a0a0a0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 1.5vw;
    margin: 20px 15px;
  }
`;

const LogoImage = styled.img`
  width: 6vw;
`;

const MenuIcon = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  list-style-type: none;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }

  div {
    width: 3vw;
    height: 0.4vh;
    background-color: #fff;
    margin: 0.4vw 0;
  }
`;

export default Header;
