
import { Link } from 'react-router-dom'
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RiHome4Fill } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {


    const NavigationOptions = [
        { name: "Dashboard Overview", icon: <RiHome4Fill className='text-2xl' />, path: "/" },
        { name: "Call Logs", icon: <IoCallOutline className='text-2xl' />, path: "/call-logs" },
        { name: "Appointments", icon: <CiCalendar className='text-2xl' />, path: "/appointments" },
        { name: "Settings", icon: <IoSettingsOutline className='text-2xl' />, path: "/settings" },
    ];

    return (
        <div className=" min-h-screen bg-primary text-white border-r border-gray-700">
            <div className="p-1">
                {/* Logo */}
                <div className="flex items-center mx-auto justify-center mt-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-to-b from-[#00FF88] to-[#00D4FF] rounded-lg flex items-center justify-center">
                        <HiOutlineLightningBolt className="text-3xl text-black font-bold" />
                    </div>
                </div>

                {/* Navigation */}
                <ul className="menu text-base font-medium space-y-4">
                    {NavigationOptions.map((options) => (
                        <li key={options.name}>
                            <NavLink
                                to={options.path}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
          ${isActive
                                        ? " bg-[#152252] shadow-[inset_0_0_10px_rgba(255,255,255,0.35)]  border border-white shadow-white shadow-outer drop-shadow-2xl drop-shadow-blue-400"
                                        : " hover:text-white hover:bg-white/10"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`text-2xl transition-colors duration-300 ${isActive
                                                    ? "text-white"
                                                    : "text-gray-400 group-hover:text-white"
                                                }`}
                                        >
                                            {options.icon}
                                        </span>
                                        <span className="font-medium">
                                            {options.name}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>




                {/* Logout */}
                <div className="absolute bottom-4 left-4">
                    <button className="group flex items-center gap-3 p-3 text-black rounded-full
            hover:border hover:border-black transition-all duration-200">
                        <TbLogout className='text-3xl'/>
                        <span className="text-[#FF1100] text-base">Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar