import React from 'react';

const ProtectedPage = () => {
    return (
        <div>
            <h1>Защищенная страница</h1>
            <p>Только для аутентифицированных пользователей.</p>
        </div>
    );
};

export default ProtectedPage;