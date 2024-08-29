import { useState } from 'react';
import { MOCK_DATA } from '../mock';
import styled from 'styled-components';

const MyPost = () => {
  const [post, setPost] = useState(MOCK_DATA);

  const onClickDeleteBtn = (id) => {
    const deletePost = post.filter((el) => el.id !== id);
    setPost(deletePost);
  };

  return (
    <SyWrapper>
      {post.map((el) => {
        return (
          <SyPostCard key={el.id}>
            <div>
              <img src={el.image} alt="food_img" style={{ width: '200px' }} />
            </div>
            <div>
              <div>{el.title}</div>
              <div>{el.hashTag}</div>
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
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const SyPostCard = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 45%;
`;
