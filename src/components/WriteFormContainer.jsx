import React from 'react';

const WriteFormContainer = () => {
  return (
    <div>
      <h2>맛집 리뷰 작성</h2>
      <form>
        <div>
          <label htmlFor="storeName">가게 상호명</label>
          <input type="text" id="storeName" name="storeName" />
        </div>
        <div>
          <label htmlFor="address">주소</label>
          <input type="text" id="address" name="address" />
        </div>
        <div>
          <label htmlFor="region">지역</label>
          <input type="text" id="region" name="region" />
        </div>
        <div>
          <label htmlFor="rating">별점</label>
          <select id="rating" name="rating">
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
          <textarea id="review" name="review" rows="5"></textarea>
        </div>
        <button type="submit">리뷰 등록</button>
      </form>
    </div>
  );
};

export default WriteFormContainer;
