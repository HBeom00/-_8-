import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import supabase from '../supabaseClient';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/store';

const WriteFormContainer = () => {
  const [formData, setFormData] = useState({
    store_Name: '',
    image: null,
    address: '',
    location: '',
    star: '',
    comment: ''
  });
  const navigate = useNavigate();
  const [originalFormData, setOriginalFormData] = useState({});
  const { posts, setPosts } = useContext(PostContext);
  const [param] = useSearchParams();
  const paramId = parseInt(param.get('id'));

  useEffect(() => {
    if (paramId) {
      fetchPostData(paramId);
    } else {
      setOriginalFormData({ ...formData });
    }
  }, [paramId]);

  const fetchPostData = async (id) => {
    try {
      const { data, error } = await supabase.from('store').select('*').eq('id', id).single();

      if (error) throw error;

      const fetchedData = {
        store_Name: data.store_name,
        image: null,
        address: data.address,
        location: data.location,
        star: data.star,
        comment: data.comment
      };
      setFormData(fetchedData);
      setOriginalFormData(fetchedData);
    } catch (error) {
      alert('게시글 불러오기 실패..');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const validateForm = () => {
    for (const key in formData) {
      if (formData[key] === '' || formData[key] === null) {
        alert(`모든 입력 부분을 채워주세요!`);
        return false;
      }
    }
    return true;
  };

  const isDataChanged = () => {
    return JSON.stringify(formData) !== JSON.stringify(originalFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (paramId && !isDataChanged()) {
      alert('수정된 부분이 없습니다!');
      return;
    }

    if (paramId) {
      updatePost(paramId);
      return;
    }

    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const userId = user.id;

      let imagePath = null;

      const storeFile = formData.image;

      if (storeFile) {
        const fileName = `public/${userId}_${Date.now()}.png`;
        const { data, error: uploadError } = await supabase.storage.from('store_img').upload(fileName, storeFile, {
          cacheControl: '60',
          upsert: false
        });

        if (uploadError) throw uploadError;

        const {
          data: { publicUrl },
          error: urlError
        } = supabase.storage.from('store_img').getPublicUrl(fileName);

        if (urlError) throw urlError;
        imagePath = publicUrl;
      }

      const { data, error } = await supabase.from('store').insert({
        writer: userId,
        store_name: formData.storeName,
        img_path: imagePath,
        address: formData.address,
        location: formData.region,
        star: formData.rating,
        comment: formData.review
      });

      if (error) throw error;

      alert('게시물이 성공적으로 작성되었습니다!');
      navigate('/');
    } catch (error) {
      console.error('게시물 작성 중 오류 발생', error.message);
      alert('게시물 작성 중 오류 발생...');
    }
  };

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

      if (formData.image) {
        const fileName = `public/${userId}_${paramId}.png`;
        const { data, error: uploadError } = await supabase.storage.from('store_img').upload(fileName, formData.image, {
          cacheControl: '60',
          upsert: true
        });

        if (uploadError) throw uploadError;

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
      navigate('/');
    } catch (error) {
      console.error('게시물 수정 중 오류 발생', error.message);
      alert('게시물 수정 중 오류 발생...');
    }
  }

  return (
    <SyFormContainer>
      <h2>{paramId ? '맛집 게시글 수정' : '맛집 게시글 작성'}</h2>
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
          <button type="submit">{paramId ? '게시글 수정' : '게시글 등록'}</button>
        </div>
      </form>
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
