import React, { useState } from 'react';
import { loadApps, removeFromAppList } from '../utils/localStorage';

const Installation = () => {
    const [appList, setAppList] = useState(() => loadApps());
    const [sortOrder, setSortOrder] = useState('none');

    if (!appList.length)
         return <p className='text-center mt-10 text-xl'>No Data is Available.</p>;

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') 
            return [...appList].sort((a, b) => a.downloads - b.downloads);
        if (sortOrder === 'downloads-desc') 
            return [...appList].sort((a, b) => b.downloads - a.downloads);
        return appList;
    })();

    const handleRemove = (id) => {
        removeFromAppList(id);
        setAppList(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div>
            <div>
                <h2 className='text-[#001931] font-bold text-[48px] text-center my-3'>Your Installed Apps</h2>
                <p className='text-[#627382] text-[20px] text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center py-4'>
                <h1 className='font-semibold text-3xl'>
                    App List <span className='text-sm text-gray-600'>({sortedItem.length}) Apps Found</span>
                </h1>
                <label className='form-control w-full max-w-xs'>
                    <select 
                        className='select select-bordered' 
                        value={sortOrder} 
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value="none">Sort by downloads</option>
                        <option value="downloads-asc">Low → High</option>
                        <option value="downloads-desc">High → Low</option>
                    </select>
                </label>
            </div>

            <div className='p-4 my-7'>
                {sortedItem.map(p => (
                    <div key={p.id} className="card card-side shadow-sm flex items-center p-7 min-h-[120px]">
                        <figure>
                            <img className='w-[50px] h-[50px] rounded-xl' src={p.image} alt={p.title} />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-[#001931] font-medium text-[20px] mt-3">{p.title}</h2>
                            <div className='flex items-center justify-baseline mb-5'>

                                <p className='text-[#00D390] font-medium text-[16px] flex items-center'>
                                    <img className='h-[20px]' src="/icon-downloads.png" alt="" /> 
                                    {p.downloads}
                                </p>

                                <p className='text-[#FF8811] font-medium text-[16px] flex items-center'>
                                    <img className='h-[20px]' src="/icon-ratings.png" alt="" /> 
                                    {p.ratingAvg || p.ratings} 
                                </p>

                                <p className='text-[#627382] font-medium text-[16px] flex items-center'>
                                    {p.size}
                                </p>

                            </div>
                        </div>

                        <div className="card-actions justify-end">
                            <button 
                                onClick={() => handleRemove(p.id)} 
                                className="btn btn-success text-white"
                            >
                                Uninstall
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Installation;