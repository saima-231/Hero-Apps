import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppsCard from './AppsCard';
import SkeletonLoader from './SkeletonLoader';


const Apps = () => {
     const {apps, loading} = useApps();
    const [search, setSearch] = useState('');
    if(loading)
      return <SkeletonLoader></SkeletonLoader> 
    const term = search.trim().toLocaleLowerCase();
    const searchedApps= term?(apps.filter((app)=> app.title.toLocaleLowerCase().includes(term))): apps
    return (
         <div className='m-5'>
            <h2 className='text-[#001931] font-bold text-[48px] text-center mt-4 mb-2'>Our All Applications</h2>
            <p className='text-[#627382] text-[20px] text-center mb-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center py-4 '>
                <h1 className=' text-sm text-[#001931] font-semibold'>({searchedApps.length})Apps Found</h1>
                <label className='input bg-white border-gray-400 text-gray-600'>
                    <input 
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                    type="search" placeholder='Search products' />
                </label>
            </div>
            {
                loading? <SkeletonLoader></SkeletonLoader>:
                searchedApps.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
       <div>
         <p className='text-center text-gray-500 mt-10 text-lg font-semibold'>
          No App Found
        </p>   
       </div>
       
      )
            }
            
        </div>
    );
};

export default Apps;