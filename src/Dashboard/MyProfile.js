
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth)

    const { displayName, email, phoneNumber, photoURL } = user;
    console.log(user)
    console.log(user.displayName)
    return (
        <div className='pt-10 '>
            <div className="card w-96 bg-base-100 shadow-xl pt-10 ">
                <div className="avatar online m-auto ">
                    <div className="w-24 rounded-full">
                        <img src={photoURL || ('https://api.lorem.space/image/face?hash=28212')} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;