import React from 'react';
import PageTitle from '../Shared/PageTitle';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner';
import InfoCards from './InfoCards';
import ServicesHome from './ServicesHome';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServicesHome></ServicesHome>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;