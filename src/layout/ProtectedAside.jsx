import { useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';

const Aside = () => {
  const navigate = useNavigate();
  const {logOut} = useLoginContext();
  return (
    <aside>
      <button onClick={() => logOut()}>LogOut</button>
      <button onClick={() => navigate('/mypage')}>My Page</button>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/mypage')}>내 게시글</button>
      <form action="url" method="get">
        <input type="search" placeholder="검색어를 입력해 주세요" />
        <button type="submit">검색</button>
      </form>
    </aside>
  );
};

export default Aside;
