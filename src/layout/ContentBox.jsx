import styled from 'styled-components';

const SyContentBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const ContentBox = (props) => {
  return <SyContentBox>{props.children}</SyContentBox>;
};

export default ContentBox;
