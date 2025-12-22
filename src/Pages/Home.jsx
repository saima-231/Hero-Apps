import React from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from './AppsCard';
import SkeletonLoader from './SkeletonLoader';
import { Link } from 'react-router';
const Home = () => {
    const { apps, loading, error } = useApps();
    const featuredApps = apps.slice(0,8);
    console.log(featuredApps)
    return (
        <div>
            <div className='my-7'>
                <h2 className='text-black text-3xl font-bold text-center  my-7'>We Build <br /> <span className='text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive</span>  Apps</h2>
                <p className='text-[#627382] items-center text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex items-center justify-center gap-4 my-4'>
                    <a href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="btn text-black font-semibold">
                            <img src="/Group.png" alt="" />
                            Google Play
                        </button>
                    </a>
                    <a href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="btn text-black font-semibold">
                            <img src="/Group1.png" alt="" />
                            App Store
                        </button>
                    </a>
                </div>
                <img className='mx-auto' src="/hero.png" alt="" />
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] min-h-[100px] '>
                    <h2 className='font-bold text-white text-xl text-center pt-4'>Trusted by Millions, Built for You</h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 justify-evenly text-center my-5 pb-5'>
                        <div className='my-4'>
                            <p className='text-white text-xs'>Total Downloads</p>
                            <h2 className='font-bold text-[#ffffff] text-2xl'>29.6M</h2>
                            <p className='text-white text-xs'>21% more than last month</p>
                        </div>
                        <div className='my-4'>
                            <p className='text-white text-xs'>Total Reviews</p>
                            <h2 className='font-bold text-[#ffffff] text-2xl'>906K</h2>
                            <p className='text-white text-xs'>46% more than last month</p>
                        </div>
                        <div className='my-4'>
                            <p className='text-white text-xs'>Active Apps</p>
                            <h2 className='font-bold text-[#ffffff] text-2xl'>132+</h2>
                            <p className='text-white text-xs'>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-black text-3xl font-bold text-center  my-4'>Trending Apps</h1>
                <p className='text-[#627382] items-center text-center'>Explore All Trending Apps on the Market developed by us</p>
               
            </div>
             <div>
            <div className='flex justify-between items-center py-4'>
               
            </div>
            {
                loading?<SkeletonLoader></SkeletonLoader>:
                 <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    featuredApps.map((app) => (<AppsCard key={app.id} app={app}></AppsCard>))
                }
            </div>
            }
            <div className='flex items-center justify-center'>
                <Link className='btn btn-outline  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white my-5' to={'/apps'}>Show All</Link>
            </div>
           
        </div>
        
        </div>
    );
};

export default Home;