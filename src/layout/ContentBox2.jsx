import styled from 'styled-components';

const SyContentBox2 = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f4f1;
  align-items: center;
  position: relative;
`;

const ContentBox2 = (props) => {
  return <SyContentBox2>{props.children}</SyContentBox2>;
};
export default ContentBox2;
