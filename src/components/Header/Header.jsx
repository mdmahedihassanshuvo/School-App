import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex md:items-center text-right justify-end md:justify-between bg-gray-800 md:text-white text-black font-medium text-xl md:p-3'>
            <div className='ml-10 md:block hidden'>
                <Link to='/'><img className='w-12' src="logo.png" alt="" /></Link>
            </div>
            <nav className='md:mr-10 mr-5'>
                <div>
                    <button className='md:hidden' onClick={() => setOpen(!open)}><span>{open === true ? <XMarkIcon className="h-8 w-8 text-blue-500" /> : <Bars3Icon className="h-8 w-8 text-blue-500" />}</span></button>
                </div>
                <ul className={`md:flex md:gap-10  absolute md:static ${open ? `top-10, right-0` : '-top-28'}`}>
                    <li className='md:hover:text-orange-600 mr-10'>
                        <NavLink to='/' className={({ isActive }) =>
                            isActive
                                ? "text-blue-600" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className='md:hover:text-orange-600 mr-10'>
                        <NavLink to='/school' className={({ isActive }) =>
                            isActive
                                ? "text-blue-600" : ""}>
                            Schools
                        </NavLink>
                    </li>
                    <li className='md:hover:text-orange-600 mr-10'>
                        <NavLink to='/about' className={({ isActive }) =>
                            isActive
                                ? "text-blue-600" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li className='md:hover:text-orange-600 mr-10'>
                        <NavLink to='/login' className={({ isActive }) =>
                            isActive
                                ? "text-blue-600" : ""}>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;