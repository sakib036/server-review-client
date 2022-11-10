import React from 'react';
import wireImg from '../../Assets/ConsiderToWire/consider-wire.jpg'

const ConsiderReWire = () => {
    return (
        <div className='text-white grid sm:grid-cols-2 max-h-screen'>
            <div className='' style={{clipPath:'polygon(0% 0%, 81% 0, 100% 47%, 81% 100%, 0% 100%)'}}>
                <img className='w-full rounded-2xl' src={wireImg} alt="" />
            </div>
            
            <div className='ml-10 w-full'>
            <h1 className='text-3xl font-bold'>YOU SHOULD CONSIDER REWIRING YOUR HOME</h1>
            <ul className='text-xl mt-3 ml-10 list-disc'>
                <li>ROUTINE FLICKERING OF LIGHTS</li>
                <li>OVERACTIVE BREAKERS</li>
                <li>UNGROUNDED OUTLETS</li>
                <li>UNUSUAL SOUNDS</li>
                <li>STRANGE SMELLS</li>
            </ul>
            
            </div>
            
        </div>
    );
};

export default ConsiderReWire;