import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://polar-citadel-29750.herokuapp.com/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
        }
    }, [user, navigate])
    const handleDelete = id => {
        // const proceed = window.confirm('Sure ! Are you want to delete?')
        // if (proceed) {
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
        // }
    }
    return (
        <div>
            <h1>My order: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
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
                                <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-success'>pay</button>  </Link>}
                                    {(order.price && order.paid) && <span className='text-success'>paid</span>}
                                    {(order.price && !order.paid) && <label for="my-modal-6" className="btn btn-xs btn-error"> Cancel</label>}
                                </td>

                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">'Sure ! Are you want to delete?'</h3>
                                        <p className="py-4"></p>
                                        <div className="modal-action">
                                            <label for="my-modal-6" onClick={() => handleDelete(order._id)} className="btn btn-error">Yes !</label>
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

export default MyOrder;