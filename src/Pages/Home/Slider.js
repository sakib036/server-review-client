import React from 'react';
import img1 from '../../Assets/Carusal/img1.jpg'
import img2 from '../../Assets/Carusal/img2.jpg'
import img3 from '../../Assets/Carusal/img3.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full opacity-60" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute flex justify-between text-center left-16 top-10 sm:left-32  sm:top-1/3 w-3/4'>
                <h1 className='text-white text-2xl  sm:text-5xl ' >Residential electrical systems , business or commercial , school and other electrical works.</h1>
               
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full opacity-60" />             
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute flex justify-between left-10 top-10 sm:left-32  sm:top-1/3 w-3/4 text-center'>
                <h1 className='text-white text-2xl  sm:text-5xl ' >Looking for the best electrical service at home near you</h1>
               
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full opacity-60" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute flex justify-between text-center left-16 top-10 sm:left-32  sm:top-1/3 w-3/4'>
                <h1 className='text-white text-2xl  sm:text-5xl ' >Transmitting or distributing electricity, electric lights, current or power over lines, wires or cables.</h1>
               
                </div>
            </div>

        </div>
    );
};

export default Slider;