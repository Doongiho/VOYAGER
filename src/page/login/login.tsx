import React from 'react';
import styled from 'styled-components';

const Login: React.FC = () => {
    return (
      <div>
        <LoginContainer>
            <h1>로그인 페이지</h1>
        </LoginContainer>
      </div>
    );
  };
  
const LoginContainer = styled.div`
  background-color: #202124;
  height:100vh;
`;
export default Login;
