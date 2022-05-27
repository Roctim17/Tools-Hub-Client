import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://polar-citadel-29750.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset()
            })

    };
    return (
        <div>
            <div className="flex h-screen justify-center items-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add A Product</h2>
                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-3 ' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" placeholder="name" {...register("name", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="description" {...register("description")} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="number" placeholder="price " {...register("price")} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="number" min="10" step="1" max="10" placeholder="order " {...register("order")} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="number" placeholder="quantity " {...register("quantity")} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="image Url" {...register("image")} className="input input-bordered input-primary w-full max-w-xs" />
                            <input type="submit" value='Add Product' className="btn btn-bordered btn-primary w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;