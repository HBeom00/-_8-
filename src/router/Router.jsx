import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import DetailPage from '../pages/DetailPage';
import Mypage from '../pages/Mypage';
import Writing from '../pages/Writing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
