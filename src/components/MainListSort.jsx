import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SyBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainListSort = () => {
  const navigate = useNavigate();

  return (
    <SyBtnBox>
      <div>
        <button type="button" onClick={() => console.log}>
          강남
        </button>
        <button type="button" onClick={() => console.log}>
          성수
        </button>
        <button type="button" onClick={() => console.log}>
          망원
        </button>
        <button type="button" onClick={() => console.log}>
          잠실
        </button>
        <button type="button" onClick={() => console.log}>
          압구정
        </button>
      </div>
      <div>
        <button onClick={() => navigate('/Writing')}>추가하기</button>
      </div>
    </SyBtnBox>
  );
};

export default MainListSort;
