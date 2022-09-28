import React from 'react';

const About = () => {
    return (
        <div className='bg-base-200'>
            
            <div className="hero min-h-screen bg-base-300">
            <h1 className='text-center text-5xl font-bold pb-96 pt-10' >About Us</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/PjH9Z0d/pexels-pixabay-162553.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Tools Hub Office News!</h1>
                        <p className="py-6">Toolmaking is and has always been our core business and the base for what we do.
                            At The Tool Hub we pride ourselves on delivering high quality injection mould tools</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;