import { useEffect, useState } from 'react';
import MainItem from './MainItem';
import supabase from '../supabaseClient';
import MainListSort from './MainListSort';
import styled from 'styled-components';

const SyListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MainList = ({
  posts,
  handleSort = { handleSort },
  handleSearch = { handleSearch },
  setSearch = { setSearch },
  search = { search }
}) => {
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
