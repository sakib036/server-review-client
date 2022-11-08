import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([]);
    console.log(services)

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])
    
    return (
        <div>
            {
                services.map(service=><Service 
                    key={service.index}
                    service={service}
                
                ></Service>)
            }
        </div>
    );
};

export default Services;