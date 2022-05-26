import React from 'react';
import contact from '../assets/image/contact.jpg';

const Contact = () => {
    return (
        <section style={{
            background: `url(${contact})`
        }} className=''>
            <div className="text-center py-20">
                <h3 className='text-primary text-3xl font-bold'>Contact Us</h3>
                <h1 className='text-white text-4xl font-bold'>Stay connected with us</h1>
                <div className="my-5">
                    <div className="form-control   w-9/12  m-auto">
                        <label className="">
                            <input type="text" placeholder="Email Address" className="input input-bordered w-3/4 my-3" />
                        </label>

                        <label className="">
                            <input type="text" placeholder="Subject" className="input input-bordered w-3/4 my-3 " />
                        </label>

                        <label className="">
                            <textarea type="text" placeholder="Your message" className="input input-bordered w-3/4 my-3" />
                        </label>
                    </div>

                </div>
                <button className='btn btn-primary'>Contact</button>
            </div>

        </section>
    );
};

export default Contact;