import React from 'react';

const Review = ({ review }) => {
    const { name, image, rating, description } = review;
    return (
        <div className='py-10 m-auto'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="avatar  pt-10 m-auto">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h1 className="card-title text-secondary">{rating} out of 5</h1>
                </div>
            </div>
        </div>
    );
};

export default Review;