import React, { Fragment, useState } from 'react';
import './App.css';
import UserList from "./Users/UserList";
import AddUsers from "./Users/AddUsers";


const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    const addUserHandler = user => {

        console.log(user);
        setUserList(prev => [
            ...prev,
            {
                ...user,
                id: Math.random().toString()
            }
        ]);
    };

    return (
        <>
            <AddUsers onAdd={addUserHandler} />
            <UserList users={userList} />
        </>
    );
};

export default App;
