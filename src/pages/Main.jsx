import MainList from '../components/MainList';
import MainListSort from '../components/MainListSort';
import ContentBox from '../layout/ContentBox';
import Aside from '../layout/Aside';
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
        <Aside></Aside>
        <SyMainContent>
          <Header></Header>
          <MainListSort />
          <MainList />
        </SyMainContent>
      </SyContent>
    </ContentBox>
  );
};

export default Main;
