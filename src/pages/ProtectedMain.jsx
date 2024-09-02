import MainList from '../components/MainList';
import ContentBox from '../layout/ContentBox';
import ProtectedAside from '../layout/ProtectedAside';
import Header from '../layout/Header';
import styled from 'styled-components';

const SyContent = styled.div`
  display: flex;
`;
const SyMainContent = styled.div`
  flex: 1;
`;

const Main = () => {
  return (
    <ContentBox>
      <SyContent>
        <ProtectedAside></ProtectedAside>
        <SyMainContent>
          <Header></Header>
          <MainList />
        </SyMainContent>
      </SyContent>
    </ContentBox>
  );
};

export default Main;
