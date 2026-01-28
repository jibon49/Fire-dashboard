

const ProfileInfo = ({ userData }) => {


  return (
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
  )
}

export default ProfileInfo