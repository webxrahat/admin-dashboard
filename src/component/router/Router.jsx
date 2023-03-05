import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {path: '/', element:<Main/>, children:[
    {path: "/profile", element: <Profile/>}
  ]
},
  
])