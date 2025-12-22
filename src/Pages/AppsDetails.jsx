import React, { useState } from 'react';
import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import { Bar, BarChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { updatedList } from '../utils/localStorage';
import { toast } from 'react-toastify';

// const ratingData = [
//   { name: "1 star", count: 3000000 },
//   { name: "2 star", count: 4000000 },
//   { name: "3 star", count: 10000000 },
//   { name: "4 star", count: 30000000 },
//   { name: "5 star", count: 70000000 }
// ];

const AppsDetails = () => {
    const { id } = useParams();
    const { apps, loading, error } = useApps();
    const [disabled, setDisabled] = useState(false);
    const app = apps.find(p => String(p.id) === id)
    if (loading) return <p>Loading...</p>
    const { title, image, ratings, ratingAvg, companyName,description,downloads,reviews,size} = app || {};

    const handleClick = () =>{
        toast('Installation successfully start')
        updatedList(app);
        setDisabled(true);
    }
    // const app = apps.find(a => a.id == id);

  if (!app) {
    return (
        <div>
                   <div className='flex justify-center'>
                       <img src="/App-Error.png" alt="" />
                       </div>
                       <div className='text-center'>
                            <h1 className='font-semibold text-[48px] text-[#001931]'>Oops!! page not found!</h1>
                       <p className='text-[#627382] text-[20px]'>The App you are requesting is not found on our system.  please try another apps</p>
                       </div>
                      
                   
                    <div className='flex items-center justify-center'>
                       <Link className='btn btn-outline  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white my-5' to={'/apps'}>Go Back</Link>
                   </div>
               </div>
    );
  }
    return (
        <div className='p-8'>
            <div className='flex flex-wrap gap-4 my-5'>
                <img className='w-[250px] shadow-xl rounded-lg p-8' src={image} alt="" />
                <div > 
                    <h2 className='text-[#001931] font-bold text-[32px]'>{title}</h2>
                    <p className='text-[#627382] text-[20px]'>Developed by <span className='text-[20px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                        <div>
                            <img src="/icon-downloads.png" alt="" />
                            <p className='text-[#627382] text-[20px]'>Downloads</p>
                            <p className='text-[#001931] font-bold text-2xl'>{downloads}</p>
                        </div>

                         <div>
                            <img src="/icon-ratings.png" alt="" />
                            <p className='text-[#627382] text-[20px]'>Average Ratings</p>
                            <p className='text-[#001931] font-bold text-2xl'>{ratingAvg}</p>
                        </div>

                         <div>
                            <img src="/icon-review.png" alt="" />
                            <p className='text-[#627382] text-[20px]'>Total Reviews</p>
                            <p className='text-[#001931] font-bold text-2xl'>{reviews}</p>
                        </div>

                    </div>

                    <div>
                        <button onClick={handleClick}
                        disabled = {disabled}
                        className="btn btn-success text-white my-2">
                        { disabled ? "Installed" : 
                        `Install Now (${size} MB)`}   
                           </button>

                    </div>

                </div>

            </div>
               <div style={{ width: '100%', height: 300 }}>
                <h1 className='font-semibold text-[24px] text-[#001931]'>Ratings</h1>
  <ResponsiveContainer width="100%" height="100%">
    <BarChart
      layout="vertical"       // Horizontal bars
      data={ratings || []}    // Your ratings array
      margin={{ top: 10, right: 30,bottom:60}}
    >
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" reversed /> {/* 5 stars on top */}
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
</div>
<div>
     <h1 className='font-semibold text-[24px] text-[#001931]'>Description</h1>
     <p className='text-[#627382]  font-xs'>{description}</p>
</div>

        </div>
    );
};

export default AppsDetails;