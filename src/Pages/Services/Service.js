import React from 'react';
import {Link} from 'react-router-dom';


const Service = ({ service }) => {
    const { _id,title, balance, picture, details,} = service;
    return (

        <div className="card card-compact w-full backdrop-contrast-50 shadow-2xl text-white">
            <figure><img className='w-full h-72' src={picture} alt="Shoes" /></figure>
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

export default Service;