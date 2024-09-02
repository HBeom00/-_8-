import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WriteSidebar = () => {
  const navigate = useNavigate();

  return (
    <SySidebar>
      <h1>맛있는 발견</h1>
      <SyLogoutContainer>
        <h3 onClick={() => navigate('/mypage')}>My page</h3>
      </SyLogoutContainer>

      <SySearchContainer>
        <input />
        <button>click</button>
      </SySearchContainer>
      <SyNavContainer>
        <h2 onClick={() => navigate('/')}>Home</h2>
      </SyNavContainer>
    </SySidebar>
  );
};

export default WriteSidebar;

const SySidebar = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  padding: 10px;
`;

const SyLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SySearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SyNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
