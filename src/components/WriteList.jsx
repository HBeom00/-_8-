import styled from 'styled-components';

const WriteList = ({ post }) => {
  return (
    <List>
      <span>가게 상호명: {post.storeName}</span>
      <span>이미지: {post.image.name}</span>
      <span>주소: {post.address}</span>
      <span>지역: {post.region}</span>
      <span>별점: {post.rating}</span>
      <span>후기: {post.review}</span>
    </List>
  );
};

export default WriteList;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;
