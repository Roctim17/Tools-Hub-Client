import Loading from '../Components/Loading'
import { useQuery } from 'react-query';
import SingleTools from '../Components/SingleTools';
// import Purchase from './Purchase';

const Tools = () => {
    const { data: products, isLoading } = useQuery('product', () => fetch('http://localhost:5000/product')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Our product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-50 m-auto">
                {
                    products.map(product => <SingleTools
                        key={product._id}
                        product={product}
                    ></SingleTools>)
                }

            </div>
            {/* {tools && <Purchase
                tools={tools}

            ></Purchase>} */}

        </div>
    );
};

export default Tools;