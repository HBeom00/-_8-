import React from 'react';
import styled from 'styled-components';

const WriteHearder = () => {
  return (
    <SyHeader>
      <h2>Detail page</h2>
      <h3>back</h3>
    </SyHeader>
  );
};

export default WriteHearder;

const SyHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 500px;
  padding: 10px;
  border: 1px solid black;
  width: 600px;
  height: 60px;
`;
