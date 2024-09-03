import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';
import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { PostContext } from '../context/MypageContext';

const Aside = () => {
  const navigate = useNavigate();
  const { logOut } = useLoginContext();
  const { profileUrl, setProfileUrl } = useContext(PostContext);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    // 유저 정보 가져오기
    async function getInfo() {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      setUserInfo(user.user_metadata);
      setProfileUrl(
        `https://dsbqloxhsrfdkumyhtlg.supabase.co/storage/v1/object/public/profile_img/${user.user_metadata.avatar_url}`
      );
    }
    getInfo();
  }, [setProfileUrl]);

  return (
    <SySide>
      <SyUserImgBox>
        <SyUserImg src={profileUrl} alt="유저 프로필" />
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
  height: 100%;
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
