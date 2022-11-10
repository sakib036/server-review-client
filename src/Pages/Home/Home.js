import React from 'react';
import useTitle from '../../Hooks/useTitle';
import ConsiderReWire from './ConsiderReWire';
import HomeServices from './HomeServices';
import Slider from './Slider';
import WhyService from './WhyService';


const Home = () => {


    useTitle('Home');



    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <WhyService></WhyService>
            <ConsiderReWire></ConsiderReWire>
        </div>
        
    );
};

export default Home;