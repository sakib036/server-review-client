import React from 'react';
import {Link} from 'react-router-dom';

const HomeService = ({ service }) => {
    const { title, picture,details,balance, _id } = service;
    return (
        <div className="sm:grid grid-cols-2 text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300">
            <div>
            <figure><img src={picture} alt="Album"  className='rounded-2xl h-72 w-full'/></figure>
            </div>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.length<=100?details:details.slice(0, 100) + ('...')}</p>
                <p className='text-xl font-bold'>Service Charge : {balance}</p>
                <div className="card-actions justify-end">
                <Link to={`/service/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;