import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';
import '../assets/Writing.css';
import WriteHearder from '../components/WriteHearder';

const Writing = () => {
  return (
    <WritingPage>
      <WriteSidebar />
      <div>
        <WriteHearder />
        <WriteFormContainer />
      </div>
    </WritingPage>
  );
};

export default Writing;

const WritingPage = styled.div`
  display: flex;
  flex-direction: row;
`;
