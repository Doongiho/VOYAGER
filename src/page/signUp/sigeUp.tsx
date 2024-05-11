import React from 'react';
import styled from 'styled-components';

const SignUp: React.FC = () => {
    return (
      <div>
        <SignUpContainer>
            <h1>회원가입 페이지</h1>
        </SignUpContainer>
      </div>
    );
  };
  
const SignUpContainer = styled.div`
  background-color: #202124;
  height:100vh;
`;
export default SignUp;
