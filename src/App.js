import React from 'react';
import Header from "./components/Food/Layout/Header";
import Meals from "./components/Food/Meals/Meals";

const App = () => {
    return (
        <>
            <Header />
            <div id="main"></div>
            <Meals />
        </>
    );
};

export default App;