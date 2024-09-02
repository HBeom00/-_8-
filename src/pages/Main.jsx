import MainList from '../components/MainList';
import ContentBox from '../layout/ContentBox';
import MainBox from '../layout/MainBox';

const Main = () => {
  return (
    <ContentBox>
      <MainBox>
        <MainList />
      </MainBox>
    </ContentBox>
  );
};

export default Main;
