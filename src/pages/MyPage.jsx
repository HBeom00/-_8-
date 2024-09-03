import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import MyInfo from '../components/MyInfo';
import MyPost from '../components/MyPost';
import { PostContext } from '../context/MypageContext';

const Mypage = () => {
  const { isSelect, setIsSelect } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <SyDiv>
      <SyWrapper>
        <SyTitle>My Page</SyTitle>
        <SyContainer>
          <SyButtonDiv>
            <SyButton className="home" onClick={() => navigate('/')}>
              Home
            </SyButton>
            <SyButton className="info" onClick={() => setIsSelect('myinfo')}>
              내 정보
            </SyButton>
            <SyButton className="post" onClick={() => setIsSelect('mypost')}>
              내 게시글
            </SyButton>
          </SyButtonDiv>
          <SyPost>{isSelect === 'myinfo' ? <MyInfo /> : <MyPost />}</SyPost>
        </SyContainer>
        <SyButton className="back-button" onClick={() => navigate(-1)}>
          back
        </SyButton>
      </SyWrapper>
    </SyDiv>
  );
};

export default Mypage;

const SyDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f4f1;
`;

const SyWrapper = styled.div`
  width: 1280px;
  height: 720px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
`;

const SyTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12%;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
`;

const SyContainer = styled.div`
  display: flex;
  height: calc(88% - 16px);
`;

const SyButtonDiv = styled.div`
  width: 20%;
  position: relative;
  border-right: 2px solid black;
  height: 90%;
`;

const SyPost = styled.div`
  width: 80%;
`;

const SyButton = styled.div`
  font-size: 24px;
  padding: 12px;
  font-weight: 900;
  cursor: pointer;
  &.home {
    width: 50%;
    text-align: right;
    position: absolute;
    top: 20%;
    right: 10%;
  }
  &.info {
    width: 50%;
    text-align: right;
    position: absolute;
    top: 35%;
    right: 10%;
  }
  &.post {
    width: 50%;
    text-align: right;
    position: absolute;
    top: 50%;
    right: 10%;
  }
  &.back-button {
    position: absolute;
    top: 0%;
    right: 0%;
    font-size: 20px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
