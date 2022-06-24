import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";




const ProfileUpdateModal = ({ setOpenModal, refetch }) => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const handleSubmit = (event) => {
        event.preventDefault();
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const image = event.target.image.value;

        const data = { phone, address, image };
        if ((phone && address) || image) {
            fetch(
                `https://polar-citadel-29750.herokuapp.com/current-user/${email}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        refetch();
                        toast.success("Profile Updated Successfuly");
                        setOpenModal(false);
                        event.target.reset();
                    }
                });
        }
        else {
            toast.error('Please Fill Up Full Form', { id: 25 })
        }
    };
    return (
        <div>
            <input type="checkbox" id="update-profile" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-4/12 mt-10 w-10/12 mx-auto relative">
                    <label
                        htmlFor="update-profile"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-xl font-koulen text-center text-primary font-bold mb-4">
                        Update Profile
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col font-koulen space-y-2">
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                className="input input-bordered w-full bg-accent "
                            />


                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="input input-bordered w-full bg-accent"
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="image url"
                                className="input input-bordered w-full bg-accent"
                            />




                            <input
                                type="submit"
                                className="btn btn-primary "
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;