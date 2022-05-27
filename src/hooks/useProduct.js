import { useEffect, useState } from "react";



const useProduct = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://polar-citadel-29750.herokuapp.com/product/${id}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return [product, setProduct]
}
export default useProduct;