import React from 'react';
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
        <MainNavigation/>
            { /* RootLayOut children들이 Outlet 렌더링됨 */ }
            <main>
        <Outlet />
            </main>

        </>
    );
};

export default RootLayout;