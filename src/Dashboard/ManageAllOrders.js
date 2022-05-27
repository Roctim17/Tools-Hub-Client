import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://polar-citadel-29750.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        // const proceed = window.confirm('Sure ! Are you want to delete?')

        const url = `https://polar-citadel-29750.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(product => product._id !== id)
                setOrders(remaining);

            })

    }


    return (
        <div>
            <h1>All Orders {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Order Number</th>
                            <th>Customer Name</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Product Name</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}
                            > <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.orderQuantity}</td>
                                <td>{order.address}</td>
                                <td>{order.product}</td>
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-error'>unpaid</button>  </Link>}
                                    {(order.price && order.paid) && <span className='text-success'>paid</span>}
                                    {(order.price && !order.paid) && <label for="my-modal-6" className="btn btn-xs btn-error"> Remove</label>}

                                </td>
                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">'Sure ! Are you want to delete?'</h3>
                                        <p className="py-1"> Name: {order.product} </p>
                                        <p className="py-1">   Quantity: {order.orderQuantity}</p>
                                        <p className="py-1">    Address: {order.address}</p>
                                        <p className="py-1">     Price: {order.price} $</p>

                                        <div className="modal-action">
                                            <label for="my-modal-6" onClick={() => handleDelete(order._id)} className="btn btn-error">Yes !</label>
                                            <label for="my-modal-6" className="btn ">No</label>
                                        </div>
                                    </div>
                                </div>
                            </tr>)

                        }
                        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label for="my-modal-6" onClick={(order) => handleDelete(order._id)} className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>




                    </tbody>
                </table>





            </div>
        </div >
    );
};

export default ManageAllOrders;