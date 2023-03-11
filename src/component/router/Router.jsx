import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Demo from "../pages/Demo";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main />, children: [
      { path: "/profile", element: <Profile /> },
      { path: "/demo", element: <Demo /> }
    ]
  },

])