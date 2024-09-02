import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext";

export const ProtectedRoute = () => {
  const {pathname} = useLocation();
  const {isSignIn} = useLoginContext();


  if(!isSignIn) return <Navigate to="/login" replace state={{redirectedFrom: pathname,}}/>;


  return <Outlet />
}
