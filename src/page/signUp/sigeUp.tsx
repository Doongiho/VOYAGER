import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcodeEmbed from 'react-daum-postcode';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const togglePasswordCheckVisibility = () => {
    setShowPasswordCheck((prevState) => !prevState);
  };
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [extraAddress, setExtraAddress] = useState('');
  const [showPostcode, setShowPostcode] = useState(false);

  const handleComplete = (data: { zonecode: string; roadAddress: string; jibunAddress: string; userSelectedType: string; bname: string; buildingName: string }) => {
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
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      extraAddress = extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setPostcode(data.zonecode);
    setAddress(fullAddress);
    setExtraAddress(extraAddress);
    setDetailAddress('');
    setShowPostcode(false);
  };

  const handleButtonClick = () => {
    setShowPostcode(true);
  };

  return (
    <div>
      <SignUpContainer>
        <SignUpDiv>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpBox>
            <P>이름</P>
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">person</Icon>
              </DivIcon>
              <Input type="text" placeholder="이름을 입력해주세요." />

            </Div>
            <SignUpAddressP>주소</SignUpAddressP>
            <AddressDiv>

              {showPostcode && (
                <div>
                  <DaumPostcodeEmbed onComplete={handleComplete} />
                </div>
              )}
              <AddressInput1
                type="text"
                id="sample6_postcode"
                placeholder="우편번호"
                value={postcode}
                readOnly
              />
              <AddressButton onClick={handleButtonClick}>우편번호 찾기</AddressButton>
              <AddressInput2
                type="text"
                id="sample6_address"
                placeholder="주소"
                value={address}
                readOnly
              />
              <AddressInput3
                type="text"
                id="sample6_detailAddress"
                placeholder="상세주소"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
              <AddressInput4
                type="text"
                id="sample6_extraAddress"
                placeholder="참고항목"
                value={extraAddress}
                readOnly
              />
            </AddressDiv>
            <P>이메일</P>
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">mail</Icon>
              </DivIcon>
              <Input type="email" placeholder="이메일을 입력해주세요." />
            </Div>
            <P>비밀번호</P>
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
            <Div>
              <DivIcon>
                <Icon className="material-symbols-outlined">lock</Icon>
              </DivIcon>
              <Input
                type={showPasswordCheck ? "text" : "password"}
                placeholder="비밀번호를 확인해 주세요."
              />
              <LockIcon className="material-symbols-outlined" onClick={togglePasswordCheckVisibility}>
                {showPasswordCheck ? "visibility" : "visibility_off"}
              </LockIcon>
            </Div>
            <SignUpButton>회원가입</SignUpButton>
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
const SignUpDiv = styled.div`
  background-color: #fff;
  height: 100%;
  width: 614px;
  border-radius: 30px;
  margin:200px 0;
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
  margin: 40px 0;
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
  right: 14px;
  color: #7c7c7c;
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #7c7c7c;
}
`;



const SignUpButton = styled.button`
  width: 100%;
  height: 2.4vw;
  border-radius: 10px;
  border: 1px solid #907AE7;
  background: #907AE7;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin:50px 0;
`;

const P = styled.p`
color: #000000ed;
font-weight: bolder;
`;


const SignUpAddressP = styled.p`
color: #000000ed;
font-weight: bolder;
`;


const AddressButton = styled.button`
  width: 38%;
  border: 1px solid #b2b2b2;
  background: #F9F8F8;
  color: #000000e8;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: .25rem;
  margin-bottom:20px;

`;
const AddressInput1 = styled.input`
  width: 38%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  line-height: 24px;
  border-radius: .25rem;
  margin-bottom:20px;

`;
const AddressInput2 = styled.input`
  width: 100%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  line-height: 24px;
  border-radius: .25rem;
  margin-bottom:20px;
`;
const AddressInput3 = styled.input`
  width: 38%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  line-height: 24px;
  border-radius: .25rem;
  margin-bottom:20px;
`;
const AddressInput4 = styled.input`
  width:38%;
  border: 1px solid #00000012;
  background: #00000012;
  color: #3b393973;
  font-weight: bolder;
  cursor: pointer;
  box-shadow: 2px 2px 2px #b2b2b2;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
  line-height: 24px;
  margin-bottom:20px;
  border-radius: .25rem;
`;

const AddressDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



export default SignUp
