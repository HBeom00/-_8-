import WriteFormContainer from '../components/WriteFormContainer';
import ContentBox from '../layout/ContentBox';
import ContentBox2 from '../layout/ContentBox2';
import MainBox from '../layout/MainBox';

const Writing = () => {
  return (
    <ContentBox2>
      <ContentBox>
        <MainBox>
          <WriteFormContainer />
        </MainBox>
      </ContentBox>
    </ContentBox2>
  );
};

export default Writing;
