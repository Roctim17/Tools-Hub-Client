import React, { useEffect, useState } from 'react';
import SingleTools from '../Components/SingleTools';
// import Purchase from './Purchase';

const Tools = () => {
    const [products, setProducts] = useState([]);
    const [tools, setTools] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Our product</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-50 m-auto">
                {
                    products.map(product => <SingleTools
                        key={product._id}
                        product={product}
                        setTools={setTools}
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