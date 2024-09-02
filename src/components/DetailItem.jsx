import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import supabase from '../supabaseClient';

const DetailItem = () => {
  const [posts, setPosts] = useState();

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select(`*`).eq('id', id);
    setPosts(data[0]);
  }

  return (
    <div>
      <button onClick={() => history.go(-1)}>뒤로가기</button>
      <div className="profile_box">
        <div className="img_box">
          <img src="" alt="프로필 이미지" />
        </div>
        <strong>{posts?.store_name}</strong>
      </div>
      <div className="content_box">
        <div className="img_box">
          <img src="음식 이미지 데이터" alt="음식 이미지" />
        </div>
        <ul className="text_box">
          <li>가게 상호명: {posts?.store_name}</li>
          <li>주소: {posts?.address}</li>
          <li>지역: {posts?.location}</li>
          <li>별점: {posts?.star}</li>
          <li>후기: {posts?.comment}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailItem;
