import React from 'react';
import styled from 'styled-components';

const WriteSidebar = () => {
  return (
    <SySidebar>
      <h1>맛있는 발견</h1>
      <SyLogoutContainer>
        <h3>Logout</h3>
        <h3>/</h3>
        <h3>My page</h3>
      </SyLogoutContainer>

      <div>
        <input />
        <button>click</button>
      </div>
      <SyTextContainer>
        <h2>Home</h2>
        <h2>내 게시글</h2>
      </SyTextContainer>
    </SySidebar>
  );
};

export default WriteSidebar;

const SySidebar = styled.div`
  /* width: 35%; */
  height: 100vh;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  padding: 10px;
`;

const SyLogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
`;
