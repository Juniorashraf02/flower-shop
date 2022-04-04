import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <Link to='/blogs'>
            <div className="container mx-auto m-5">
                <div className="text-justify  border rounded-lg p-3">
                    <h1 className="text-3xl font-medium mb-5">1. What is context api?</h1>
                    <p className="text-gray-600">The React Context API is a way for a React structure that enables one to exchange unique details and assists in solving prop-drilling from all levels of one's application. In other words, The React Context API is a way for a React app to efectively produce gobal vriables that can be passed around. And this is alternative to moving props or props-drilling from grandparent to child to parent and so on. Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. And this context API will not replace redux entriely. For using API context we need to use React.createContext(). It returs a consumer and a provider. Provider is  a component that as it's names suggests provides the state to its children. It will hold the store and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.
                    </p>
                </div>
                <div className="text-justify  border rounded-lg p-3 mt-5">
                    <h1 className="text-3xl font-medium mb-5">2. What is semantic tag?</h1>
                    <p className="text-gray-600">
                        we know that HTML is a markup language and HTML was originally created as a markup language to describe documents on the early internet.Day by day the internet got many user and it grew a lot and for this it needs to change.Semantic HTML tags provide information aboutthe contents of those tags that goes beyond just how they look on a page.Text that is enclosed in the open and closing tag is immediately recognized by the browser as some type of coding language.By adding semantic tag we can add additional information to our website which aids us in communication and helps Google and Bing understand the roles and relative importance of the different parts of my page. Specially semantic tags make it clear to the browser what the meaning of a page and its content is. There are many semantic tags. Some of them are: article, asidedetails, figcaption, figure, footer, header, main, mark,nav, section, summary, time.
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Blogs;