import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Service = ({ service }) => {
    const { _id, title, balance, picture, details, } = service;
    return (

        <div className="card card-compact w-full backdrop-contrast-50 shadow-2xl text-white">

            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                <PhotoView src={picture}>
                    <img src={picture} alt="" />
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.length <= 100 ? details : details.slice(0, 100) + ('...')}</p>
                <p className='text-xl font-bold'>Service Charge : {balance}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Service;