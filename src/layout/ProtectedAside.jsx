import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { PostContext } from '../context/MypageContext';

const Aside = () => {
  const navigate = useNavigate();
  const { logOut } = useLoginContext();
  const [userInfo, setUserInfo] = useState([]);
  const { profileUrl, setProfileUrl } = useContext(PostContext);

  useEffect(() => {
    getInfo();
  }, [setProfileUrl]);

  async function getInfo() {
    const {
      data: { user }
    } = await supabase.auth.getUser();
    setProfileUrl(
      `https://dsbqloxhsrfdkumyhtlg.supabase.co/storage/v1/object/public/profile_img/${user.user_metadata.avatar_url}`
    );
    setUserInfo(user.user_metadata);
  }
  return (
    <SySide>
      <SyUserImgBox>
        <SyUserImg src={profileUrl} alt={userInfo.nickname} />
      </SyUserImgBox>
      <SyUserName>닉네임: {userInfo.nickname}</SyUserName>
      <SyUserText>{userInfo.comment}</SyUserText>
      <SyBtn onClick={() => logOut()}>LogOut</SyBtn>
      <SyBtn onClick={() => navigate('/mypage')}>My Page</SyBtn>
    </SySide>
  );
};

const SySide = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffe31d;
`;

const SyUserImgBox = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;
const SyUserName = styled.strong`
  font-size: 18px;
  display: block;
  margin-top: 20px;
  font-weight: 700;
`;
const SyUserText = styled.p`
  margin: 10px 0 50px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const SyUserImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  object-fit: cover;
`;

const SyBtn = styled.button`
  background: #fff;
  padding: 10px 0;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid #000;
  background: #ffe31d;
  &:hover {
    background: #fff;
  }
`;

export default Aside;
