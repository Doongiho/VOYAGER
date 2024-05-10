import React from 'react';
import styled from 'styled-components';



const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <FooterUl>
            <FooterLi>
                <FooterH2>보이저  |  </FooterH2>
                <FooterH2>서울특별시 노원구 초안산로 12  | </FooterH2>
                <FooterH2>고객센터 1234-1234</FooterH2>
            </FooterLi>
        </FooterUl>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #202124;
  width:100%;
  height:100%;
  padding: 10px 0px;
  text-align:center;
  border-top: 1px solid rgba(108, 108, 108, 0.57); 
`;

const FooterUl = styled.ul`
    list-style-type: none;
    
`;

const FooterLi = styled.li`
    display:flex;
    justify-content: center;
`;

const FooterH2 = styled.h2`
   font-size:1vw;
   color:#b9b9b9;
   font-weight:100;
   margin-left:6px;
`;

export default Footer;
