import React, { useEffect, useState } from 'react';
import SingleTools from '../Components/SingleTools';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('tools.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Our product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-50 m-auto">
                {
                    products.map(product => <SingleTools
                        key={product.id}
                        product={product}
                    ></SingleTools>)
                }

            </div>

        </div>
    );
};

export default Tools;