import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Signin from "../pages/Signin";
import SignUp from "../pages/Signup";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/signin',
    element: <Signin/>
  },
  {
    path: '/signup',
    element:<SignUp/>
  }
])

export default router;
