import { DayPicker } from 'react-day-picker';

const Calendar = ({ date, setDate }) => {
    return (
        <div className='max-w-sm mx-auto'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
    );
};

export default Calendar;