import { useNavigate } from 'react-router-dom';

const DetailItem = () => {
  const navigate = useNavigate;

  return (
    <div>
      <button onClick={() => navigate('/', { replace: true })}>뒤로가기</button>
      <div className="profile_box">
        <div className="img_box">
          <img src="프로필 이미지 데이터" alt="프로필 이미지" />
        </div>
        <strong>유저 닉네임</strong>
      </div>
      <div className="content_box">
        <div className="img_box">
          <img src="음식 이미지 데이터" alt="음식 이미지" />
        </div>
        <ul className="text_box">
          <li>가게 상호명</li>
          <li>주소</li>
          <li>지역</li>
          <li>별점</li>
          <li>후기</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailItem;
