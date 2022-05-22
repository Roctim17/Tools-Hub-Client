import React from 'react';
import Banner from '../../Components/Banner';
// import BusinessSummary from '../../Components/BusinessSummary';
import Footer from '../../Components/Footer';
import Tools from '../Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            {/* <BusinessSummary></BusinessSummary> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;