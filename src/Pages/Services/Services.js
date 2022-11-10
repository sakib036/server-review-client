import React from 'react';
import {useLoaderData} from 'react-router-dom'
import useTitle from '../../Hooks/useTitle';
import Service from './Service';


const Services = () => {
    const services=useLoaderData();
    useTitle('Services');
    return (
        <div>
            <h1 className='text-white text-center sm:text-5xl font-bold'>Total Number Of Services {services.length}</h1>
            <div className='sm:grid grid-cols-2 gap-4 mt-10'>
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;