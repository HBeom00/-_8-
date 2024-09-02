import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import supabase from '../supabaseClient';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/store';

const WriteFormContainer = () => {
  const [formData, setFormData] = useState({
    store_name: '',
    img_path: null,
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

  // 수정 시 기존 데이터 불러오기
  const fetchPostData = async (id) => {
    try {
      const { data, error } = await supabase.from('store').select('*').eq('id', id).single();

      if (error) throw error;

      const fetchedData = {
        store_name: data.store_name,
        img_path: data.img_path,
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

  // 유효성 검사(1): 빈칸 검사
  const validateForm = () => {
    const requiredFields = ['store_name', 'address', 'location', 'star', 'comment'];
    for (const field of requiredFields) {
      if (formData[field] === '') {
        alert(`${field} 부분을 입력해주세요`);
        return false;
      }
    }
    return true;
  };

  // 유효성 검사(2): 수정된 부분이 있는지 검사
  const isDataChanged = () => {
    const compareFields = ['store_name', 'address', 'location', 'star', 'comment'];
    return compareFields.some((field) => formData[field] !== originalFormData[field]) || formData.image !== undefined;
  };

  // 제출 폼 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (paramId) {
      if (!isDataChanged()) {
        alert('수정된 부분이 없습니다!');
        return;
      }
      updatePost(paramId);
    } else {
      createPost();
    }
  };

  // 게시글 생성 함수
  const createPost = async () => {
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
        store_name: formData.store_name,
        img_path: imagePath,
        address: formData.address,
        location: formData.location,
        star: formData.star,
        comment: formData.comment
      });

      if (error) throw error;

      alert('게시물이 성공적으로 작성되었습니다!');
      navigate('/');
    } catch (error) {
      console.error('게시물 작성 중 오류 발생', error.message);
      alert('게시물 작성 중 오류 발생...');
    }
  };

  // 게시글 업데이트 함수
  const updatePost = async (paramId) => {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      const userId = user.id;

      let updateData = {
        writer: userId,
        store_name: formData.store_name,
        address: formData.address,
        location: formData.location,
        star: formData.star,
        comment: formData.comment
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
  };

  return (
    <SyFormContainer>
      <h2>{paramId ? '맛집 게시글 수정' : '맛집 게시글 작성'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="store_name">가게 상호명</label>
          <input id="store_name" type="text" value={formData.store_name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="image">이미지 업로드</label>
          <input id="image" type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        <div>
          {paramId
            ? formData.image
              ? '새 이미지가 선택되었습니다. 수정 시 이 이미지로 대체됩니다!'
              : '새로 이미지를 올리지 않으면 기존 이미지가 유지됩니다!'
            : null}
        </div>

        {/* 수정: 현재 이미지 표시 */}
        {formData.img_path && !formData.image && (
          <div>
            <img src={formData.img_path} alt="현재 이미지" style={{ maxWidth: '200px' }} />
          </div>
        )}

        <div>
          <label htmlFor="address">주소</label>
          <input id="address" type="text" value={formData.address} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="location">지역</label>
          <select id="location" value={formData.location} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="지역1">지역1</option>
            <option value="지역2">지역2</option>
            <option value="지역3">지역3</option>
            <option value="지역4">지역4</option>
            <option value="지역5">지역5</option>
          </select>
        </div>

        <div>
          <label htmlFor="star">별점</label>
          <select id="star" value={formData.star} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment">후기</label>
          <textarea id="comment" rows="5" value={formData.comment} onChange={handleChange}></textarea>
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
