import React from 'react';
import TodoForm from "./TodoForm";
import {Route} from "react-router-dom";

const ProtectedPage = () => {
    return (
                <>
                    <h1>Защищенная страница</h1>
                    <p>Только для аутентифицированных пользователей.</p>
                    <TodoForm/>
                </>
    );
};

export default ProtectedPage;