import { Navigate, Outlet, useLocation } from "react-router-dom"

export const ProtectedRoute = ({ isSignIn }) => {
  const {pathname} = useLocation();
  console.log(pathname);

  if(!isSignIn) {
    return <Navigate to="/login" replace state={{redirectedFrom: pathname,}}/>
  }

  return <Outlet />
}
