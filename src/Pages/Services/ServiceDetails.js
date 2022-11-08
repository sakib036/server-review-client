import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {Link} from 'react-router-dom';

const ServiceDetails = () => {
    const service=useLoaderData();
    const { title, picture,details,balance } = service;
    return (
        <div className=" text-white shadow-2xl shadow-red-500/50 my-6 rounded-2xl border-2 border-red-300">
            <div>
            <figure><img src={picture} alt="Album"  className='rounded-2xl w-full'/></figure>
            </div>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <p className='text-xl font-bold'>Service Charge : {balance}</p>
                <div className="card-actions justify-end">
                   <Link to='/services'> <button className="btn btn-primary">Go To Services</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;