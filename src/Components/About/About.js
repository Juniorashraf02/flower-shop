import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Link to='about'>
            <p className="conatainer mx-auto items-center mt-5 font-medium justify-end">
                <p className="text-sky-600">OUR LOCATION</p>
                521 Green Lane <br />London<br />  NW96 2ET</p>
        </Link>
    );
};

export default About;