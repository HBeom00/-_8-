import { useNavigate } from 'react-router-dom';

const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signUp')}>Join</button>
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
