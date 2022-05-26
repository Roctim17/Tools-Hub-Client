import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from "react-router-dom";
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || googleUser)

    const navigate = useNavigate();

    let signInError;

    // if (user || googleUser) {
    //     console.log(googleUser);
    //     // navigate('/')
    // }
    if (googleLoading || loading || updating) {
        return <Loading></Loading>
    }

    if (error || googleError || updateError) {
        signInError = <p className="text-red-500">{error?.message || googleError?.message || updateError?.message}</p>
    }
    if (token) {
        navigate('/')
    }
    // if (user || googleUser) {
    //     navigate('/')
    // }

    const onSubmit = async (data, event) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        event.preventDefault();
        const myProfile = {

            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
        }
        axios.post('http://localhost:5000/myProfile', myProfile)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Sign up done');

                }
            })

    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'example@email.com'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}Email is pattern</span>}
                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs pb-5">
                            <input type="text" name='address' placeholder="Address" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs pb-5">
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>



                        {signInError}

                        <input className="btn w-full mas-w-xs text-white" type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already have an account? <Link className="text-primary" to="/login" >Please login</Link> </small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div >
        </div >
    );
};

export default Signup;