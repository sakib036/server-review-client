import React from 'react';
import useTitle from '../../Hooks/useTitle';
import HomeServices from './HomeServices';
import Slider from './Slider';


const Home = () => {


    useTitle('Home');



    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
        </div>
        
    );
};

export default Home;