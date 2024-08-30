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
          <SyLable>ID:</SyLable>
          <SyInfoContent>heebeom</SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyLable>PW:</SyLable>
          <SyInfoContent>{secretPW}</SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyLable>Name:</SyLable>
          <SyInfoContent>햄식이</SyInfoContent>
        </SyInfo>
        <SyInfo>
          <SyLable>한줄 소개:</SyLable>
          <SyInfoContent>요리조리</SyInfoContent>
        </SyInfo>
      </SyInfoDiv>
      <SyButton>수정</SyButton>
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
  top: 16%;
  left: 10%;
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
  left: 40%;
  width: 300px;
`;

const SyInfo = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const SyLable = styled.p`
  width: 40%;
  margin-bottom: 30px;
  text-align: right;
`;

const SyInfoContent = styled.p`
  margin-left: 20px;
  width: 90%;
  text-align: center;
`;

const SyButton = styled.button`
  position: absolute;
  left: 14%;
  bottom: 41%;
  width: 90px;

  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
