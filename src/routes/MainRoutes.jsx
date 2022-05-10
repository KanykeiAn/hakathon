import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';
import CakePage from '../pages/CakePage';
import HomePage from '../pages/HomePage';
import MacaronPage from '../pages/MacaronPage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: '/auth',
            element: <AuthPage />,
            id: 1,
        },
        {
            link: '/about',
            element: <HomePage />,
            id: 2,
        },
        {
            link: '/mac',
            element: <MacaronPage />,
            id: 3,
        },
        {
            link: '/cake',
            element: <CakePage />,
            id: 4,
        },
        {
            link: '/IceCreamPa',
            element: <AuthPage />,
            id: 1,
        },
    ]
    return (
        <Routes>
            {PUBLIC_ROUTES.map((item) => (
                <Route path = {item.link} element = {item.element} key = {item.id} />
            ))}
        </Routes>
    );
};

export default MainRoutes;