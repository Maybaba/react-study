import React from 'react';
import Home from './components/routeExample/pages/Home';
import Products from './components/routeExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./components/routeExample/layout/RootLayout";
import ErrorPage from "./components/routeExample/pages/ErrorPage";
import ProductDetail from "./components/routeExample/pages/ProductDetail";
import Events from "./components/routeExample/pages/Events";
import EventDetail from "./components/routeExample/pages/EventDetail";
import EventLayout from './components/routeExample/layout/EventLayout';

// 라우터 설정
const router = createBrowserRouter([
//슬래스로 들어오면 엘리먼트를 루트레이아웃으로 로딩하겠다.

    //절대경로로 path를 정할 수 있다.
    //home을 링크를 비워두고, 하위 경로에서는 ./으로 경로를 장석하면 알아서 자동으로 화면을 로ㅎ딩한다.

    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            { path: 'events',
                element: <EventLayout />, //여러 페이지에서 한번에 먹힘!
                children: [
                    { 
                        index: true, 
                        element: <Events />,
                        //이 페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
                        // 이 함수에는 페이지가 열리자마자 해야 할 일을 적을 수 있음 
                        loader: async() => {
                        console.log('loader call!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                        const response = await fetch('http://localhost:3000/Events');
                        const jsonData = await response.json();

                        //loader가 리턴한 데이터는 loader를 선언한 컴포넌트와 그 하위 컴포넌트를 언제든 불러서 상용할 수 있당
                        return jsonData;
                        }
                    }, 
                    { path: ':eventId', element: <EventDetail /> },
                ]
            },
        ]
    }                // { path: 'products/:prodId/page/pageNo', element: <ProductDetail /> },   
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;