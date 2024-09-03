import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const Aside = () => {
  const navigate = useNavigate();
  const { logOut } = useLoginContext();

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    setUserInfo(user.user_metadata);
  }

  console.log(userInfo);
  return (
    <SySide>
      <SyUserImgBox>
        <SyUserImg src={userInfo.avatar_url} alt="유저 프로필" />
      </SyUserImgBox>
      <SyUserName>닉네임: {userInfo.nickname}</SyUserName>
      <SyBtn onClick={() => logOut()}>LogOut</SyBtn>
      <SyBtn onClick={() => navigate('/mypage')}>My Page</SyBtn>
      <SyBtn onClick={() => navigate('/')}>Home</SyBtn>
      <SyBtn onClick={() => navigate('/mypage')}>내 게시글</SyBtn>
    </SySide>
  );
};

const SySide = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SyUserImgBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: #ffe31d;
`;
const SyUserName = styled.strong`
  font-size: 18px;
  display: block;
  margin: 20px 0 50px;
  font-weight: 700;
`;
const SyUserImg = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
`;

const SyBtn = styled.button`
  background: #fff;
  padding: 10px 0;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #666;
  &:hover {
    background: #ffe31d;
  }
`;

export default Aside;
