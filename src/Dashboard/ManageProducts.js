import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Sure ! Are you want to delete?')
        if (proceed) {
            const url = `https://limitless-coast-93493.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);

                })
        }
    }


    return (
        <div>
            <h2 className="text-2xl">All Users: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Minimum Order </th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => <tr key={product._id}>
                            <td><div className="avatar">
                                <div className="w-24 rounded-xl">
                                    <img src={product.image} alt="" />
                                </div>
                            </div></td>
                            <td> {product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.order}</td>
                            <td><button onClick={handleDelete} className="btn btn-xs btn-error">Remove</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;