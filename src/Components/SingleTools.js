import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({ product }) => {
    const { _id, name, image, price, order, quantity, description } = product;
    const navigate = useNavigate();

    const navigateToProduct = id => {
        console.log(id)
        navigate(`/purchase/${id}`)
    }


    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h3>Price: {price}</h3>
                <h3>Minimum Order Quantity: {order}</h3>
                <h3>Available Quantity : {quantity}</h3>
                <div className="card-actions">
                    <button disabled={quantity < 100}
                        onClick={() => navigateToProduct(_id)}
                        className="btn btn-primary">Buy Now</button>

                </div>
            </div>

        </div>
    );
};

export default SingleTools;