import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentBox2 from '../layout/ContentBox2';
import Swal from 'sweetalert2';

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
        Swal.fire('입력 정보를 다시 확인해주세요!');
        throw error;
      }

      console.log('User signed up:', data);
      const { error: logoutError } = await supabase.auth.signOut(); // 회원가입 후 자동 로그인 해제를 위한 로그아웃
      // let like = confirm('로그인 화면으로 이동하시겠습니까?');
      Swal.fire({
        title: '로그인 화면으로 이동하시겠습니까?',
        text: '확인을 누르면 로그인 화면으로 이동합니다.',

        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        } else {
          navigate('/');
        }
      });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  return (
    <ContentBox2>
      <GotoBackbutton onClick={() => history.go(-1)}>back</GotoBackbutton>
      <ContainerBinding>
        <LeftContainer>
          <LoginContainer>
            <LeftTitleBoxs>
              <LoginTitle>Sign up</LoginTitle>
            </LeftTitleBoxs>
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
                type="password"
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
        </LeftContainer>
        <RightContainer>
          <RightTitleBoxs>
            <LoginTitle>Hello, Friend!</LoginTitle>
          </RightTitleBoxs>
          <RightSubAndButtonBox>
            <LoginSubTitle>Have you registerd? Click below</LoginSubTitle>
            <LoginButton onClick={() => navigate('/login')}>Log In</LoginButton>
          </RightSubAndButtonBox>
        </RightContainer>
      </ContainerBinding>
    </ContentBox2>
  );
};

export default SignUp;

const GotoBackbutton = styled.button`
  width: 70px;
  height: 40px; //나중에 header에 넣어주면 될것같음
  position: absolute;
  top: 15%;
  right: 16%;
  border-radius: 2rem;
  font-size: 15px;
  cursor: pointer;
  border: 2px solid black;
`;

const ContainerBinding = styled.div`
  display: flex;
`;
const RightContainer = styled.div`
  width: 430px;
  background-color: #ffe31d;
  display: flex; /* Flexbox 사용 */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LeftContainer = styled.div`
  width: 600px;
  height: 580px;
  display: flex; /* Flexbox 사용 */
  justify-content: center;
  background-color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const RightTitleBoxs = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LeftTitleBoxs = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const LoginTitle = styled.h1`
  font-size: 50px;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
`;

const LoginSubTitle = styled.h1`
  font-size: 18px;
  color: gray;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
`;

const InputBoxs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const ButtonBoxs = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-direction: column;
  width: 308px;
  align-items: center;
`;

const LoginInputForId = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f4f1;
  border: none;
`;
const LoginInputForPassWord = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f4f1;
  border: none;
`;

const LoginInputForNickName = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f4f1;
  border: none;
`;

const LoginInputForIntroduction = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #f5f4f1;
  border: none;
`;

const LoginSignUpButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  background-color: #ffe31d;
  border: none;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid black;
`;

const RightSubAndButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
