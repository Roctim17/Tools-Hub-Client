import { useEffect, useState } from "react";



const useProduct = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return [product]
}
export default useProduct;