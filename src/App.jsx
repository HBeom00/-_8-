import Router from './router/Router';
import './reset.css';
import GlobalStyles from './GlobalStyles';
import LoginProvider from './context/LoginContext';
import PostProvider from './context/MypageContext';

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
