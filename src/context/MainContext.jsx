import { createContext, useEffect, useState } from 'react';
import supabase from '../supabaseClient';

export const MainContext = createContext();

const MainProvider = ({ children }) => {
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

  const contextValue = {
    posts,
    setPosts,
    sortData,
    search,
    setSorte,
    setSearch
  };
  return <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>;
};

export default MainProvider;
