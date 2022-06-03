import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const AppointmentHome = () => {
    return (

        <section style={{
            background: `url(${appointment})`
        }} className=''>
            <div className="hero text-white lg:px-16 my-20">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div>
                        <img src={doctor} className="mt-[-100px] max-w-sm" alt='' />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 px-16">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Appointment</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHome;