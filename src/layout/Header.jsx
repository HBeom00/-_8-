import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const navigate = useNavigate();

  return (
    <SyHeader>
      <SyBtnHeader
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </SyBtnHeader>
      <strong>연매출 8조</strong>
      <SyBtnHeader type="button" onClick={() => history.go(-1)}>
        Back
      </SyBtnHeader>
    </SyHeader>
  );
};

const SyHeader = styled.header`
  height: 50px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SyBtnHeader = styled.button`
  background: #fff;
  border: none;
  padding: 10px;
`;
export default Header;
