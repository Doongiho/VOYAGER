import React, {useState} from 'react';
import styled from 'styled-components';
import ImageKaKao from '../../assests/kakao.png';

const Login: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
      };
      

      
    return (
      <div>
        <LoginContainer>
          <LoginDiv>
            <LoginTitle>로그인</LoginTitle>
            <LoginBox>
                <Eamile>
                    <EamileIcon className="material-symbols-outlined">mail</EamileIcon>
                    <LoginEmail type="email" placeholder='이메일을 입력해주세요'></LoginEmail>
                </Eamile>
                <Password>
                    <PasswordIcon className="material-symbols-outlined">lock</PasswordIcon>
                    <Loginpassword type={showPassword ? "text" : "password"} placeholder='비밀번호를 입력해주세요'></Loginpassword>
                    <LockIcon className="material-symbols-outlined" onClick={togglePasswordVisibility}>
                            {showPassword ? 'visibility' : 'visibility_off'}
                    </LockIcon>
                </Password>
                <SpanButton>
                    <LoginButton>로그인하기</LoginButton>
                    <SignUpButton>회원가입</SignUpButton>
                </SpanButton>
                <PasswordP>비밀번호 재설정</PasswordP>
                <SpanSocial>
                    <KakaoImage src={ImageKaKao} alt="Flash" />
                    <SocialLogin>카카오톡으로 간편 로그인하기</SocialLogin>
                </SpanSocial>
            </LoginBox>
            </LoginDiv>
        </LoginContainer>
      </div>
    );
  };
  
const LoginContainer = styled.div`
    background-color: #202124;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    margin-top:60px;
`;
const LoginDiv = styled.div`
    background-color: #fff;
    height: 70vh;
    width: 32vw;
    margin: 0 auto;
    border-radius: 30px;
        
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:23vw;
  margin:0 auto;
  
`;

const LoginTitle = styled.h1`
  margin:50px 0; 
  font-size:2vw;
    
`;


const LoginEmail = styled.input`
    width: 20vw;
    height: 2.5vw;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid #00000012;
    background: #00000012;
    color: #3b393973;
    font-weight: bolder;
    font-size: 1vw;
    padding-left: 48px;
    cursor: pointer;
`;

const Loginpassword = styled.input`
    width: 20vw;
    height: 2.5vw;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid #00000012;
    background: #00000012;
    color: #3b393973;
    font-weight: bolder;
    font-size: 1vw;
    padding-left: 48px;
    cursor: pointer;
`;

const Eamile = styled.span`
    position: relative;
    
}
`;
const Password = styled.span`
    position: relative;
    
}
`;

const EamileIcon = styled.span`
    font-size: 1.4vw;
    position: absolute;
    top: 9px;
    left: 14px;
    color: #7c7c7c;
    
}
`;


const LockIcon = styled.span`
    font-size: 1.4vw;
    position: absolute;
    cursor: pointer;
    top: 9px;
    right: 14px;
    color: #7c7c7c;
    
}
`;

const PasswordIcon = styled.span`
    font-size: 1.4vw;
    position: absolute;
    top: 9px;
    left: 14px;
    color: #7c7c7c;
    }
`;

const SpanButton = styled.span`
    margin-top:20px;
    display:flex;
    width:23vw;
    text-align:center;
    justify-content: space-between;
    cursor: pointer;
`;

const LoginButton = styled.button`
    width: 11vw;
    height: 2.4vw;
    border-radius: 10px;
    border: 1px solid #907AE7;
    background: #907AE7;
    color: #fff;
    font-weight: bold;
    font-size:1vw;
    cursor: pointer;
    
`;
const SignUpButton = styled.button`
    width: 11vw;
    height: 2.4vw;
    border-radius: 10px;
    border: 1px solid #907AE7;
    background: #907AE7;
    color: #fff;
    font-weight: bold;
    font-size:1vw;
    cursor: pointer;
    
`;


const PasswordP = styled.p`

    color: #767676cf;
    align-self: end;
    font-size:1vw;
    cursor: pointer;

`;

const SpanSocial = styled.span`
    margin-top:30px;
    display:flex;
    width:23vw;
    text-align:center;
    justify-content: space-between;
`;

const KakaoImage = styled.img`
  display: block;
  width: 3vw;
  height:3vw;
  border-radius: 10px;
  cursor: pointer;
}`;



const SocialLogin = styled.button`
    width: 18vw;
    height: 2.5vw;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid #717171;
    background: #717171;
    color: #fff;
    font-weight: bolder;
    margin-top:5px;
    font-size: 1vw;
    cursor: pointer;
    
`;









export default Login;
