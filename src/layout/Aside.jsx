import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Aside = () => {
  const navigate = useNavigate();

  return (
    <SySide>
      <SyBtn onClick={() => navigate('/login')}>Login</SyBtn>
      <SyBtn onClick={() => navigate('/signUp')}>Join</SyBtn>
      <SyBtn onClick={() => navigate('/')}>Home</SyBtn>
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
  border-right: 1px solid #ccc;
  margin: 20px 0;
`;

const SyBtn = styled.button`
  background: #fff;
  padding: 10px 0;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #666;
  &:hover {
    background: #ffe31d;
  }
`;
export default Aside;
