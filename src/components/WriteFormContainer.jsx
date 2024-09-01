import styled from 'styled-components';
// import WriteList from './WriteList';
import { useState, useContext } from 'react';
import supabase from '../supabaseClient';
import { useSearchParams } from 'react-router-dom';
import { PostContext } from '../context/store';

const WriteFormContainer = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    image: null,
    address: '',
    region: '',
    rating: '',
    review: ''
  });
  const { posts, setPosts } = useContext(PostContext);
  const [param] = useSearchParams();
  const paramId = parseInt(param.get('id'));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paramId) {
      updatePost(paramId);
      return;
    }

    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const userId = user.id;

      // 이미지 업로드
      let imagePath = null;

      const storeFile = formData.image;

      if (storeFile) {
        const fileName = `public/${userId}_${Date.now()}.png`;
        const { data, error: uploadError } = await supabase.storage.from('store_img').upload(fileName, storeFile, {
          cacheControl: '60',
          upsert: false
        });

        if (uploadError) throw uploadError;

        // 이미지 업로드 된 이미지의 공개 URL 가져오기
        const {
          data: { publicUrl },
          error: urlError
        } = supabase.storage.from('store_img').getPublicUrl(fileName);

        if (urlError) throw urlError;
        imagePath = publicUrl;
      }

      // 게시물 데이터 삽입
      const { data, error } = await supabase.from('store').insert({
        writer: userId,
        store_name: formData.storeName,
        img_path: imagePath,
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

  // Data 수정
  async function updatePost(paramId) {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const userId = user.id;

      let updateData = {
        writer: userId,
        store_name: formData.storeName,
        address: formData.address,
        location: formData.region,
        star: formData.rating,
        comment: formData.review
      };

      // 이미지 수정 로직
      if (formData.image) {
        const fileName = `public/${userId}_${paramId}.png`;
        const { data, error: uploadError } = await supabase.storage.from('store_img').upload(fileName, formData.image, {
          cacheControl: '60',
          upsert: true
        });

        if (uploadError) throw uploadError;

        //업로드된 이미지 공개 URL 가져오기
        const {
          data: { publicUrl },
          error: urlError
        } = supabase.storage.from('store_img').getPublicUrl(fileName);

        if (urlError) throw urlError;
        updateData.img_path = publicUrl;
      }

      const { data, error } = await supabase.from('store').update(updateData).eq('id', paramId).select();

      if (error) throw error;
      const [updatedPost] = data;
      const updatedList = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));

      setPosts(updatedList);

      alert('게시물이 성공적으로 수정되었습니다!');
    } catch (error) {
      console.error('게시물 수정 중 오류 발생', error.message);
      alert('게시물 수정 중 오류 발생!');
    }
  }

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
