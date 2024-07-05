import React from 'react';
import Home from './components/routeExample/pages/Home';
import Products from './components/routeExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./components/routeExample/layout/RootLayout";
import ErrorPage from "./components/routeExample/pages/ErrorPage";
import Events, { loader as eventListLoader } from "./components/routeExample/pages/Events"; //전체조회하기 loader
import EventDetail, { loader as eventDetailLoader, action as deleteAction } from "./components/routeExample/pages/EventDetail"; //단일조회하기 loader
import EventLayout from './components/routeExample/layout/EventLayout';
import EditPage from './components/routeExample/pages/EditPage';
import { action as manipulateAction } from './components/routeExample/pages/EventForm';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventLayout />,
        // outlet으로 children 명시 
        children: [
          { 
            index: true, 
            element: <Events />,
            loader: eventListLoader, //loader 가연결될 수있는 범위 : 하위 컴포넌트(중첩의 하위컴포넌트가 아님)
            //loader가 children에게 직접적으로 연결되지 않아
            //eventDetail에서 loader를 사용하지 못하고 있음 
            id: 'event-detail', // loader에게 중복없는 아이디 부여
          },
          //eventId는 key로 받을 수 있다. 
          { path: ':eventId', 
            loader: eventDetailLoader,
            // element: <EventDetail />,
            children: [
              { 
                index: true, 
                element: <EventDetail />,
                action: deleteAction
               },
              { path: 'edit', 
                element: <EditPage /> ,
                action: manipulateAction
              },
            ]
          },
          { path: 'new', element: <NewEvent />, 
            //서버에 갱신데이터 요청을 보낼 때 트리거
            action: manipulateAction
          },
        ]
      },
    ]
  },
]);

const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;