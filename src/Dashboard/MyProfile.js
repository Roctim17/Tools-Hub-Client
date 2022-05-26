import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';

const MyProfile = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(users)
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <tr
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;