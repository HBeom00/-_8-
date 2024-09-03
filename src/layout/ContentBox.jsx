import styled from 'styled-components';

export const SyContentBox = styled.div`
  max-width: 1280px;
  height: 720px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const ContentBox = (props) => {
  return <SyContentBox>{props.children}</SyContentBox>;
};

export default ContentBox;
