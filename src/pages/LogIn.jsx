import { useState } from 'react';
import styled from 'styled-components';
import supabase from '../supabaseClient';
import { useLocation, useNavigate } from 'react-router-dom';

const LogIn = ({setSignIn}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUsers] = useState([]);
  const [info, setInfo] = useState({
    email: '',
    password: ''
  });
  const path = location.state?.redirectedFrom || "/";

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
        alert("이메일과 패스워드를 다시 확인해주세요!");
        throw error;
      }

      console.log('User signed up:', data);
      setSignIn(true);
      navigate(path, { replace: true });
    } catch (error) {
      console.error('Error signing up:', error);
    }
  }

  return (
    <StPageContainer>
      <LoginContainer>
        <div>
          <div>
            <LoginTitle>Login</LoginTitle>
          </div>
          <InputBoxs>
            <LoginInputForId
              type="text"
              value={info.email}
              onChange={(event) => {
                handleChangeInput(event, 'email');
              }}
              placeholder="ID"
            />
            <LoginInputForPassWord
              type="text"
              value={info.password}
              onChange={(event) => {
                handleChangeInput(event, 'password');
              }}
              placeholder="Password"
            />
          </InputBoxs>
          <ButtonBoxs>
            <LoginSignUpButton onClick={() => navigate("/signup")}>Sign up</LoginSignUpButton>
            <LoginButtonn type="button" onClick={handleAddInfo}>
              Login
            </LoginButtonn>
          </ButtonBoxs>
        </div>
        <GotoBackbutton onClick={() => history.go(-1)}>back</GotoBackbutton>
      </LoginContainer>
    </StPageContainer>
  );
};

export default LogIn;

const StPageContainer = styled.div`
  height: 100%;
  margin: auto;
  display: flex; /* Flexbox 사용 */
`;

const GotoBackbutton = styled.button`
  width: 60px;
  height: 30px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: green;
  gap: 40px;
  width: 308px;
  height: 350px;
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
const LoginSignUpButton = styled.button`
  width: 100px;
  height: 30px;
`;
const LoginButtonn = styled.button`
  width: 100px;
  height: 30px;
`;
