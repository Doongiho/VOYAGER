import React, { useState } from 'react';
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
                        <Div>
                            <DivIcon>
                                <Icon className="material-symbols-outlined">mail</Icon>
                            </DivIcon>
                            <Input type="email" placeholder="이메일을 입력해주세요." />
                        </Div>
                        <Div>
                            <DivIcon>
                                <Icon className="material-symbols-outlined">lock</Icon>
                            </DivIcon>
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="영문자, 숫자 포함 8~20자."
                            />
                            <LockIcon className="material-symbols-outlined" onClick={togglePasswordVisibility}>
                                {showPassword ? "visibility" : "visibility_off"}
                            </LockIcon>
                        </Div>
                        <SpanButton>
                            <Button>로그인하기</Button>
                            <Button>회원가입</Button>
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const LoginDiv = styled.div`
  background-color: #fff;
  height: 100%;
  width: 614px;
  border-radius: .25rem;
  margin:200px 0;
`;
const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
`;
const LoginTitle = styled.h1`
  margin:50px 0; 
    
`;

const Input = styled.input`
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 100%;
  padding: 0.5rem 1.5rem 0.5rem 2.875rem;
  line-height: 24px;
  border-radius: .25rem;
`;
const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom:20px;
}
`;
const DivIcon = styled.span`
    position: absolute;
    left: 1.0625rem;
}
`;

const Icon = styled.span`
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #7c7c7c;
}


`;



const LockIcon = styled.span`
    position: absolute;
    cursor: pointer;
    top: 9px;
    right: 14px;
    color: #7c7c7c;
    
}
`;


const SpanButton = styled.div`
    margin-top:20px;
    display:flex;
    width:100%;
    text-align:center;
    justify-content: space-between;
    cursor: pointer;
`;

const Button = styled.button`
    width: 45%;
    border-radius: 10px;
    border: 1px solid #907AE7;
    background: #907AE7;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem 1.5rem 0.5rem;
    
`;


const PasswordP = styled.p`

    color: #767676cf;
    align-self: end;
    cursor: pointer;
    font-size:12px;

`;

const SpanSocial = styled.span`
    display:flex;
    width:100%;
    text-align:center;
    justify-content: space-between;
    margin:20px 0;
`;

const KakaoImage = styled.img`
  display: block;
  border-radius: .25rem;
  cursor: pointer;
  width:45px;
  height:45px;
}`;



const SocialLogin = styled.button`
    width: 70%;
    border-radius: .25rem;
    margin-bottom: 20px;
    border: 1px solid #717171;
    background: #717171;
    color: #fff;
    font-weight: bolder;
    margin-top:8px;
    cursor: pointer;
    padding: 0.5rem 1.5rem 0.5rem;
    margin-top:5px;
`;









export default Login;