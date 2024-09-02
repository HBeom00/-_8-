import { createContext, useState } from 'react';

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [profileUrl, setProfileUrl] = useState('');

  return <PostContext.Provider value={{ posts, setPosts, profileUrl, setProfileUrl }}>{children}</PostContext.Provider>;
};
export default PostProvider;
