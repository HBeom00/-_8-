import supabase from '../supabaseClient';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainItem = () => {
  const [posts, setPosts] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('store').select('*');
    setPosts(data);
  }
  console.log(posts);

  return (
    <Link to="detail">
      <li>
        <div className="food_imgbox">
          <img src="" alt="가상 이미지"></img>
        </div>
        <div className="text_box">
          <strong>가게 상호명</strong>
          <p>주소</p>
        </div>
        <p>후기</p>
      </li>
    </Link>
  );
};

export default MainItem;
