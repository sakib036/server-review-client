import React, { useEffect, useState } from 'react';
import HomeService from './HomeService';
import {Link} from 'react-router-dom';

const HomeServices = () => {
    const [services,setServices]=useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/home/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])
    
    return (
        <div>
            {
                services.map(service=><HomeService 
                    key={service.index}
                    service={service}
                
                ></HomeService>)
            }
         <div className="flex flex-row justify-center">
         <Link to='/services'><button className="px-6 py-4 backdrop-contrast-50 rounded-2xl border-2 border-red-300 text-white bg-red-300 text-2xl font-bold shadow-2xl shadow-fuchsia-400 ">SHOW MORE</button></Link>
         </div>
        </div>
    );
};

export default HomeServices;