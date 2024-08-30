import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import MyInfo from '../components/MyInfo';
import MyPost from '../components/MyPost';

const Mypage = () => {
  const [isSelect, setIsSelect] = useState('myinfo');
  const navigate = useNavigate();

  return (
    <SyWrapper>
      <SyTitle>My Page</SyTitle>
      <SyContainer>
        <SyButtonDiv>
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
  );
};

export default Mypage;

const SyWrapper = styled.div`
  width: 65%;
  height: 80%;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #dfdfdf;
`;

const SyTitle = styled.p`
  height: 10%;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
`;

const SyContainer = styled.div`
  display: flex;
  height: 90%;
`;

const SyButtonDiv = styled.div`
  width: 25%;
  position: relative;
  border-right: 2px solid black;
  height: 90%;
`;

const SyPost = styled.div`
  width: 75%;
`;

const SyButton = styled.div`
  padding: 12px;
  font-weight: 900;
  cursor: pointer;
  &.info {
    width: 30%;
    text-align: center;
    position: absolute;
    top: 17%;
    right: 10%;
  }
  &.post {
    width: 30%;
    text-align: center;
    position: absolute;
    top: 30%;
    right: 10%;
  }
  &.back-button {
    position: absolute;
    top: 4%;
    right: 4%;
    font-size: 20px;
  }
  &:hover {
    text-decoration: underline;
  }
`;
