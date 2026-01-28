import { useState } from "react";


const EditProfile = ({ userData, onUpdateProfile }) => {

    const [userForm, setUserForm] = useState({
        "Full Name": userData.name,
        Email: userData.email,
        "Store Name": userData.storeName,
        Location: userData.location
    });

    const handleInputChange = (label, newValue) => {
        setUserForm(prev => ({
            ...prev,
            [label]: newValue
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        

        const updatedData = {
            name: userForm["Full Name"],
            email: userForm.Email,
            storeName: userForm["Store Name"],
            location: userForm.Location
        };
        
        console.log("Saving updated data:", updatedData);
        onUpdateProfile(updatedData);

    };

    return (
        <form onSubmit={handleSave} className="">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(userForm).map(([Label, value]) => (
                    <div key={Label}>
                        <h1 className="mb-2">{Label}</h1>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(Label, e.target.value)}
                            className="input w-full bg-[#101423] flex-1 border border-[#00FF8833] p-5 rounded-xl focus:outline-none focus:border-[#00FF88]"
                        />
                    </div>
                ))}

            </div>
            <div className="mt-10 flex items-center justify-center">
                <button type="submit" className="btn btn-accent w-1/3 rounded-2xl text-white bg-[#00C950] shadow-none hover:bg-[#00B045]">Save</button>
            </div>
        </form>
    )
}

export default EditProfile