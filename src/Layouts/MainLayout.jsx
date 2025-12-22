import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto flex flex-col min-h-screen '> 
            <Navbar></Navbar>
            <div className='min-w-screen-xl mx-auto w-full flex-1 bg-[#fffffb]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;