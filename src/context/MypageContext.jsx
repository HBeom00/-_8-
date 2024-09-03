import { createContext, useState } from 'react';

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [profileUrl, setProfileUrl] = useState('');
  const [isSelect, setIsSelect] = useState('myinfo');

  return (
    <PostContext.Provider value={{ posts, setPosts, profileUrl, setProfileUrl, isSelect, setIsSelect }}>
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
