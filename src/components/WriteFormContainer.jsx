import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import supabase from '../supabaseClient';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../context/MypageContext';

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

      // 이미지 유효성 검사
      if (!formData.image) {
        alert('이미지를 반드시 업로드해야 합니다.');
        return;
      }

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
      navigate('/mypage');
    } catch (error) {
      console.error('게시물 수정 중 오류 발생', error.message);
      alert('게시물 수정 중 오류 발생...');
    }
  };

  return (
    <SyFormContainer>
      <h2>{paramId ? '맛집 게시글 수정 🧃' : '맛집 게시글 작성 🍳'}</h2>
      <SyForm onSubmit={handleSubmit}>
        <SyLeftSection>
          <SyInput>
            <label htmlFor="store_name">가게 상호명</label>
            <input id="store_name" type="text" value={formData.store_name} onChange={handleChange} />
          </SyInput>

          <SyInput>
            <label htmlFor="image">이미지 업로드</label>
            <input id="image" type="file" accept="image/*" onChange={handleFileChange} />
            {paramId ? (
              <SyImageMessage>
                {formData.image
                  ? '새 이미지가 선택되었습니다. 수정 시 이 이미지로 대체됩니다!'
                  : '새로 이미지를 올리지 않으면 기존 이미지가 유지됩니다!'}
              </SyImageMessage>
            ) : null}
            {formData.img_path && !formData.image && (
              <SyImagePreview>
                <img src={formData.img_path} alt="현재 이미지" />
              </SyImagePreview>
            )}
          </SyInput>

          <SyInput>
            <label htmlFor="address">주소</label>
            <input id="address" type="text" value={formData.address} onChange={handleChange} />
          </SyInput>

          <SyInput>
            <label htmlFor="location">지역</label>
            <select id="location" value={formData.location} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="강남">강남</option>
              <option value="성수">성수</option>
              <option value="압구정">압구정</option>
              <option value="이태원">이태원</option>
              <option value="홍대">홍대</option>
            </select>
          </SyInput>

          <SyInput>
            <label htmlFor="star">별점</label>
            <select id="star" value={formData.star} onChange={handleChange}>
              <option value="">선택하세요</option>
              <option value="1">1점</option>
              <option value="2">2점</option>
              <option value="3">3점</option>
              <option value="4">4점</option>
              <option value="5">5점</option>
            </select>
          </SyInput>
        </SyLeftSection>

        <SyRightSection>
          <SyInput>
            <label htmlFor="comment">후기</label>
            <textarea id="comment" rows="25" value={formData.comment} onChange={handleChange}></textarea>
          </SyInput>
          <SyButtonContainer>
            <button type="submit">{paramId ? '게시글 수정' : '게시글 등록'}</button>
          </SyButtonContainer>
        </SyRightSection>
      </SyForm>
    </SyFormContainer>
  );
};

export default WriteFormContainer;

const SyFormContainer = styled.div`
  background-color: #fffef0;
  border: 2px solid #000000;
  width: 1030px;
  height: 670px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    color: #000000;
    margin: 30px 0 60px 0;
    font-weight: bold;
    font-size: 25px;
  }
`;

const SyForm = styled.form`
  display: flex;
  gap: 50px;
`;

const SyLeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SyRightSection = styled.div`
  flex: 1;
`;

const SyInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #000000;
  }

  input,
  select,
  textarea {
    padding: 8px;
    border: 2px solid #000000;
    border-radius: 6px;
    background-color: #fffef0;
    &:focus {
      outline: none;
      border-color: #ffd700;
      box-shadow: 0 0 0 2px rgba(225, 215, 0, 0.2);
    }
  }
`;

const SyButtonContainer = styled.div`
  text-align: end;
  margin-top: 65px;

  button {
    padding: 10px 20px;
    background-color: #ffd700;
    color: #000000;
    border: 3px solid #000000;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      background-color: #ffef00;
      transform: scale(1.05);
      box-shadow: 0 5px qdpx rgba(0, 0, 0, 0.2);
    }
  }
`;

const SyImageMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #fff9c4;
  border: 1px solid #ffd700;
  border-radius: 4px;
  color: #000000;
  font-size: 14px;
`;

const SyImagePreview = styled.div`
  margin-top: 5px;
  img {
    max-width: 50px;
    max-width: 50px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid #000000;
  }
`;
