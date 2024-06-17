import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterItem>
          <FooterText>보이저 | 서울특별시 노원구 초안산로 12 | 고객센터 1234-1234</FooterText>
        </FooterItem>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #202124;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  border-top: 1px solid rgba(108, 108, 108, 0.57);
`;

const FooterContent = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterItem = styled.li`
  display: flex;
  justify-content: center;
`;

const FooterText = styled.span`
  font-size: 1vw;
  color: #b9b9b9;
  font-weight: 400;
  margin-left: 6px;
`;

export default Footer;
