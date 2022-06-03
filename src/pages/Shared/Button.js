import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className='primary-btn btn bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l text-white transition'>{children}</button>
        </div>
    );
};

export default Button;