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
      location: '강남'
    },
    {
      id: 2,
      location: '성수'
    },
    {
      id: 3,
      location: '이태원'
    },
    {
      id: 4,
      location: '압구정'
    },
    {
      id: 5,
      location: '홍대'
    }
  ];

  return (
    <SyBtnBox>
      <div>
        {sortData.map((list) => {
          return (
            <SyBtnSort
              key={list.id}
              onClick={() => {
                handleSort(list.location);
              }}
            >
              {list.location}
            </SyBtnSort>
          );
        })}
      </div>
      <SyInpuBox>
        <Syinput
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="검색어를 입력해주세요"
        />
        <SyBtnSearch onClick={handleSearch}>검색하기</SyBtnSearch>
      </SyInpuBox>
      <SyBtnAdd onClick={() => navigate('/Writing')}>추가하기</SyBtnAdd>
    </SyBtnBox>
  );
};

const SyInpuBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Syinput = styled.input`
  width: 180px;
  height: 30px;
  box-sizing: border-box;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SyBtnSearch = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  border: none;
  background: none;
`;

const SyBtnAdd = styled.button`
  position: fixed;
  bottom: 220px;
  right: 100px;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  z-index: 10;
`;

const SyBtnSort = styled.button`
  position: relative;
  padding: 5px 20px;
  background: #fff;
  border: none;
  &:first-child {
    &::before {
      display: none;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 100%;
    background: #ccc;
  }
`;
export default MainListSort;
