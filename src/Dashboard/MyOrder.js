import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h1>My order: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Product</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.customerName}</td>
                                <td>{order.date}</td>
                                <td>{order.slot}</td>
                                <td>{order.product}</td>
                                {/* <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}> <button className='btn btn-xs btn-success'>pay</button>  </Link>}
                                    {(a.price && a.paid) && <span className='text-success'>paid</span>}</td> */}
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;