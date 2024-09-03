import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainItem = ({ data }) => {
  return (
    <SyListItem>
      <Link to={`/detail?id=${data.id}`}>
        <SyImgBox>
          <SyImg src={data.img_path} alt="가상 이미지"></SyImg>
          <span>{'⭐'.repeat(data.star)}</span>
        </SyImgBox>
        <SyTextBox>
          <strong>상표: {data.store_name}</strong>
          <p>주소: {data.address}</p>
        </SyTextBox>
      </Link>
    </SyListItem>
  );
};

const SyListItem = styled.li`
  width: calc(50% - 32px);
  margin-right: 30px;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
  &:hover {
    img {
      transform: scale(1.2);
      transition: transform 0.4s;
    }
  }
`;

const SyImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  span {
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
const SyImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.4s;
`;
const SyTextBox = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
  strong {
    display: inline-block;
    margin-bottom: 20px;
  }
`;
export default MainItem;
