import MainList from '../components/MainList';
import ContentBox from '../layout/ContentBox';
import Aside from '../layout/Aside';
import Header from '../layout/Header';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const SyContent = styled.div`
  display: flex;
`;
const SyMainContent = styled.div`
  flex: 1;
`;

const Main = () => {
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
    console.log(searchData);
  };

  const handleSort = function (location) {
    const newPost = sortData.filter((list) => {
      return list.location == location;
    });
    console.log(newPost);
    setPosts(newPost);
  };
  return (
    <ContentBox>
      <SyContent>
        <Aside></Aside>
        <SyMainContent>
          <Header></Header>
          <MainList
            posts={posts}
            handleSort={handleSort}
            handleSearch={handleSearch}
            setSearch={setSearch}
            search={search}
          />
        </SyMainContent>
      </SyContent>
    </ContentBox>
  );
};

export default Main;
