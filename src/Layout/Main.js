import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Share/Footer/Footer';
import Header from '../Pages/Share/Header/Header';
import backgroundImg from '../Assets/electrical-services.jpg'

const Main = () => {
    return (
        <div style={{ background: `linear-gradient(rgba(97, 96, 93, 0.8), rgba(48, 48, 47, 0.8)), url(${backgroundImg})`, height: 'auto', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} >
            <div className='w-full h-full'>
                <Header></Header>
                <div className='max-w-screen-lg mx-auto border-2'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;