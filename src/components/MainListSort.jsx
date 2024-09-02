import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SyBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainListSort = ({ search, setSearch, handleSort, handleSearch }) => {
  const navigate = useNavigate();

  const sortData = [
    {
      id: 1,
      location: '지역1'
    },
    {
      id: 2,
      location: '지역2'
    },
    {
      id: 3,
      location: '지역3'
    },
    {
      id: 4,
      location: '지역4'
    },
    {
      id: 5,
      location: '지역5'
    }
  ];

  return (
    <SyBtnBox>
      <div>
        {sortData.map((list) => {
          return (
            <button
              key={list.id}
              onClick={() => {
                handleSort(list.location);
              }}
            >
              {list.location}
            </button>
          );
        })}
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="검색어를 입력해주세요"
        />
        <button onClick={handleSearch}>검색하기</button>
      </div>
      <div>
        <button onClick={() => navigate('/Writing')}>추가하기</button>
      </div>
    </SyBtnBox>
  );
};

export default MainListSort;
