import Router from './router/Router';
import './reset.css';
import GlobalStyles from './GlobalStyles';
import PostProvider from './context/store';
import LoginProvider from './context/LoginContext';

const App = () => {
  return (
    <>
      <LoginProvider>
        <GlobalStyles />
        <PostProvider>
          <Router />
        </PostProvider>
      </LoginProvider>
    </>
  );
};

export default App;
