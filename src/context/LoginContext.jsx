import { createContext, useContext, useState } from "react";
import supabase from "../supabaseClient";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isSignIn, setSignIn] = useState(false);

  // // 유저가 로그인 상태인가 확인하는 로직
  // const checkSignIn = async() => {
  //   const session = await supabase.auth.getSession();
  //   setSignIn(!!session.data.session);
  //   return !!session.data.session;
  // };

  // 임시 해결 : localStorage로 값이 저장되어 있는가 판별
  // const isLocal = window.localStorage.getItem('sb-dsbqloxhsrfdkumyhtlg-auth-token');

  // 유저 정보를 가져오는 로직
  const getUser = async() => {
    const { data: { loginUser } } = await supabase.auth.getUser();
    return loginUser;
  };

  // 로그아웃 로직
  const logOut = async() => {
    const { error } = await supabase.auth.signOut();
    setSignIn(false);
  };

  const contextValue = {
    isSignIn,
    // isLocal,
    setSignIn, 
    // checkSignIn,
    getUser,
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