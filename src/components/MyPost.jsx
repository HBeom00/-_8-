import { useEffect, useState } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';

const MyPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select();
    setPosts([...data]);
  }

  const onClickDeleteBtn = (id) => {
    const deletePost = posts.filter((el) => el.id !== id);
    setPosts(deletePost);
  };

  return (
    <SyWrapper>
      {posts.map((el) => {
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
              <button>수정</button>
              <button onClick={() => onClickDeleteBtn(el.id)}>삭제</button>
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
