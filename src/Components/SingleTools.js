import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleTools.css'

const SingleTools = ({ product }) => {
    const { _id, name, image, price, order, quantity, description } = product;
    const navigate = useNavigate();

    const navigateToProduct = id => {
        console.log(id)
        navigate(`/purchase/${id}`)
    }


    return (
        <div className="single-tools pb-5">
            <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10" >
                    <img src={image} alt="Shoes" className="rounded-xl" width='300px' height='300px' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 80)}</p>
                    <h3>Price: {price}$</h3>
                    <h3>Minimum Order Quantity: {order}</h3>
                    <h3>Available Quantity : {quantity}</h3>
                    <div className="card-actions">
                        <button disabled={quantity < 10}
                            onClick={() => navigateToProduct(_id)}
                            className="btn btn-primary">Buy Now</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleTools;