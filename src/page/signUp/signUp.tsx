import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import PostcodeModal from '../../components/modal/postCodeModal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IFormInput } from '../../types/IFormInput';


const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm<IFormInput>();


  const navigate = useNavigate();
  const hiddenInputRef = useRef<HTMLInputElement | null>(null);

  const [userId, setUserId] = useState<number>(() => {
    const storedUserId = localStorage.getItem('userId');
    return storedUserId ? parseInt(storedUserId, 10) : 1;
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(parseInt(storedUserId, 10));
    }
  }, []);


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newUserId = userId + 1;
    localStorage.setItem('userId', newUserId.toString());

    const twitterImageName = watch('twitterImage') ? watch('twitterImage')!.name : null;

    const userData = {
      ...data,
      id: userId,
      twitterImage: twitterImageName
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');

    alert('회원가입이 완료되었습니다.');
    navigate('/');
  }

  const password = useRef<string>();
  password.current = watch("password");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showPostcodeModal, setShowPostcodeModal] = useState(false);

  const togglePostcodeModal = () => {
    setShowPostcodeModal((prevState) => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePasswordConfirmVisibility = () => {
    setShowPasswordConfirm((prevState) => !prevState);
  };
  const fileUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('twitterImage', file);
    }
  };
  const handleComplete = (data: any) => {
    let fullAddress = '';
    let extraAddress = '';

    if (data.userSelectedType === 'R') {
      fullAddress = data.roadAddress;
    } else {
      fullAddress = data.jibunAddress;
    }

    if (data.userSelectedType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('location1', data.zonecode);
    setValue('location2', fullAddress);
    setValue('location3', '');
    setValue('location4', extraAddress);

    togglePostcodeModal();
  };

  const handleButtonClick = () => {
    togglePostcodeModal();
  };
  const handleBackendError = (errorMessage: string) => {
    alert(errorMessage);
  };
  const handleProfileButtonClick = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };

  return (
    <div>
      <SignUpContainer>
        <SignUpDiv onSubmit={handleSubmit(onSubmit)}>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpBox>
            <P>프로필</P>
            <ProfileDiv>
              {watch('twitterImage') && <UserImage src={URL.createObjectURL(watch('twitterImage')!)} alt="프로필 이미지" />}
              <ProfileButton htmlFor="twitterImage"><ProfileInput
                type="file"
                {...register("twitterImage", {
                  required: true,
                })}
                ref={(e) => {
                  hiddenInputRef.current = e;
                }}
                name="twitterImage"
                onChange={fileUploadHandler}
              ></ProfileInput>사진 선택</ProfileButton>
            </ProfileDiv>
            <P>이름</P>
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">person</Icon>
              </DivIcon>
              <Input
                type="text"
                placeholder="이름을 입력해주세요."
                id="name"
                {...register("name", {
                  required: true,
                })}
              />
            </Div>
            <P>닉네임</P>
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">person</Icon>
              </DivIcon>
              <Input
                type="text"
                placeholder="닉네임을 입력해주세요."
                id="username"
                {...register("username", {
                  required: true,
                })}
              />
            </Div>
            <SignUpAddressP>주소</SignUpAddressP>
            <AddressDiv>
              <PostcodeModal
                isOpen={showPostcodeModal}
                onComplete={handleComplete}
                onRequestClose={togglePostcodeModal}
              />
              <AddressInput1
                type="text"
                id="sample6_postcode"
                placeholder="우편번호"
                {...register("location1", { required: true })}
                readOnly
              />
              <AddressButton type="button" onClick={handleButtonClick}>우편번호 찾기</AddressButton>
              <AddressInput2
                type="text"
                id="sample6_address"
                placeholder="주소"
                {...register("location2", { required: true })}
                readOnly
              />
              <AddressInput3
                type="text"
                id="sample6_detailAddress"
                placeholder="상세주소"
                {...register("location3", { required: true })}
              />
              <AddressInput4
                type="text"
                id="sample6_extraAddress"
                placeholder="참고항목"
                {...register("location4", { required: true })}
                readOnly
              />
            </AddressDiv>
            <P>이메일</P>
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">mail</Icon>
              </DivIcon>
              <Input
                placeholder="이메일을 입력해주세요."
                id="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "이메일 형식에 맞게 써주세요."
                  }
                })}
              />
            </Div>
            {errors.email && (
              <Div>
                <DivError>
                  <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                </DivError>
                <ErrorP>
                  {errors.email.type === "pattern"
                    ? '이메일 형식에 맞게 써주세요.'
                    : '이메일을 입력해주세요.'}
                </ErrorP>
              </Div>
            )}
            <P>비밀번호</P>
            <DivPass>
              <Div>
                <DivIcon>
                  <Icon className="material-symbols-outlined">lock</Icon>
                </DivIcon>
                <Input
                  {...register("password", {
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      message: '영문자, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
                    },
                    maxLength: 20,
                    minLength: 8
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
              {errors.password && (
                <Div>
                  <DivError>
                    <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                  </DivError>
                  <ErrorP>
                    {errors.password.type === "pattern"
                      ? '비밀번호는 영문자, 숫자, 특수문자를 모두 포함해야 합니다.'
                      : '비밀번호의 길이가 8 ~ 20자가 되어야 합니다.'}
                  </ErrorP>
                </Div>
              )}
              <Div>
                <DivIcon>
                  <Icon className="material-symbols-outlined">lock</Icon>
                </DivIcon>
                <Input
                  {...register("passwordConfirm", {
                    required: { value: true, message: "비밀번호가 일치하지 않습니다." },
                    validate: (value) => value === password.current,
                  })}
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="비밀번호를 확인해 주세요."
                  id="passwordConfirm"
                />
                <LockIcon className="material-symbols-outlined" onClick={togglePasswordConfirmVisibility}>
                  {showPasswordConfirm ? "visibility" : "visibility_off"}
                </LockIcon>
              </Div>

              {errors?.passwordConfirm?.type === "required" && (
                <Div>
                  <DivError>
                    <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                  </DivError>
                  <ErrorP>{errors?.passwordConfirm?.message}</ErrorP>
                </Div>
              )}
              {errors?.passwordConfirm?.type === "validate" && (
                <Div>
                  <DivError>
                    <ErrorIcon className="material-symbols-outlined">error</ErrorIcon>
                  </DivError>
                  <ErrorP>비밀번호가 일치하지 않습니다.</ErrorP>
                </Div>
              )}
            </DivPass>
            <SignUpButton
              type="submit"
              isValid={isValid}
            >회원가입</SignUpButton>
          </SignUpBox>
        </SignUpDiv>
      </SignUpContainer>
    </div>
  );
};

