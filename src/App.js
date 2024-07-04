import React from 'react';
import Home from './components/routeExample/pages/Home';
import Products from './components/routeExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from "./components/routeExample/layout/RootLayout";
import ErrorPage from "./components/routeExample/pages/ErrorPage";
import Events, { loader } from "./components/routeExample/pages/Events";
import EventDetail from "./components/routeExample/pages/EventDetail";
import EventLayout from './components/routeExample/layout/EventLayout';
import NewEvent from './components/routeExample/pages/NewEvent';

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
            loader: loader,
          },
          //eventId는 key로 받을 수 있다. 
          { path: ':eventId', element: <EventDetail /> },
          { path: 'new', element: <NewEvent /> }
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