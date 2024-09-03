import styled from 'styled-components';
import Aside from './Aside';
import Header from './Header';
import ProtectedAside from './ProtectedAside';
import { useLoginContext } from '../context/LoginContext';

const MainBox = (props) => {
  const { isSignIn, checkSignIn } = useLoginContext();
  checkSignIn();

  return (
    <SyContent>
      {isSignIn ? <ProtectedAside></ProtectedAside> : <Aside></Aside>}
      <SyMainContent>
        <Header></Header>
        {props.children}
      </SyMainContent>
    </SyContent>
  );
};

const SyContent = styled.div`
  position: relative;
  display: flex;
`;
const SyMainContent = styled.div`
  padding-left: 25px;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: calc(100% - 250px);
  overflow: hidden;
`;

export default MainBox;
