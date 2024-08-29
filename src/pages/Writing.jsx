import styled from 'styled-components';
import WriteFormContainer from '../components/WriteFormContainer';
import WriteSidebar from '../components/WriteSidebar';
import '../assets/Writing.css';
import WriteHearder from '../components/WriteHearder';

const Writing = () => {
  return (
    <WritingPageContainer>
      <WriteSidebar />
      <SecondContainer>
        <WriteHearder />
        <WriteFormContainer />
      </SecondContainer>
    </WritingPageContainer>
  );
};

export default Writing;

const WritingPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
