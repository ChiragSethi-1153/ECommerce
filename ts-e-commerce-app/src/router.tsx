import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SideBarLayout from './layouts/SideBarLayout'
import AllProducts from './content/dashboards/AllProducts';
import AddProduct from './content/dashboards/AddProducts';
import Orders from './content/dashboards/Orders';
import OrderDetails from './content/dashboards/OrderDetails';
import Dashboard from './content/dashboards/Dashboard';
import UserNavbar from './layouts/UserLayout/UserNavbar';
import Home from './pages/User/Home';
import UserLayout from './layouts/UserLayout';
import Shipment from './pages/User/Shipment';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';


const routes: RouteObject[] = [
    {
        path: 'signup',
        element: <SignupPage />
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'vendor',
        element: <SideBarLayout />,
        children: [
            
            {
                path: 'products',
                children: [
                    {
                        path: '',
                        element: <AllProducts />
                    },
                    {
                        path: 'addproduct',
                        element: <AddProduct />
                    },
                ]
            },
            {
                path: 'orders',
                children: [
                    {
                        path:'',
                        element: <Orders />,
                    },
                    {
                        path: 'orderdetails',
                        element: <OrderDetails />
                    },
                ]
            },
            {
                path: '',
                element: <Dashboard />,
                children: [
                    {
                        path: 'dashboard',
                        element: <Dashboard />
                    }
                ]

            }
        ]
    },
    {
        path: '/',
        element: <UserLayout />,
        children: [
            {
                path: '',
                element: <Home />
            }
            ,{
                path: 'home',
                element: <Home />
            },
            {
                path: 'delivery',
                element: <Shipment />
            }
        ]
    }
]

export default routes;
