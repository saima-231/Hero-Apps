import { Github } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className=''><Link to={'/'}>Home</Link> </li>
                        <li><Link to={'/apps'}>Apps</Link> </li>
                        <li><Link to={'/installation'}>Installation</Link> </li>


                    </ul>
                </div>
                <div className='flex items-center'>
                    <NavLink to={'/'}>  <img className='w-[30px] ml-4 hidden md:block' src="/logo.png" alt="" /></NavLink>
                    <a className="text-xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/apps'}>Apps</NavLink></li>
                    <li><NavLink to={'/installation'}>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className=''>
                    <a href='https://github.com/Wasima230Sultana'
                        target="_blank"
                        rel="noopener noreferrer" className="text-white btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg"><Github /> Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;