import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


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

export default ManageAllOrders;