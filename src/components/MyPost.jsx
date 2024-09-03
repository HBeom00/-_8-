import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../context/MypageContext';

const MyPost = () => {
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    // DB data 가져오기
    async function getPosts() {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const userId = user.id;
      const { data } = await supabase.from('store').select().eq('writer', userId);

      setPosts([...data]);
    }
    getPosts();
  }, [setPosts]);

  // DB data 삭제
  async function ondeletePost(id) {
    const { data } = await supabase.from('store').delete().eq('id', id).select();

    const [deletedPost] = data;
    const filterPost = posts.filter((post) => post.id !== deletedPost.id);

    setPosts(filterPost);
  }

  return (
    <SyWrapper>
      {posts
        .sort((a, b) => b.id - a.id)
        .map((el) => {
          return (
            <SyPostCard key={el.id} onClick={() => navigate(`/detail?id=${el.id}`)}>
              <SyProfileDiv>
                <SyProfileImg src={el.img_path} alt="food_img" />
              </SyProfileDiv>
              <SyContentDivv style={{ display: 'flex', flexDirection: 'column' }}>
                <SyContentDiv>
                  <div>상표: {el.store_name}</div>
                  <div>주소: {el.address}</div>
                  <div>별점: {'⭐'.repeat(parseInt(el.star))}</div>
                </SyContentDiv>
                <SyBtnDiv>
                  <SyButton
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/writing?id=${el.id}`);
                    }}
                  >
                    수정
                  </SyButton>
                  <SyButton
                    onClick={(e) => {
                      e.stopPropagation();
                      ondeletePost(el.id);
                    }}
                  >
                    삭제
                  </SyButton>
                </SyBtnDiv>
              </SyContentDivv>
            </SyPostCard>
          );
        })}
    </SyWrapper>
  );
};
export default MyPost;

const SyWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  /* Custom Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
`;
const SyPostCard = styled.div`
  border-radius: 12px;
  border: 1px solid black;
  width: 46%;
  height: 64%;
  cursor: pointer;
`;

const SyProfileDiv = styled.div`
  height: 60%;
  overflow: hidden;
`;

const SyProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease-in-out;
  }
`;

const SyContentDivv = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  padding: 20px;
`;

const SyContentDiv = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SyBtnDiv = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const SyButton = styled.button`
  width: 60px;
  padding: 5px 0;
  background-color: #ffe31d;
  color: black;
  font-size: 16px;
  font-weight: 900;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
