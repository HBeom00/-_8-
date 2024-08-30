import styled from 'styled-components';
// import WriteList from './WriteList';
import { useState } from 'react';
import supabase from '../supabaseClient';

const WriteFormContainer = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    image: null,
    address: '',
    region: '',
    rating: '',
    review: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.from('store').insert({
        writer: 'coolcat1',
        store_name: formData.storeName,
        // image: formData.image,
        address: formData.address,
        location: formData.region,
        star: formData.rating,
        comment: formData.review
      });

      console.log('응답값', data);

      if (error) throw error;
      console.log('게시물이 성공적으로 생성되었습니다', data);

      setFormData({
        storeName: '',
        image: null,
        address: '',
        region: '',
        rating: '',
        review: ''
      });

      alert('게시물이 성공적으로 작성되었습니다!');
    } catch (error) {
      console.error('게시물 작성 중 오류 발생', error.message);
      alert('게시물 작성 중 오류 발생 다시 시도 바란다.');
    }
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
            <option value="지역1">지역1</option>
            <option value="지역2">지역2</option>
            <option value="지역3">지역3</option>
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

      {/* <div>
        {posts.map((post) => (
          <WriteList key={post.id} post={post} />
        ))}
      </div> */}
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
