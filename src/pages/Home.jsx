import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookTicket from '../components/BookTicket';
import BusOperators from '../components/BusOperators';
import TravelTips from '../components/TravelTips';

const Home = () => (
    <>
        <Header />
        <BookTicket />
        <BusOperators />
        <TravelTips />
        <Footer />
    </>
);

export default Home;