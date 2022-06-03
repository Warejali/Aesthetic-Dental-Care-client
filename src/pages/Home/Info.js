import React from 'react';

const Info = ({ title, img, bgClass }) => {
    return (
        <div>
            <div className={`card w-96 bg-base-100 shadow-xl ${bgClass}`}>
                <div className='lg:flex justify-center items-center px-5'>
                    <div>
                        <img src={img} alt='' />
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;