import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot, name, date);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl text-secondary my-5">{name}</h3>

                    <form onSubmit={handleBooking} className='flex flex-col gap-5 items-center'>
                        <input disabled name='time' type="text" value={format(date, 'PP')} className="input input-bordered input-primary w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs select-primary">
                            {
                                slots.map(slot => <option slot={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Type name here" className="input input-bordered input-primary w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Type Email Address" className="input input-bordered input-primary w-full max-w-xs" />
                        <input name='phone' type="number" placeholder="Type phone no" className="input input-bordered input-primary w-full max-w-xs" />
                        <input type="submit" value="Book Now" className="primary-btn btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white transition " />
                    </form>
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;