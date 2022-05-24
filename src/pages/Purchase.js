import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    return (
        <div className="flex grid-cols-1 justify-center " >
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>Price: {product.price}</h3>
                    <h3>Minimum Order Quantity: {product.order}</h3>
                    <h3>Available Quantity : {product.quantity}</h3>
                    <div className="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;