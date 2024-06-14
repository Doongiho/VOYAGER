import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { IFormInput } from '../../types/IFormInput';

const MyPage: React.FC = () => {
    const userDataString = localStorage.getItem('userData');
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (!userData) {
        return <ErrorMessage>사용자 데이터를 찾을 수 없습니다.</ErrorMessage>;
    }

    const { email, location1, location2, location3, name, username, twitterImagePath } = userData;

    return (
        <MyPageContainer>
            <h2>마이 페이지</h2>
            <p>아이디: {email}</p>
            <p>주소: {location1}, {location2}, {location3}</p>
            {twitterImagePath && <p>프로필: <img src={`http://localhost:7777/${twitterImagePath}`} alt="Twitter Profile" /></p>}
            <p>이름: {name}</p>
            <p>닉네임: {username}</p>
        </MyPageContainer>
    );
};

const MyPageContainer = styled.div`
    background-color: #202124;
    height: 100vh;
    color: white;
    padding: 200px 0; 
`;

const LoadingMessage = styled.p`
    color: #ccc;
`;

const ErrorMessage = styled.p`
    color: red;
`;


export default MyPage;
