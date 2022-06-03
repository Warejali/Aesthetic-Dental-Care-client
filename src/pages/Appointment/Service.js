import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, price, slots } = service;
    return (
        <div>
            <div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} available</p>
                        <p>{
                            slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slots available today</span>
                        }</p>
                        <p className='font-bold text-secondary'>price: ${price}</p>
                        <div className="card-actions">
                            <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" className="primary-btn btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white transition">Book Appointment</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;