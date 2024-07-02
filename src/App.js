import React from 'react';
import Home from './components/routeExample/pages/Home';
import Products from './components/routeExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./components/routeExample/layout/RootLayout";

// 라우터 설정
const router = createBrowserRouter([
//슬래스로 들어오면 엘리먼트를 루트레이아웃으로 로딩하겠다.
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products', element: <Products /> }
        ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;