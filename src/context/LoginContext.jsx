import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../supabaseClient";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  // isSignIn 초기값을 localStorage의 LoginToken에 설정한 값으로 초기화
  const [isSignIn, setSignIn] = useState(!!localStorage.getItem("LoginToken"));
  
  // session 상태를 확인하여 token이 true여도 isSignIn은 false가 되게 변경
  useEffect(() => {
    checkSignIn();
  }, []);
  
  // 유저가 로그인 상태인가 확인하는 로직
  const checkSignIn = async() => {
    const session = await supabase.auth.getSession();
    setSignIn(!!session.data.session);
  };

  // 로그인 로직
  const logIn = () => {
    setSignIn(true);
    window.localStorage.setItem("LoginToken", true);
  };

  // 로그아웃 로직
  const logOut = async() => {
    const { error } = await supabase.auth.signOut();
    setSignIn(false);
    window.localStorage.setItem("LoginToken", false);
  };

  const contextValue = {
    isSignIn,
    // isLocal,
    setSignIn, 
    checkSignIn,
    // getUser,
    logIn,
    logOut
  };

  return (
    <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;