import styled from 'styled-components';

const WriteFormContainer = () => {
  return (
    <SyFormContainer>
      <h2>맛집 게시글 작성</h2>
      <form>
        <div>
          <label htmlFor="storeName">가게 상호명</label>
          <input id="storeName" type="text" />
        </div>

        <div>
          <label htmlFor="image">이미지 업로드</label>
          <input id="image" type="file" accept="image/*" multiple />
        </div>

        <div>
          <label htmlFor="address">주소</label>
          <input id="address" type="text" />
        </div>

        <div>
          <label htmlFor="region">지역</label>
          <select id="region">
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
          <select id="rating">
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
          <textarea id="review" rows="5"></textarea>
        </div>
        <div>
          <button type="submit">게시글 등록</button>
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
