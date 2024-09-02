import styled from 'styled-components';
import Aside from './Aside';
import Header from './Header';
import ProtectedAside from './ProtectedAside';
import { useLoginContext } from '../context/LoginContext';

const MainBox = (props) => {
  const { isSignIn, checkSignIn } = useLoginContext();
  checkSignIn();

  console.log(isSignIn);
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
  display: flex;
`;
const SyMainContent = styled.div`
  flex: 1;
`;

export default MainBox;
