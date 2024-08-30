import Router from './router/Router';
import './reset.css';
import GlobalStyles from './GlobalStyles';
import PostProvider from './context/store';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <PostProvider>
        <Router />
      </PostProvider>
    </>
  );
};

export default App;
