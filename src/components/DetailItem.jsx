import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import supabase from '../supabaseClient';
import styled from 'styled-components';

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
    <SyDetailBox>
      <SyImgBox className="img_box">
        <img src={posts?.img_path} alt="음식 이미지" />
      </SyImgBox>
      <SyInfoList>
        <li>가게 상호명: {posts?.store_name}</li>
        <li>주소: {posts?.address}</li>
        <li>지역: {posts?.location}</li>
        <li>별점: {posts?.star}점</li>
        <li>후기: {posts?.comment}</li>
      </SyInfoList>
    </SyDetailBox>
  );
};

const SyDetailBox = styled.div`
  padding-right: 20px;
  width: 1000px;
  box-sizing: border-box;
`;

const SyImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 10px;
  overflow: hidden;
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
  padding: 20px;
  li {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
export default DetailItem;
