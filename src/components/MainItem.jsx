import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SyListItem = styled.li`
  width: 50%;
  margin-bottom: 50px;
`;

const MainItem = ({ data }) => {
  return (
    <SyListItem>
      <Link to={`/detail?id=${data.id}`}>
        <div className="food_imgbox">
          <img src={data.img_path} alt="가상 이미지"></img>
        </div>
        <div className="text_box">
          <strong>상표: {data.store_name}</strong>
          <p>주소: {data.address}</p>
          <span>지역: {data.location}</span>
        </div>
        <p>리뷰: {data.comment}</p>
      </Link>
    </SyListItem>
  );
};

export default MainItem;
