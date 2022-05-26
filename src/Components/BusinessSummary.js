import React from 'react';

const BusinessSummary = () => {
    return (
        <div className="text-center py-5 ">
            <h1 className='text-5xl font-bold'>Business Summary</h1>
            <div className="p-10 m-auto flex justify-center">

                <div className="stats stats-vertical text-3xl   lg:stats-horizontal shadow ">

                    <div className="stat ">
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">100+</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat ">
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value">120M+</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat ">
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;