
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import ProfileUpdateModal from './ProfileUpdateModal';
import Loading from '../Components/Loading'

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(false);
    const {
        isLoading,
        data: currentUser,
        refetch,
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
    if (isLoading) {
        return <Loading></Loading>
    }

    const { displayName, email } = user;
    console.log(currentUser)
    return (
        <div className='pt-10 '>
            <div className="card w-96 bg-base-100 shadow-xl pt-10 ">
                <div className="avatar online m-auto ">
                    <div className="w-24 rounded-full">
                        <img src={currentUser.image || ('https://api.lorem.space/image/face?hash=28212')} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <p>{currentUser.phone ? currentUser.phone : 12345678}</p>
                    <p>{currentUser.address
                        ? currentUser.address
                        : "Please update Address"}</p>
                    <label onClick={() => setOpenModal(true)}
                        htmlFor="update-profile" class="btn btn-outline btn-primary">Update Profile</label>
                </div>
            </div>
            {openModal && (
                <ProfileUpdateModal refetch={refetch} setOpenModal={setOpenModal} />
            )}
        </div>
    );
};

export default MyProfile;