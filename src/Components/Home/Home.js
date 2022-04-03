import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Link to='/home'>
             <h2>This is home</h2>
        </Link>
    );
};

export default Home;