import React from 'react';
import { Link, useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error= useRouteError();
    return (
 <div className='flex flex-col min-h-screen bg-white'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <div>
            <div className='flex justify-center'>
                <img src="/error-404.png" alt="" />
                </div>
                <div className='text-center'>
                     <h1 className='font-semibold text-[48px] text-[#001931]'>Oops, page not found!</h1>
                <p className='text-[#627382] text-[20px]'>The page you are looking for is not available.</p>
                </div>
               
            
             <div className='flex items-center justify-center'>
                <Link className='btn btn-outline  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white my-5' to={'/'}>Go Back</Link>
            </div>
        </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default ErrorPage;