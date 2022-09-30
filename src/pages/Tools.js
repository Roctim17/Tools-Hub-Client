import Loading from '../Components/Loading'
import { useQuery } from 'react-query';
import SingleTools from '../Components/SingleTools';
import { Link } from 'react-router-dom';

const Tools = () => {
    const { data: products, isLoading } = useQuery('product', () => fetch('https://polar-citadel-29750.herokuapp.com/product')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='lg:px-36'>
            <h1 className='card-body items-center text-center py-12'><span className='card-title text-primary text-5xl font-bold'>Our Products </span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-25 m-auto">
                {
                    products.slice(0, 6).map(product => <SingleTools
                        key={product._id}
                        product={product}
                    ></SingleTools>)
                }

            </div>
            <h1 className='text-center py-10'><Link to="/product" className='btn'>See More Product</Link></h1>
        </div>
    );
};

export default Tools;