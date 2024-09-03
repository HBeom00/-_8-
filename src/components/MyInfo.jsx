import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useContext, useEffect, useRef, useState } from 'react';
import { PostContext } from '../context/MypageContext';

const MyInfo = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isonClickUpdateBtn, setIsonClickUpdateBtn] = useState(true);
  const [changeName, setChangeName] = useState('');
  const [changeComment, setChangeComment] = useState('');
  const fileInputRef = useRef(null);
  const { profileUrl, setProfileUrl } = useContext(PostContext);

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

  // 수정 버튼 클릭시 불린값 변경
  const onUpdateInfoBtn = async (id) => {
    if (isonClickUpdateBtn === false) {
      if (changeName.length === 0 || changeComment.length === 0) {
        alert('내용을 입력해주세요.');
        return;
      }
      const updateSuccess = await updatePost(id);

      if (updateSuccess) {
        // 업데이트가 성공적으로 완료되면 페이지 새로고침
        window.location.reload();
      } else {
        alert('업데이트에 실패했습니다. 다시 시도해주세요.');
      }
    }

    setIsonClickUpdateBtn((prev) => !prev);
  };

  // 유저 정보 수정
  async function updatePost(id) {
    try {
      // profiles 테이블 정보 수정
      await supabase
        .from('profiles')
        .update({
          nickname: changeName,
          comment: changeComment
        })
        .eq('id', id)
        .select();

      // auth 정보 수정
      await supabase.auth.updateUser({
        data: { nickname: changeName, comment: changeComment }
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  // input에서 이미지 파일 불러오기
  async function handleFileInputChange(files) {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data } = await supabase.storage.from('profile_img').upload(`${userInfo.email}_${Date.now()}.png`, file, {
      cacheControl: '3',
      upsert: false
    });

    setProfileUrl(`https://dsbqloxhsrfdkumyhtlg.supabase.co/storage/v1/object/public/profile_img/${data.path}`);

    // profiles 테이블에서 이미지 값 변경
    await supabase
      .from('profiles')
      .update({
        avatar_url: data.path
      })
      .eq('id', userInfo.sub)
      .select();

    // auth에서 이미지 값 변경
    await supabase.auth.updateUser({
      data: { avatar_url: data.path }
    });
  }

  return (
    <SyContainer>
      <SyImageDiv>
        <SyImage src={profileUrl} alt="사진" />
      </SyImageDiv>
      <SyInfoDiv>
        <SyInfo>
          <SyLable>ID:</SyLable>
          <SyInfoContent>{userInfo.email}</SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyLable>Name:</SyLable>
          <SyInfoContent>
            {isonClickUpdateBtn ? (
              userInfo.nickname
            ) : (
              <input type="text" value={changeName} onChange={(el) => setChangeName(el.target.value)} />
            )}
          </SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyLable>한줄 소개:</SyLable>
          <SyInfoContent>
            {isonClickUpdateBtn ? (
              userInfo.comment
            ) : (
              <input type="text" value={changeComment} onChange={(el) => setChangeComment(el.target.value)} />
            )}
          </SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyInfoContent>
            {!isonClickUpdateBtn ? (
              <input type="file" ref={fileInputRef} onChange={(e) => handleFileInputChange(e.target.files)} />
            ) : (
              ''
            )}
          </SyInfoContent>
        </SyInfo>
      </SyInfoDiv>
      <SyButton onClick={() => onUpdateInfoBtn(userInfo.sub)}>{isonClickUpdateBtn ? '수정' : '완료'}</SyButton>
    </SyContainer>
  );
};

export default MyInfo;

const SyContainer = styled.div`
  height: 100%;
  position: relative;
`;

const SyImageDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SyImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const SyInfoDiv = styled.div`
  position: absolute;
  top: 27%;
  left: 47%;
  width: 340px;
  font-size: 20px;
  font-weight: 900;
`;

const SyInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const SyLable = styled.p`
  width: 40%;
  margin-bottom: 30px;
  text-align: right;
`;

const SyInfoContent = styled.p`
  margin-left: 20px;
  width: 90%;
  text-align: center;
`;

const SyButton = styled.button`
  position: absolute;
  left: 17%;
  bottom: 33%;
  width: 100px;
  padding: 10px 20px;
  background-color: #ffd700;
  color: black;
  font-size: 16px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
