import React from 'react';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoCards = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:mx-16 text-white my-10'>
            <Info title="Opening Hours" img={clock} bgClass="bg-gradient-to-r from-primary to-secondary"></Info>
            <Info title="Opening Hours" img={marker} bgClass="bg-secondary"></Info>
            <Info title="Opening Hours" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></Info>
        </div>
    );
};

export default InfoCards;