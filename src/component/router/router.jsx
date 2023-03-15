import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Accordion from "../pages/Accordion";
import Alerts from "../pages/Alerts";
import Badges from "../pages/Badges";
import Blank from "../pages/Blank";
import Breadcrumbs from "../pages/Breadcrumbs";
import Buttons from "../pages/Buttons";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: '/', element: <Main/>, errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/profile", element: <Profile /> },
      { path: "/faq", element: <Faq /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/contact", element: <Contact /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/error", element: <ErrorPage/> },
      { path: "/blank", element: <Blank /> },
      { path: "/alert", element: <Alerts/> },
      { path: "/accordion", element: <Accordion/> },
      { path: "/badges", element: <Badges/> },
      { path: "/breadcrumbs", element: <Breadcrumbs/> },
      { path: "/buttons", element: <Buttons/> },
      
    ]
  },

])

