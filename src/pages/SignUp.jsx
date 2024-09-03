import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: '',
    password: '',
    nickname: '',
    introduction: ''
  });

  const handleChangeInput = (event, keyName) => {
    const value = event.target.value;
    const newInfo = { ...info, [keyName]: value };
    setInfo(newInfo);
  };

  const handleAddInfo = (event) => {
    event.preventDefault();
    signUpUser();
  };

  async function signUpUser() {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: info.email,
        password: info.password,
        options: {
          data: {
            nickname: info.nickname,
            avatar_url: 'default.jpg',
            comment: info.introduction
          }
        }
      });

      if (error) {
        alert('입력 정보를 다시 확인해주세요!');
        throw error;
      }

      console.log('User signed up:', data);
      const { error: logoutError } = await supabase.auth.signOut(); // 회원가입 후 자동 로그인 해제를 위한 로그아웃
      let like = confirm('로그인 화면으로 이동하시겠습니까?');
      if (like) navigate('/login');
      else navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  return (
    
    <StPageContainer>
      <GotoBackbutton onClick={() => history.go(-1)}>back</GotoBackbutton>
      <div
        type="img"
        value={info.img}
        onChange={(event) => {
          handleChangeInput(event, 'img');
        }}
      >
        사진들어감
      </div>
      <LoginContainer>
        <div>
          <LoginTitle>Sign up</LoginTitle>
        </div>
        <InputBoxs>
          <LoginInputForId
            type="text"
            value={info.email}
            onChange={(event) => {
              handleChangeInput(event, 'email');
            }}
            placeholder="Email"
          />
          <LoginInputForPassWord
            type="text"
            value={info.password}
            onChange={(event) => {
              handleChangeInput(event, 'password');
            }}
            placeholder="Password"
          />
          <LoginInputForNickName
            type="text"
            value={info.nickname}
            onChange={(event) => {
              handleChangeInput(event, 'nickname');
            }}
            placeholder="Nickname"
          />
          <LoginInputForIntroduction
            type="text"
            value={info.introduction}
            onChange={(event) => {
              handleChangeInput(event, 'introduction');
            }}
            placeholder="Introduce yourself"
          />
        </InputBoxs>
        <ButtonBoxs>
          <LoginSignUpButton type="button" onClick={handleAddInfo}>
            Sign up
          </LoginSignUpButton>
        </ButtonBoxs>
      </LoginContainer>
    </StPageContainer>
  );
};

export default SignUp;

const StPageContainer = styled.div`
  height: 100vh;
`;

const GotoBackbutton = styled.button`
  width: 60px;
  height: 30px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: green;
  gap: 40px;
  width: 308px;
`;

const LoginTitle = styled.h1`
  font-size: 50px;
`;

const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonBoxs = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 308px;
`;

const LoginInputForId = styled.input`
  width: 300px;
  height: 30px;
`;
const LoginInputForPassWord = styled.input`
  width: 300px;
  height: 30px;
`;

const LoginInputForNickName = styled.input`
  width: 300px;
  height: 30px;
`;

const LoginInputForIntroduction = styled.input`
  width: 300px;
  height: 30px;
`;

const LoginSignUpButton = styled.button`
  width: 100px;
  height: 30px;
`;
