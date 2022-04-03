import React, { useState } from 'react';
import Link from '../Link/Link';
import { HiMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Reviews', link: '/reviews' },
        { id: 3, name: 'Dashboard', link: '/dashboard' },
        { id: 4, name: 'Blogs', link: '/blogs' },
        { id: 5, name: 'About', link: '/about' }
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={() => setOpen(!open)} className="md:hidden">
                {open ? <HiX className=''></HiX> : <HiMenu></HiMenu>}
            </div>
            <ul className={`md:flex justify-center gap-x-10 absolute md:static duration-500 ease-in bg-indigo-300 w-full ${open ? 'top-4' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id} route={route}
                    />)
                }
            </ul>
        </nav>
    );
};

export default NavBar;