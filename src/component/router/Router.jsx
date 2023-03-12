import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blank from "../pages/Blank";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      { path: "/", element: <Dashboard/> },
      { path: "/profile", element: <Profile /> },
      { path: "/faq", element: <Faq /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/contact", element: <Contact /> },
      { path: "/register", element: <Register/> },
      { path: "/login", element: <Login/> },
      { path: "/error", element: <Error/> },
      { path: "/blank", element: <Blank/> }
    ]
  },

])