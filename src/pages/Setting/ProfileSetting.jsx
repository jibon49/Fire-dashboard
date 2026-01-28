

const ProfileSetting = () => {

    const userData = {
        name: "John Doe",
        email: "jane@gmail.com",
        storeName: "Tech Ubreakfix Store",
        location: "123 Main Street, New York, NY 10001"
    }

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
                    <button className="bg-[#152252] py-1 px-4 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.35)]  border border-white shadow-white shadow-outer text-xs text-medium rounded-xl drop-shadow-2xl drop-shadow-blue-400">Edit Profile</button>
                </div>
            </div>
            <div>
                <div className="flex items-center  mt-10 mb-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            </thead>
                            <tbody className="text-xl">
                                <tr className="">
                                    <td className=" border-b border-border-color">Name:</td>
                                    <td className=" border-b border-border-color">{userData.name}</td>
                                </tr>

                                <tr className="border-b border-border-color">
                                    <td className=" border-b border-border-color">Email:</td>
                                    <td className=" border-b border-border-color">{userData.email}</td>
                                </tr>

                                <tr className="border-b border-border-color">
                                    <td className=" border-b border-border-color">Store Name:</td>
                                    <td className=" border-b border-border-color">{userData.storeName}</td>
                                </tr>

                                <tr className="border-b border-border-color">
                                    <td className="">Location:</td>
                                    <td className="">{userData.location}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting