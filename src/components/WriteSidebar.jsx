import React from 'react';
import styled from 'styled-components';

const WriteSidebar = () => {
  return (
    <Sidebar>
      <h1>맛있는 발견</h1>
      <LogoutContainer>
        <h3>Logout</h3>
        <h3>/</h3>
        <h3>My page</h3>
      </LogoutContainer>

      <div>
        <input />
        <button>click</button>
      </div>
      <TextContainer>
        <h2>Home</h2>
        <h2>내 게시글</h2>
      </TextContainer>
    </Sidebar>
  );
};

export default WriteSidebar;

const Sidebar = styled.div`
  /* width: 35%; */
  height: 100vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  padding: 10px;
`;

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;
