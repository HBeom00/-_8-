import { useEffect, useState } from 'react';
import MainItem from './MainItem';
import supabase from '../supabaseClient';
import MainListSort from './MainListSort';
import styled from 'styled-components';

const SyListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MainList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select('*');
    setPosts(data);
  }

  console.log(posts);
  return (
    <div>
      <MainListSort data={posts} />
      <button
        onClick={function () {
          const newPost = posts.filter((list) => {
            return list.location == '지역1';
          });
          console.log(newPost);
          setPosts(newPost);
        }}
      >
        솔트 정렬
      </button>
      맛집 리스트
      <SyListBox>
        {posts.map((list) => {
          return <MainItem key={list.id} data={list} />;
        })}
      </SyListBox>
    </div>
  );
};

export default MainList;
