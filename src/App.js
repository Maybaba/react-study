import React, {Fragment, useRef, useState} from 'react';
import './App.css';
import UserList from "./Users/UserList";
import AddUsers from "./Users/AddUsers";


const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    const count = useRef(1);
    console.log('count: ', count);

    const addUserHandler = user => {

        count.current++;
        console.log('count.current: ', count.current);

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
            <AddUsers onAddUser={addUserHandler} />
            <UserList users={userList} />
        </>
    );
};

export default App;
