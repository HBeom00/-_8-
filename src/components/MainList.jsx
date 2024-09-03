import { useEffect, useState } from 'react';
import MainItem from './MainItem';
import MainListSort from './MainListSort';
import styled from 'styled-components';
import supabase from '../supabaseClient';

const MainList = () => {
  const [posts, setPosts] = useState([]);
  const [sortData, setSorte] = useState([]);
  const [search, setSearch] = useState('');
  const [initialData, setinit] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select('*');
    setSorte(data);
    setPosts(data);
    setinit(data);
  }

  const handleSearch = () => {
    const searchData = sortData.filter((list) => {
      return list.store_name && list.address.includes(search);
    });
    if (search == '') {
      alert('검색어를 입력 해주세요!');
    } else {
      setPosts([...searchData]);
    }
  };

  const handleSort = function (location) {
    const newPost = sortData.filter((list) => {
      return list.location == location;
    });
    setPosts(newPost);
  };
  console.log(sortData);
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
        {posts.length == 0 ? (
          <SyNoDataBox>
            <p>결과가 없습니다</p>
            <button
              onClick={() => {
                setPosts(initialData);
              }}
            >
              돌아가기
            </button>
          </SyNoDataBox>
        ) : (
          posts.map((list) => {
            return <MainItem key={list.id} data={list} />;
          })
        )}
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
  width: 1000px;
  padding-right: 5px;
  height: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const SyNoDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 200px 0;
  p {
    margin-bottom: 80px;
    font-size: 36px;
    font-weight: 600;
  }
  button {
    width: 150px;
    background: #ffe31d;
    padding: 10px 0;
    border-radius: 8px;
    border: 1px solid #666;
  }
`;

export default MainList;
