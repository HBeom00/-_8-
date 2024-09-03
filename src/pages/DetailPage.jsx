import DetailItem from '../components/DetailItem';
import ContentBox from '../layout/ContentBox';
import ContentBox2 from '../layout/ContentBox2';
import MainBox from '../layout/MainBox';

const DetailPage = () => {
  return (
    <ContentBox2>
      <ContentBox>
        <MainBox>
          <DetailItem />
        </MainBox>
      </ContentBox>
    </ContentBox2>
  );
};

export default DetailPage;
