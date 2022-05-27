import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://polar-citadel-29750.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Sure ! Are you want to delete?')
        if (proceed) {
            const url = `https://polar-citadel-29750.herokuapp.com/product/${id}`;
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
                            <td>
                                <label for="my-modal-6" className="btn btn-xs btn-error"> Remove</label>
                            </td>
                            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                            <div className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">'Sure ! Are you want to delete?'</h3>
                                    <p className="py-4"><div className="avatar">
                                        <div className="w-24 rounded-xl">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                        <td> {product.name}</td>
                                        <td>{product.price} $</td>
                                    </p>
                                    <div className="modal-action">
                                        <label for="my-modal-6" onClick={() => handleDelete(product._id)} className="btn btn-error">Yes !</label>
                                        <label for="my-modal-6" className="btn ">No</label>
                                    </div>
                                </div>
                            </div>

                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;