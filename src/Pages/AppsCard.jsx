import React from 'react';
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
  console.log(app)
  const { image, downloads, ratingAvg, title, id } = app;
  return (
    <Link to={`/app/${id}`} className="card bg-base-100 shadow-sm  hover:scale-105 transition ease-in-out">
      <figure className='h-58 overflow-hidden'>
        <img className='w-50 object-cover'
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className='flex justify-between items-center'>
          <button className="btn btn-sm text-[#00D390]">
            <img className='w-4' src='/icon-downloads.png' alt="" />
            {downloads}</button>
          <button className="btn btn-sm text-[#FF8811]">
            <img className='w-4 ' src="/icon-ratings.png" alt="" />
            {ratingAvg}</button>

        </div>

        <div className="card-actions justify-end">
          {/* <Link to={`/app/${id}`} className="btn btn-outline">View details</Link> */}
        </div>
      </div>
    </Link>
    
  );
};

export default AppsCard;