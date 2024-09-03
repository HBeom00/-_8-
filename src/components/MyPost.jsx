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
            <SyPostCard key={el.id}>
              <SyProfileDiv>
                <SyProfileImg src={el.img_path} alt="food_img" />
              </SyProfileDiv>
              <SyContentDiv>
                <div>상호명: {el.store_name}</div>
                <div>주소: {el.address}</div>
              </SyContentDiv>
              <div>
                <SyButton onClick={() => navigate(`/writing?id=${el.id}`)}>수정</SyButton>
                <SyButton onClick={() => ondeletePost(el.id)}>삭제</SyButton>
              </div>
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
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(220, 20, 60); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background: rgba(220, 20, 60, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
const SyPostCard = styled.div`
  border-radius: 12px;
  border: 1px solid black;
  width: 44%;
  height: 46%;
`;

const SyProfileDiv = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SyProfileImg = styled.img`
  width: 50%;
`;

const SyContentDiv = styled.div`
  line-height: 20px;
  font-size: 20px;
`;

const SyButton = styled.button``;
