import React from 'react';

const Review = ({ review }) => {
    const { name, image, rating, description } = review;
    return (
        <div className='py-10 m-auto'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="avatar  pt-10 m-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white font-bold">{name}</h2>
                    <p className='text-1xl font-bold text-neutral'>"{description.slice(0, 30)}..."</p>
                    <h1 className="card-title text-warning font-bold">{rating} out of 5</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;