import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SideBarLayout from './layouts/SideBarLayout'
import AllProducts from './content/dashboards/AllProducts';
import AddProduct from './content/dashboards/AddProducts';
import Orders from './content/dashboards/Orders';
import OrderDetails from './content/dashboards/OrderDetails';


const routes: RouteObject[] = [
    {
        path: '/vendor',
        element: <SideBarLayout />,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <SideBarLayout />
            // },
            {
                path: 'products',
                element: <AllProducts />
            },
            {
                path: 'addproduct',
                element: <AddProduct />
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'orderdetails',
                element: <OrderDetails />
            }
        ]
    }
]

export default routes;
