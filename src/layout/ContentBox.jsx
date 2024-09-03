import styled from 'styled-components';

export const SyContentBox = styled.div`
  max-width: 1280px;
  height: 720px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const ContentBox = (props) => {
  return <SyContentBox>{props.children}</SyContentBox>;
};

export default ContentBox;
