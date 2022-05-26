import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='img-404 p-5'>
            <img src="https://i.ibb.co/Vv7w532/404.jpg" alt="" />
            <br />
            <h3 className='btn-Home'><Link to='/' >Back To Home</Link></h3>
        </div>
    );
};

export default NotFound;