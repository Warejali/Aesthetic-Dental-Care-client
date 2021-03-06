import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl font-bold text-primary'>Available date: {format(date, 'PP')}.</h2>
            <div className='grid lg:grid-cols-3 gap-10 mx-16'>
                {
                    services.map(service => <Service key={service.id} service={service} setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal key={treatment.id} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;