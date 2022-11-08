import React from 'react';

const Service = ({ service }) => {
    const { title, picture } = service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-6">
            <figure><img src={picture} alt="Album"  className='h-60'/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Service;