import { useEffect, useState } from 'react';
import MainItem from './MainItem';
import MainListSort from './MainListSort';
import styled from 'styled-components';
import supabase from '../supabaseClient';

const SyListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MainList = () => {
  const [posts, setPosts] = useState([]);
  const [sortData, setSorte] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select('*');
    setSorte(data);
    setPosts(data);
  }

  const handleSearch = () => {
    const searchData = posts.filter((list) => {
      return list.store_name == search;
    });
    setPosts([...searchData]);
  };

  const handleSort = function (location) {
    const newPost = sortData.filter((list) => {
      return list.location == location;
    });
    setPosts(newPost);
  };
  return (
    <div>
      <MainListSort
        data={posts}
        handleSort={handleSort}
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
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
