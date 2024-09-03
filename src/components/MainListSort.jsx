import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import searchImg from '../assets/icon_search.svg';

const SyBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MainListSort = ({ search, setSearch, handleSort, handleSearch }) => {
  const navigate = useNavigate();

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
          onKeyDown={(e) => {
            activeEnter(e);
          }}
          placeholder="검색어를 입력해주세요"
        />
        <SyBtnSearch onClick={handleSearch}>
          <span className="hidden">검색하기</span>
        </SyBtnSearch>
      </SyInpuBox>
      <SyBtnAdd onClick={() => navigate('/Writing')}>
        <span className="hidden">추가하기</span>
      </SyBtnAdd>
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
  width: 30px;
  height: 100%;
  border: none;
  background: url(${searchImg}) no-repeat center;
  background-size: 20px 20px;
  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
`;

const SyBtnAdd = styled.button`
  position: absolute;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #ffe31d;
  border: none;
  border-radius: 50%;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 1px;
    background-color: #222;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 10px;
    background-color: #222;
  }
  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
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
