import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';
import WriteHeader from '../components/WriteHeader';

const Writing = () => {
  return (
    <SyPage>
      <WriteSidebar />
      <SyContainer>
        <WriteHeader />
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
`;

const SyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
