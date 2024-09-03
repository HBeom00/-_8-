import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import supabase from '../supabaseClient';
import styled from 'styled-components';
import { PostContext } from '../context/MypageContext';

const DetailItem = () => {
  const [posts, setPosts] = useState();
  const { po, setPo } = useContext(PostContext);

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select(`*`).eq('id', id);
    const user = data[0].writer;
    const { dataed } = await supabase.from('profiles').select('*').eq('id', user).single();
    setPosts(data[0]);
  }
  return (
    <SyDetailBox>
      <div>
        <SyImgBox className="img_box">
          <img src={posts?.img_path} alt="음식 이미지" />
        </SyImgBox>
        <SyInfoList>
          <li>가게 상호명: {posts?.store_name}</li>
          <li>주소: {posts?.address}</li>
          <li>지역: {posts?.location}</li>
          <li>별점: {'⭐'.repeat(posts?.star)}</li>
          <li>후기: {posts?.comment}</li>
        </SyInfoList>
      </div>
    </SyDetailBox>
  );
};

const SyDetailBox = styled.div`
  padding: 0 20px;
  width: 1000px;
  box-sizing: border-box;
`;

const SyImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SyInfoList = styled.ul`
  padding: 20px 20px 0;
  border: 1px solid #ccc;
  li {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
export default DetailItem;
