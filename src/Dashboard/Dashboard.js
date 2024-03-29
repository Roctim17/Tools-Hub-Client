import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h3 className='text-2xl font-bold text-purple-500'>Welcome to your Dashboard</h3>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {(!admin) && <>
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    </>
                    }
                    <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                    {admin && <>
                        <li><Link to='/dashboard/users'>Make Admin</Link></li>

                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;