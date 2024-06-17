import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import ImageGithub from '../../assets/github-6980894_640.png';
import { IFormInput } from '../../types/IFormInput';

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const { register, handleSubmit, formState: { isValid } } = useForm<IFormInput>();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const storedUserInfo = localStorage.getItem('userData');

        if (storedUserInfo) {
            const userData: IFormInput = JSON.parse(storedUserInfo);
            if (data.email === userData.email && data.password === userData.password) {
                onLogin();
                navigate('/main');
            } else {
                setErrorMessage('이메일 또는 비밀번호를 다시 확인하세요.');
            }
        } else {
            setErrorMessage('등록된 사용자 정보가 없습니다.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
    <LoginContainer>
        <LoginDiv onSubmit={handleSubmit(onSubmit)}>
            <LoginTitle>로그인</LoginTitle>
            <LoginBox>
                <Div>
                    <DivIcon>
                        <Icon className="material-symbols-outlined">mail</Icon>
                    </DivIcon>
                    <Input
                        type="text"
                        placeholder="이메일을 입력해주세요."
                        id="email"
                        {...register("email", {
                            required: true,
                        })}
                    />
                </Div>
                <Div>
                    <DivIcon>
                        <Icon className="material-symbols-outlined">lock</Icon>
                    </DivIcon>
                    <Input
                        {...register("password", {
                            required: true,
                        })}
                        type={showPassword ? "text" : "password"}
                        placeholder="영문자, 숫자, 특수문자 포함 8~20자."
                        id="password"
                    />
                    <LockIcon className="material-symbols-outlined" onClick={togglePasswordVisibility}>
                        {showPassword ? "visibility" : "visibility_off"}
                    </LockIcon>
                    <DivIcon>
                        <Icon className="material-symbols-outlined">lock</Icon>
                    </DivIcon>
                </Div>
                {errorMessage && (
                    <Div>
                        <DivError>
                            <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                        </DivError>
                        <ErrorP>{errorMessage}</ErrorP>
                    </Div>
                )}
                <SpanButton>
                    <LoginButton
                        type="submit"
                        isValid={isValid}>
                        로그인하기
                    </LoginButton>
                    <Button><Link to="/signUp" style={{
                        textDecorationLine: 'none', color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '17px'
                    }}>회원가입</Link></Button>
                </SpanButton>
                <PasswordP>비밀번호 재설정</PasswordP>
                <SpanSocial>
                    <GitHubImage src={ImageGithub} alt="Flash" />
                    <SocialLogin>깃허브로 간편 로그인하기</SocialLogin>
                </SpanSocial>
            </LoginBox>
        </LoginDiv>
    </LoginContainer>
    );
};

const LoginContainer = styled.div`
    background-color: #202124;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    text-align: center;
`;

const LoginDiv = styled.form`
    background-color: #fff;
    border-radius: 1rem;
    margin: 30vh 0 15vh 0;
    padding: 1.5rem 2.5rem;
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
    font-size:27px;
    font-weight:bolder;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    border: 1px solid #00000012;
    background: #00000012;
    color: #3b393973;
    font-weight: bolder;
    cursor: pointer;
    box-shadow: 2px 2px 2px #b2b2b2;
    width: 100%;
    padding: 0.6rem 1.5rem 0.6rem 2.875rem;
    line-height: 24px;
    border-radius: 1rem;
    font-size:17px;

    &:focus {
        outline: none;
        border-color: #3b393973;
    }
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
    font-size: 22px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #7c7c7c;
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
    width: 48%;
    border-radius: 1rem;
    border: 1px solid #907AE7;
    background: #907AE7;
    cursor: pointer;
    padding: calc(0.5rem - 3.2px);
    box-shadow: 2px 2px 2px #b2b2b2;

    &:hover {
        background-color: #8774d9;
    }
`;
const LoginButton = styled.button<{ isValid: boolean }>`
    width: 48%;
    border-radius: 1rem;
    border: none;
    background: #907AE7;
    color: #fff;
    padding: calc(0.5rem - 3.2px);
    font-weight: bolder;
    font-size: 17px;
    box-shadow: 2px 2px 2px #b2b2b2;
    background-color: ${props => props.isValid ? '#907AE7' : '#00000012'};
    color: ${props => props.isValid ? '#FFF' : '#555656'};
    cursor: ${props => props.isValid ? 'pointer' : 'no-drop'};
`;


const PasswordP = styled.p`
    color: #767676cf;
    align-self: end;
    cursor: pointer;
    font-size:13px;
    font-weight:bold;
    margin-right:0.3rem;
`;

const DivError = styled.span`
    position: absolute;
    left: 0.6rem;
    top:0px;
}
`;

const ErrorIcon = styled.div`
    font - size: 21px;
    position: absolute;
    transform: translateY(-50 %);
    color: #F90;
}
`;

const ErrorP = styled.div`
    padding: 0rem 1rem 0rem 2.4rem;
    color:#F90;
    font-size:15px;
`;

const SpanSocial = styled.span`
    display:flex;
    width:100%;
    text-align:center;
    justify-content: space-between;
    margin-top:20px;
`;

const GitHubImage = styled.img`
    display: block;
    border-radius: 0.5rem;
    cursor: pointer;
    width:58px;
    height:55px;
    margin-left:0.5rem;
`;

const SocialLogin = styled.button`
    width: 75%;
    border-radius: 1rem;
    margin-bottom: 20px;
    border: 1px solid #717171;
    background: #717171;
    color: #fff;
    font-weight: bolder;
    margin-top:8px;
    cursor: pointer;
    box-shadow: 2px 2px 2px #b2b2b2;
    padding: 0.5rem;
    font-size:15px;
    
    &:hover {
        background-color: #5a5858;
    }
`;

export default Login;