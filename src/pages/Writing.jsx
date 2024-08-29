import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';
import '../assets/Writing.css';
import WriteHearder from '../components/WriteHearder';

const Writing = () => {
  return (
    <SyPage>
      <WriteSidebar />
      <SyContainer>
        <WriteHearder />
        <WriteFormContainer />
      </SyContainer>
    </SyPage>
  );
};

export default Writing;

const SyPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const SyContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 600px;
`;
