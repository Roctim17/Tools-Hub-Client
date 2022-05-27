import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useProduct from '../hooks/useProduct';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams()
    const [product, setProduct] = useProduct(id);

    const { name, image, price, quantity, order, description } = product;

    const handleOrder = event => {

        event.preventDefault();
        const previousQuantity = product.quantity;
        const previousQuantityNumber = parseInt(previousQuantity);
        const quantityNew = event.target.orderQuantity.value;
        const quantityNumber = parseInt(quantityNew);
        console.log(previousQuantity)
        console.log(previousQuantity)
        console.log(quantityNumber)
        console.log(previousQuantityNumber)
        console.log(quantityNumber)
        console.log(previousQuantityNumber - quantityNumber)
        if (quantityNew <= 0 || quantityNew == null) {
            alert("Please add valid number")
        }
        if (quantityNew > 0) {
            const quantity = previousQuantityNumber - quantityNumber;
            const updateQuantity = { quantity };
            console.log(updateQuantity)
            const url = `https://polar-citadel-29750.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    setProduct(data);
                    console.log(data, 'T')
                })
        }
        const order = {
            productId: id,
            product: name,
            customer: user.email,
            customerName: user.displayName,
            orderQuantity: event.target.orderQuantity.value,
            phone: event.target.phone.value,
            address: event.target.address.value,
            price: price,
        }
        axios.post('https://polar-citadel-29750.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is Pleased!!!');
                    event.target.reset();
                }
            })



    }

    console.log('this', quantity)

    return (
        <div className="flex grid-cols-1 justify-center " >
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" width='300px' height="300px" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <h3>Price: {price}$</h3>
                    <h3>Minimum Order Quantity: {order}</h3>
                    <h3>Available Quantity : {quantity}</h3>

                </div>
                <h1 className='text-center font-bold text-2xl text-primary'>Please Fill the Order Form</h1>
                <form action="" onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                    <input type="number" min="10" step="1" max="50" name='orderQuantity' placeholder="Your Order Quantity" className="input input-bordered input-primary w-full max-w-xs" required />
                    <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" required />
                    <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" required />
                    {/* <input type="number" name='price' value={newPrice} className="input input-bordered input-primary w-full max-w-xs" /> */}
                    <input type="submit" value='Order' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>

        </div>
    );
};

export default Purchase;