const SignUpContainer = styled.div`
  background-color: #202124;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SignUpDiv = styled.form`
  background-color: #fff;
  height: 100%;
  border-radius: 1rem;
  margin: 200px 0;
  padding: 1.5rem 2.5rem;
`;
const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
`;

const SignUpTitle = styled.h1`
  font-size:27px;
  font-weight:bolder;
  margin-bottom: 2rem;
`;
const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid #00000012;
  margin:0 auto;
  border-radius: 50%;
`;
const ProfileButton = styled.label`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #907AE7;
  color: #FFF;
  border: none;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  margin: 20px 0;
`;
const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;
const ProfileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
const DivError = styled.span`
  position: absolute;
  left: 0.6rem;
}
`;
const ErrorP = styled.div`
  padding: 0rem 1rem 0rem 2.4rem;
  color:#F90;
  font-size:15px;

`;
const ErrorIcon = styled.div`
  font-size: 21px;
  position: absolute;
  transform: translateY(-50%);
  color: #F90;


`;
const Input = styled.input`
  border: 1px solid #00000012;
  background: #00000012;
  color: #555656;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  width: 100%;
  padding: 0.7rem 1.5rem 0.6rem 2.875rem;
  border-radius: 1rem;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #3b393973;
    color: #3b393973;
  }
`;
const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom:20px;
  text-align: left;
}
`;
const DivPass = styled.div`
  width: 100%;
}
`;
const DivIcon = styled.span`
  position: absolute;
  left: 1.0625rem;
}
`;

const Icon = styled.span`
  font-size: 23px;
  position: absolute;
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

const SignUpButton = styled.button<{ isValid: boolean }>`
  width: 100%;
  border-radius: 1rem;
  border: none;
 background-color: ${props => props.isValid ? '#907AE7' : '#00000012'};
  color: ${props => props.isValid ? '#FFF' : '#555656'};
  padding: 0.6rem;
  font-weight: bolder;
  font-size: 17px;
  box-shadow: 2px 2px 2px #b2b2b2;
  margin: 2rem 0;
  font-size: 15px;
  font-weight: bold;
  cursor: ${props => props.isValid ? 'pointer' : 'no-drop'};
    
`;





const P = styled.p`
color: #000000ed;
font-weight: bolder;
font-size:17px;
`;


const SignUpAddressP = styled.p`
color: #000000ed;
font-weight: bolder;
`;


const AddressButton = styled.button`
  width: 34%;
  border: 1px solid #b2b2b2;
  background: #F9F8F8;
  color: #7c7c7c;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  border-radius: 1rem;
  margin-bottom:20px;
  font-size:15px;
  margin-right:6rem;
  font-size:15px;
  font-weight:bold;
  &:focus {
      outline: none;
      border-color: #3b393973;
  }
`;
const AddressInput1 = styled.input`
  width: 29%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.6rem;
  border-radius: 1rem;
  font-size:15px;
  margin-bottom:20px;
  font-size:15px;
  font-weight:bold;
   &:focus {
      outline: none;
      border-color: #3b393973;
  }

`;


const AddressInput2 = styled.input`
  width: 100%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.6rem;
  border-radius: 1rem;
  font-size:15px;
  margin-bottom:20px;
  font-size:15px;
  font-weight:bold;
   &:focus {
      outline: none;
      border-color: #3b393973;
  }
`;

const AddressInput3 = styled.input`
  width: 30%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.6rem;
  border-radius: 1rem;
  font-size:15px;
  font-size:15px;
  font-weight:bold;
  &:focus {
      outline: none;
      border-color: #3b393973;
  }
 
`;

const AddressInput4 = styled.input`
  width: 53%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.6rem;
  border-radius: 1rem;
  font-size:15px;
  font-size:15px;
  font-weight:bold;
   &:focus {
      outline: none;
      border-color: #3b393973;
  }
  
`;

const AddressDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;



export default SignUp