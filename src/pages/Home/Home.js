import React from 'react';
import Banner from '../../Components/Banner';
import BusinessSummary from '../../Components/BusinessSummary';
import Footer from '../../Components/Footer';
import About from '../About';
import Contact from '../Contact';
import Reviews from '../Reviews';
import Tools from '../Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;