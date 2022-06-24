import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useQuery } from 'react-query';

const Header = () => {
    const {

        data: currentUser,

    } = useQuery("users", () =>
        fetch(
            `https://polar-citadel-29750.herokuapp.com/current-user?email=${user?.email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        ).then((res) => res.json())
    );
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/product">Product </Link></li>
        {/* <li><Link to="/blog">blog</Link></li> */}
        {/* <li><Link to="/portfolio">My Portfolio</Link></li> */}
        <li><Link to="/contact">Contact Us </Link> </li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost pt-5" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>
        <li>{user ? <div onClick={logout} className="avatar online">
            <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
                <img src={currentUser.image || ('https://api.lorem.space/image/face?hash=28212')} alt='' />
            </div>
        </div> : ''}</li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Tools Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;