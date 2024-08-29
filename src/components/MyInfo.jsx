import styled from 'styled-components';

const MyInfo = () => {
  let password = 'shinheebeom';
  let secretPW = '*'.repeat(password.length);
  return (
    <SyContainer>
      <SyImageDiv>
        <SyImage src="" alt="사진" />
      </SyImageDiv>
      <SyInfoDiv>
        <SyInfo>
          ID:
          <SyInfoContent>heebeom</SyInfoContent>
        </SyInfo>
        <SyInfo>
          PW:
          <SyInfoContent>{secretPW}</SyInfoContent>
        </SyInfo>
        <SyInfo>
          Name:
          <SyInfoContent>햄식이</SyInfoContent>
        </SyInfo>
        <SyInfo>
          한줄 소개:
          <SyInfoContent>요리조리</SyInfoContent>
        </SyInfo>
        <SyButton>수정</SyButton>
      </SyInfoDiv>
    </SyContainer>
  );
};

export default MyInfo;

const SyContainer = styled.div`
  height: 100%;
  position: relative;
`;

const SyImageDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 15%;
  border: 1px solid black;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SyImage = styled.img``;

const SyInfoDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 300px;
`;

const SyInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const SyInfoContent = styled.p`
  margin-left: 20px;
`;

const SyButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
