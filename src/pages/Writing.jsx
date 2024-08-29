import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';

const Writing = () => {
  return (
    <WritingPage>
      <WriteSidebar />
      <WriteFormContainer />
    </WritingPage>
  );
};

export default Writing;

const WritingPage = styled.div`
  display: flex;
  flex-direction: row;
`;
