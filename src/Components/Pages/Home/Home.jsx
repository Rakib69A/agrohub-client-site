import React from 'react';
import ResponsiveCarousel from '../../Shared/ResponsiveCarousel/ResponsiveCarousel';
import HomeCategory from './HomeCategory/HomeCategory';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';
import ShopByCategory from './ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <ResponsiveCarousel></ResponsiveCarousel>
            <HomeCategory></HomeCategory>
            <TopSellingProduct></TopSellingProduct>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;