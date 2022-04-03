import React from 'react';

const Link = (props) => {
    const { name, link } = props.route;
    console.log();

    return (
        <li>
            <a href={link}>
                <h1 className="font-medium text-white">{name}</h1>
            </a>
        </li>
    );
};

export default Link;