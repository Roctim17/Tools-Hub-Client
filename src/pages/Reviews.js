import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='px-5 p-auto m-auto'>
            <h1 className='card-body items-center text-center'><span className='card-title text-primary'>Total Reviews : {reviews.length}</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-50 m-auto">
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;