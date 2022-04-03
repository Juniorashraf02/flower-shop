import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Link to='/*'>
            <h1>404 not found..!!!</h1>
        </Link>
    );
};

export default NotFound;