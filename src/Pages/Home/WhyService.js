import React from 'react';
import money from '../../Assets/Why Service/money-saving.png'
import professional from '../../Assets/Why Service/professional-knowledge.jpg'
import assurance from '../../Assets/Why Service/Quality Assurance.jpeg'

const WhyService = () => {
    return (
        <div className='text-white my-20'>
            <h1 className='text-5xl font-bold text-center'>Why Service To Me</h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 py-32'>

                <div className="card shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 md:translate-y-12">
                    <figure><img className='h-60 w-full' src={money} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">SAVE MONEY</h2>
                        <p className='text-lg'>I pride my selves in providing a fair price to our customers. We charge a fixed rate for every 2 hours of electrical work and also every hour thereafter. No other hidden charges.</p>
                        
                    </div>
                </div>

                <div className="card bg-gradient-to-r from-fuchsia-500 to-violet-500 shadow-xl md:-translate-y-12">
                    <figure><img className='h-60 w-full' src={professional} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">PROFESSIONAL</h2>
                        <p  className='text-lg'>I train to ensure the highest standards of quality and professionalism. I follow the instruction of building code for electric work. I Provide to ensure for safety work.</p>
                        
                    </div>
                </div>

                <div className="card bg-gradient-to-r from-indigo-500 to-fuchsia-500 shadow-xl md:-translate-y-32">
                    <figure><img className='h-60 w-full' src={assurance} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">ASSURANCE</h2>
                        <p  className='text-lg'>Rest assured with your satisfaction guarantee. If for any reason you are unsatisfied with a service, I will come back and sort out your issues with no additional charges.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyService;