import { Suspense, lazy } from "react";
import { Navigate, RouteObject } from "react-router";
import SideBarLayout from "./layouts/SideBarLayout";
import AllProducts from "./content/dashboards/AllProducts";
import AddProduct from "./content/dashboards/AddProducts";
import Orders from "./content/dashboards/Orders";
import OrderDetails from "./content/dashboards/OrderDetails";
import Dashboard from "./content/dashboards/Dashboard";
import Home from "./pages/User/Home";
import UserLayout from "./layouts/UserLayout";
import Shipment from "./pages/User/Shipment";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import { useSelector } from "react-redux";
import BaseLayout from "./layouts/BaseLayout";
import Settings from "./content/dashboards/Settings";
import { useAppSelector } from "./app/hooks";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = (props: ProtectedProps) => {
  // console.log("protected")
  // const user = useSelector((state)=> state?.user?.user);
//   const token = localStorage.getItem("token");
//   return token ? <>{props.children}</> : <Navigate to="/signup" />;
};
const Private = (props: ProtectedProps) => {
//   const token = localStorage.getItem("token");
//   const user = useAppSelector((state) => state?.user?.user);
//   return token && user?.role !== "ADMIN" ? (
    // <Navigate to="/" />
//   ) : (
    // <>{props.children}</>
//   );
};
const Public = (props: ProtectedProps) => {
//   const user = useAppSelector((state) => state?.user?.user);
//   return Object.keys(user).length === 0 && user?.role !== "USER" ? (
//     <Navigate to="/" />
//   ) : (
//     <>{props.children}</>
//   );
};
const LoggedIn = (props: ProtectedProps) => {
//   // const user = useAppSelector((state)=> state?.user?.user);
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : <>{props.children}</>;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "vendor",
        element: <SideBarLayout />,
        children: [
            {
                path: 'settings',
                element: <Settings />
            },
          {
            path: "products",
            children: [
              {
                path: "",
                element: <AllProducts />,
              },
              {
                path: "addproduct",
                element: <AddProduct />,
              },
            ],
          },
          {
            path: "orders",
            children: [
              {
                path: "",
                element: <Orders />,
              },
              {
                path: "orderdetails",
                element: <OrderDetails />,
              },
            ],
          },
          {
            path: "",
            element: <Dashboard />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
            ],
          },
        ],
      },
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "delivery",
            element: <Shipment />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
];

export default routes;
