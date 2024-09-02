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
              <div>
                <SyProfileImg src={el.img_path} alt="food_img" />
              </div>
              <div>
                <div>{el.store_name}</div>
                <div>{el.comment}</div>
              </div>
              <div>
                <button onClick={() => navigate(`/writing?id=${el.id}`)}>수정</button>
                <button onClick={() => ondeletePost(el.id)}>삭제</button>
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
`;
const SyPostCard = styled.div`
  border-radius: 12px;
  border: 1px solid black;
  width: 44%;
  height: 46%;
`;

const SyProfileImg = styled.img`
  width: 100%;
  border-radius: 12px 12px 0 0;
`;
