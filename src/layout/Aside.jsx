import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Aside = () => {
  const navigate = useNavigate();

  return (
    <SySide>
      <SyBtn onClick={() => navigate('/login')}>Login</SyBtn>
      <SyBtn onClick={() => navigate('/signUp')}>signUp</SyBtn>
      <SyBtn onClick={() => navigate('/mypage')}>내 게시글</SyBtn>
    </SySide>
  );
};

const SySide = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffe31d;
`;

const SyBtn = styled.button`
  background: #fff;
  padding: 10px 0;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 2px solid #000;
  background: #ffe31d;
  &:hover {
    background: #fff;
  }
`;
export default Aside;
