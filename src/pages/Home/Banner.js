import React from 'react';
import banner from "../../assets/images/chair.png"
import Button from '../Shared/Button';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-green-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={banner} alt="" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;