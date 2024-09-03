import MainList from '../components/MainList';
import ContentBox from '../layout/ContentBox';
import ContentBox2 from '../layout/ContentBox2';
import MainBox from '../layout/MainBox';

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
