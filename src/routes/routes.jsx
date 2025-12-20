import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoutes from "../provider/PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails";
import AllServices from "../pages/AllServices";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";
import ForgotPassword from "../pages/ForgotPassword";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
  {
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/forgot-password", Component: ForgotPassword },
      { path: "/services", Component: AllServices },
      { path: "/about-us", Component: AboutUs },
      { path: "/privacy-policy", Component: PrivacyPolicy },
      { path: "/contact-us", Component: Contact },
      { path: "/services/:id", Component: ServiceDetails },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
