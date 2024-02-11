import { createBrowserRouter, Navigate } from "react-router-dom";
import DonorLayout from "./Pages/Donor/DonorLayout";
import DonorHomepage from "./Pages/Donor/DonorHomepage";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";

const router = createBrowserRouter([
/*
    {
        path: "/",
        element: <DonorLayout />,
        children: [
          {
            path: '/DonorHomepage',
            element: <Navigate to="/" />
          },
          {
            path: "/",
            element: <DonorHomepage />,
          },
          
        ],
      }, */
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },





]);


export default router;