import React from 'react';

const SingleTools = ({ product }) => {
    const { name, image, price, order, quantity, description } = product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <h3>Price: {price}</h3>
                <h3>Minimum Order Quantity: {order}</h3>
                <h3>Available Quantity : {quantity}</h3>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTools;