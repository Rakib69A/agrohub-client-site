import React from 'react';
import ResponsiveCarousel from '../../Shared/ResponsiveCarousel/ResponsiveCarousel';
import HomeCategory from './HomeCategory/HomeCategory';

const Home = () => {
    return (
        <div>
            <ResponsiveCarousel></ResponsiveCarousel>
            <HomeCategory></HomeCategory>
        </div>
    );
};

export default Home;