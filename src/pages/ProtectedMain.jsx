import MainList from '../components/MainList';
import ContentBox from '../layout/ContentBox';
import MainBox from '../layout/MainBox';
import ContentBox2 from '../layout/ContentBox2';

const Main = () => {
  return (
    <ContentBox2>
      <ContentBox>
        <MainBox>
          <MainList />
        </MainBox>
      </ContentBox>
    </ContentBox2>
  );
};

export default Main;
