import styled from 'styled-components';
import WriteList from './WriteList';
import { useEffect, useState } from 'react';

const WriteFormContainer = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    storeName: '',
    image: null,
    address: '',
    region: '',
    rating: '',
    review: ''
  });

  // const fetchPosts = () => {
  //   Supabase에서 데이터를 가져오는 로직 구현
  //   지금은 임시로 로컬 상태 반환
  //   return posts;
  // };

  const createPost = (newPost) => {
    // Supabase에 데이터를 생성하는 로직
    // 지금은 임시로 로컬 상태 업데이트
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  // 처음 렌더링 시 한번만 실행
  // useEffect(() => {
  //   const initialPosts = fetchPosts();
  //   setPosts(initialPosts);
  // }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    // console.log(formData);
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...formData
    };

    createPost(newPost);

    // 데이터 생성 후 최신 데이터 다시 조회
    // const updatedPosts = fetchPosts();
    // setPosts(updatedPosts);

    setFormData({
      storeName: '',
      image: null,
      address: '',
      region: '',
      rating: '',
      review: ''
    });

    // console.log(posts);
  };

  return (
    <SyFormContainer>
      <h2>맛집 게시글 작성</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="storeName">가게 상호명</label>
          <input id="storeName" type="text" value={formData.storeName} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="image">이미지 업로드</label>
          <input id="image" type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          <label htmlFor="address">주소</label>
          <input id="address" type="text" value={formData.address} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="region">지역</label>
          <select id="region" value={formData.region} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="부산">부산</option>
            <option value="지역4">지역4</option>
            <option value="지역5">지역5</option>
          </select>
        </div>

        <div>
          <label htmlFor="rating">별점</label>
          <select id="rating" value={formData.rating} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
        </div>
        <div>
          <label htmlFor="review">후기</label>
          <textarea id="review" rows="5" value={formData.review} onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit">게시글 등록</button>
        </div>
      </form>

      <div>
        {posts.map((post) => (
          <WriteList key={post.id} post={post} />
        ))}
      </div>
    </SyFormContainer>
  );
};

export default WriteFormContainer;

const SyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  gap: 20px;
`;
