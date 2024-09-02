import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../context/store';

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
                <img src={el.img_path} alt="food_img" style={{ width: '200px' }} />
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
  gap: 26px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;
const SyPostCard = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 45%;
`;
