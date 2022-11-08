import React from 'react';

const Service = ({ service }) => {
    const { title, balance, picture, details } = service;
    return (

        <div className="card card-compact w-full backdrop-contrast-50 shadow-2xl text-white">
            <figure><img className='w-full h-72' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 100) + ('...')}</p>
                <p className='text-xl font-bold'>Service Charge : {balance}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Service;