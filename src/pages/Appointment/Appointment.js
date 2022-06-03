import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import AvailableAppointment from './AvailableAppointment';
import Calendar from './Calendar';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <PageTitle title="Appointment"></PageTitle>
            <Calendar date={date} setDate={setDate}></Calendar>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;