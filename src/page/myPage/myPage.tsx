import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const MyPage: React.FC = () => {
  const loggedInUserEmail = localStorage.getItem('loggedInUser');
  const allUsersDataString = localStorage.getItem('userData');
  const allUsersData = allUsersDataString ? JSON.parse(allUsersDataString) : [];
  const userData = allUsersData.find(
    (user: any) => user.email === loggedInUserEmail
  );
  const twitterImage = userData ? userData.twitterImage : ''
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [editingProfileImage, setEditingProfileImage] = useState(false);
  const [profileImage, setProfileImage] = useState(twitterImage);

  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [message, setMessage] = useState('');

  const handleProfileImageChange = (newImageUrl: string | ArrayBuffer | null) => {
    if (newImageUrl) {
      setProfileImage(newImageUrl.toString());
      setEditingProfileImage(false);
      if (userData) {
        const updatedUserData = { ...userData, twitterImage: newImageUrl.toString() };
        const updatedAllUsersData = allUsersData.map((user: any) =>
          user.email === loggedInUserEmail ? updatedUserData : user
        );
        localStorage.setItem('userData', JSON.stringify(updatedAllUsersData));
      }
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = data => {
    if (!userData) return;

    if (data.newPassword !== data.confirmPassword) {
      setMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    const updatedUserData = { ...userData, password: data.newPassword };
    const updatedAllUsersData = allUsersData.map((user: any) =>
      user.email === loggedInUserEmail ? updatedUserData : user
    );
    localStorage.setItem('userData', JSON.stringify(updatedAllUsersData));
    setMessage('비밀번호가 성공적으로 변경되었습니다.');
    reset();
    setShowPasswordFields(false);
  };

  if (!userData) {
    return <ErrorMessage>사용자 데이터를 찾을 수 없습니다.</ErrorMessage>;
  }

  const { email, location1, location2, location3, name, username, password } = userData;

  return (
    <MyPageContainer>
      <MyPageDiv>
        <MyPageH2>마이 페이지</MyPageH2>
        <ProfileImage
          src={profileImage}
          alt="프로필 이미지"
          onClick={() => setEditingProfileImage(true)}
        />
        <MyPageUls><MyPageLis>이름</MyPageLis><MyPageLi>{name}</MyPageLi></MyPageUls>
        <MyPageUls><MyPageLis>닉네임</MyPageLis><MyPageLi>{username}</MyPageLi></MyPageUls>
        <MyPageUls><MyPageLis>이메일</MyPageLis><MyPageLi>{email}</MyPageLi></MyPageUls>
        {showPasswordFields ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <MyPagePass>
              <MyPageUls><MyPageLis>새 비밀번호</MyPageLis><MyPageLi>
                <Input
                  type="password"
                  {...register("newPassword", {
                    pattern: {
                      value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                      message: '영문자, 숫자, 특수문자 포함 8 ~ 20자로 입력해주세요'
                    },
                    maxLength: 20,
                    minLength: 8
                  })}
                />
                {errors.newPassword && <ErrorMessage>새 비밀번호를 입력해주세요.</ErrorMessage>}
              </MyPageLi></MyPageUls>
              <MyPageUls><MyPageLis>비밀번호 확인</MyPageLis><MyPageLi>
                <Input
                  type="password"
                  {...register("confirmPassword", { required: true })}
                />
                {errors.confirmPassword && <ErrorMessage>비밀번호 확인을 입력해주세요.</ErrorMessage>}
              </MyPageLi></MyPageUls>
              <MyPageLi1>
                <SubmitButton type="submit">비밀번호 변경</SubmitButton>
                <CloseButton type="button" onClick={() => setShowPasswordFields(false)}>취소</CloseButton>
              </MyPageLi1>
            </MyPagePass>
            {message && <Message>{message}</Message>}
          </form>
        ) : (
          <MyPageUl>
            <MyPageUls><MyPageLis>비밀번호</MyPageLis><MyPageLi>{password}</MyPageLi></MyPageUls>
            <MyPageLi>
              <ResetButton type="button" onClick={() => setShowPasswordFields(true)}>
                비밀번호 재설정
              </ResetButton>
              {message && <Message>{message}</Message>}
            </MyPageLi>
          </MyPageUl>
        )}
        <MyPageUls>
          <MyPageLis>주소</MyPageLis>
          <MyPageLi>{location1}<br />{location2} <br />{location3}</MyPageLi>
        </MyPageUls>
      </MyPageDiv>
      {editingProfileImage && (
        <>
          <Overlay onClick={() => setEditingProfileImage(false)} />
          <FormContainer>
            <Form>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => handleProfileImageChange(e.target.files?.[0] ? URL.createObjectURL(e.target.files[0]) : null)}
              />
              <ButtonDiv>
                <SubmitButton type="submit">이미지 업로드</SubmitButton>
                <CloseButton type="button" onClick={() => setEditingProfileImage(false)}>취소</CloseButton>
              </ButtonDiv>
            </Form>
          </FormContainer>
        </>
      )}
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  background-color: #202124;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  text-align: center;
  position: relative;
  padding-bottom: 50px;
`;

const MyPageDiv = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  width: 25vw;
  padding: 0.5rem 1.5rem;
  margin: 0 auto;
  height: 100%;
`;

const MyPageH2 = styled.h2`
  font-size: 1.5vw
`;

const ProfileImage = styled.img`
  width: 8vh;
  border-radius: 50%;
  margin-bottom: 2vh;
  height: 8vh;
`;

const MyPageUl = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
  justify-content: space-between;
`;

const MyPageLi = styled.li`
  list-style-type: none;
  font-size: 1vw;
  margin: 1vh 0;
  text-align: left;
`;

const MyPageLi1 = styled.li`
  margin-left: 8vw;
  text-align: left;
`;

const MyPagePass = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageUls = styled.ul`
  display: flex;
  margin: 0px;
  padding: 0px;
`;

const MyPageLis = styled.li`
  list-style-type: none;
  font-size: 1vw;
  margin: 5px 0;
  width: 8vw;
  text-align: left;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8vw;
`;

const Message = styled.p`
  text-align: left;
  color: green;
  margin: 0px;
  font-size: 0.8vw;
`;

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 10px;
  z-index: 1001;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 15%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResetButton = styled.button`
  color: #9a09ff;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 0.9vw;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1vh 1vw;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 15vw;
  font-size: 1vw;
  height: 1vh;
`;

const SubmitButton = styled.button`
  padding: 1vh 1vw;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 25px;
  width: 8vw;
  font-size:0.8vw;
`;

const CloseButton = styled.button`
  background-color: #dc3545;
  padding: 1vh 1vw;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 5vw;
  font-size:0.8vw;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
`;

export default MyPage;
