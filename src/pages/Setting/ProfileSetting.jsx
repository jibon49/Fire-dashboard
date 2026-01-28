import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import EditProfile from "./EditProfile";


const ProfileSetting = () => {

    const [editActive, setEditActive] = useState(true);

    const [userData, setUserData] = useState({
        name: "Jane D.",
        email: "jane@gmail.com",
        storeName: "Tech Ubreakfix Store",
        location: "123 Main Street, New York, NY 10001"
    });

    const handleUpdateProfile = (updatedData) => {
        setUserData(updatedData);
        setEditActive(true); // Switch back to view mode after saving
    };



    return (
        <div className="">
            <h1 className="mb-4 mt-5 text-xl">Profile Image</h1>
            <div className="flex items-end">
                <div className="avatar">
                    <div className="ring-offset-base-100 w-24 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <button onClick={() => setEditActive(!editActive)} className="bg-[#152252] py-1 px-4 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.35)]  border border-white shadow-white shadow-outer text-xs text-medium rounded-xl drop-shadow-2xl drop-shadow-blue-400 hover:cursor-pointer">Edit Profile</button>
                </div>
            </div>
            <div>
                {editActive ? <ProfileInfo userData={userData}></ProfileInfo>: <EditProfile userData={userData} onUpdateProfile={handleUpdateProfile}></EditProfile>}
            </div>
        </div>
    )
}

export default ProfileSetting