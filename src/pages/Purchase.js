import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useProduct from '../hooks/useProduct';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [product] = useProduct(id);

    const { name, image, price, quantity, order, description } = product;
    const handleOrder = event => {
        event.preventDefault();
        const order = {
            productId: id,
            product: name,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })

    }

    return (
        <div className="flex grid-cols-1 justify-center " >
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" width='300px' height="300px" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3>Price: {price}</h3>
                    <h3>Minimum Order Quantity: {order}</h3>
                    <h3>Available Quantity : {quantity}</h3>

                </div>
                <h1 className='text-center font-bold text-2xl text-primary'>Please Fill the Order Form</h1>
                <form action="" onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                    <input type="text" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="submit" value='Order' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>

        </div>
    );
};

export default Purchase;