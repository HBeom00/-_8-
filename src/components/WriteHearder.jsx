import React from 'react';
import styled from 'styled-components';

const WriteHearder = () => {
  return (
    <Header>
      <h2>Detail page</h2>
      <h3>back</h3>
    </Header>
  );
};

export default WriteHearder;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid black;
  width: 500px;
  height: 60px;
`;
