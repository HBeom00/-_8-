import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../pages/Main';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import DetailPage from '../pages/DetailPage';
import Mypage from '../pages/Mypage';
import Writing from '../pages/Writing';
import { useState } from 'react';
import { ProtectedRoute } from './ProtectedRoute';

const Router = () => {
  const [isSignIn, setSignIn] = useState(false);

  const publicRoutes = [
    {
      path: "/detail",
      element: <DetailPage />
    }
  ]

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Main />
    },
    {
      path: "/login",
      element: <LogIn setSignIn={setSignIn} />
    },
    {
      path: "/signup",
      element: <SignUp />
    }
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "",
      element: <ProtectedRoute isSignIn={isSignIn} />,
      children: [
        {
          path: "/",
          element: <Main />
        },
        {
          path: "/mypage",
          element: <Mypage />
        },
        {
          path: "/writing",
          element: <Writing />
        }
      ]
    }
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!isSignIn ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router}/>
};

export default Router;
