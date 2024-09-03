import { useState } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';

import ContentBox2 from '../layout/ContentBox2';
import Swal from 'sweetalert2';

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn } = useLoginContext();

  const [info, setInfo] = useState({
    email: '',
    password: ''
  });
  const path = location.state?.redirectedFrom || '/';

  const handleChangeInput = (event, keyName) => {
    const value = event.target.value;
    const newInfo = { ...info, [keyName]: value };
    setInfo(newInfo);
  };

  const handleAddInfo = (event) => {
    event.preventDefault();
    loginUser();
  };

  async function loginUser() {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: info.email,
        password: info.password
      });

      if (error) {
        Swal.fire('이메일/패스워드를 다시 확인해주세요!');

        throw error;
      }

      console.log('User signed up:', data);
      logIn();
      navigate(path, { replace: true });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  return (
    <ContentBox2>
      <GotoBackbutton onClick={() => history.go(-1)}>back</GotoBackbutton>
      <ContainerBinding>
        <LeftContainer>
          {/* <LeftTitleBoxs> */}
          <LoginTitle>Welcome Back!</LoginTitle>
          {/* </LeftTitleBoxs> */}{' '}
          <LeftSubAndButtonBox>
            <LoginSubTitle>Don't have account yet? Click below</LoginSubTitle>
            <LoginSignUpButton onClick={() => navigate('/signup')}>SIGN UP</LoginSignUpButton>
          </LeftSubAndButtonBox>
        </LeftContainer>
        <RightContainer>
          <LoginContainer>
            <RightTitleBoxs>
              <LoginTitle>Log In</LoginTitle>
              <LoginSubTitle>Login with Email</LoginSubTitle>
            </RightTitleBoxs>
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
            </InputBoxs>
            <ButtonBoxs>
              <LoginButtonn type="button" onClick={handleAddInfo}>
                LOG IN
              </LoginButtonn>
            </ButtonBoxs>
          </LoginContainer>
        </RightContainer>
      </ContainerBinding>
    </ContentBox2>
  );
};

export default LogIn;

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

const LeftContainer = styled.div`
  width: 430px;
  background-color: #ffe31d;
  display: flex; /* Flexbox 사용 */
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const RightContainer = styled.div`
  width: 600px;
  height: 580px;
  display: flex; /* Flexbox 사용 */
  justify-content: center;
  background-color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

// const LeftTitleBoxs = styled.h1`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;

const RightTitleBoxs = styled.h1`
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
const LoginSignUpButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid black;
`;
const LoginButtonn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 15px;
  background-color: #ffe31d;
  border: none;
  cursor: pointer;
`;

const LeftSubAndButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
