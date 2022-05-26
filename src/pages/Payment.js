import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../Components/CheckoutFrom';
import Loading from '../Components/Loading';

const stripePromise = loadStripe('pk_test_51L1dz5BZJhaULcBPUYZqLvE57rCZccpbpHRlj2HMZry8jPYlh9AZ0fqZ15ptESAQMRoALAm5IweTMJGeisv3RTU900Mu5lypgg');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='m-auto'>
            <div className="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {order.customerName}</p>
                    <h2 className="card-title">Please Pay for {order.product}</h2>
                    <p>Your Order Quantity: <span className='text-orange-700'>{order.orderQuantity}</span> at {order.address}</p>
                    <p>Please pay: {order.price}$</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;