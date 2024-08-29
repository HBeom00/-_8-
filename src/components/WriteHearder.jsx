import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WriteHearder = () => {
  const navigate = useNavigate();

  return (
    <SyHeader>
      <h2>Detail page</h2>
      <h3 onClick={() => navigate(-1)}>back</h3>
    </SyHeader>
  );
};

export default WriteHearder;

const SyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
`;