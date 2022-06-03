import React from 'react';
import ServiceHome from './ServiceHome';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const ServicesHome = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
        },
        {
            id: 1,
            name: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        },
        {
            id: 1,
            name: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        }
    ]
    return (
        <div className='lg:mx-16 my-20'>
            <h5 className='text-primary text-xl font-bold'>OUR SERVICES</h5>
            <h2 className='text-3xl font-bold my-3'>Services We Provide</h2>
            <div className='grid grid-cols-3'>
                {
                    services.map(service => <ServiceHome key={service.id} service={service}></ServiceHome>)
                }
            </div>
        </div>
    );
};

export default ServicesHome;