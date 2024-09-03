import { useEffect, useState } from 'react';
import MainItem from './MainItem';
import MainListSort from './MainListSort';
import styled from 'styled-components';
import supabase from '../supabaseClient';

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
    const searchData = sortData.filter((list) => {
      return list.store_name.includes(search);
      // return list.store_name == search;
    });
    console.log(searchData);
    if (search == '') {
      alert('검색어를 입력 해주세요!');
    } else if (searchData.length == 0) {
      alert('일치하는 검색어가 없습니다');
    } else {
      setPosts([...searchData]);
    }
    // setPosts([...searchData]);
  };

  const handleSort = function (location) {
    const newPost = sortData.filter((list) => {
      return list.location == location;
    });
    setPosts(newPost);
  };
  return (
    <SyscrollBox>
      <MainListSort
        data={posts}
        handleSort={handleSort}
        handleSearch={handleSearch}
        setSearch={setSearch}
        search={search}
      />
      <SyListBox>
        {posts.map((list) => {
          return <MainItem key={list.id} data={list} />;
        })}
      </SyListBox>
    </SyscrollBox>
  );
};

const SyListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 50px;
`;

const SyscrollBox = styled.div`
  padding-right: 5px;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

export default MainList;
