import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';
import SideBarLayout from './layouts/SideBarLayout'
import AllProducts from './content/dashboards/AllProducts';


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
            }
        ]
    }
]

export default routes;
