import { IoCallOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const CardSection = () => {

    const cards = [
        {title:"Total Calls Today", value:127, icon:<IoCallOutline />, trend:"+12%", bgColor:["#2B7FFF", "#00B8DB"] },
        {title: "All Handled Calls", value:98, icon:<RiRobot2Line />, trend:"+77%", bgColor:["#AD46FF","#F6339A"] },
        {title: "Warm Transfers", value:23, icon:<FaArrowRightArrowLeft />, trend:"+18%", bgColor:["#FF6900", "#FB2C36"] },
        {title: "Appointments Booked", value:34, icon:<CiCalendar />, trend:"+8%" , bgColor:["#00C950", "#00BC7D"]},
        {title: "Missed/Failed Calls", value:5, icon:<IoMdCloseCircleOutline />, trend:"-3%", bgColor:["#FB2C36", "#FF2056"] },
        {title: "Average Call Duration", value:"3:42", icon:<FaRegClock />, trend:"+15%", bgColor:["#615FFF","#2B7FFF"] },
    ]


  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 mb-10">
            {cards.map((card, index) => (
                <div key={index} className="bg-[#111B39] rounded-lg shadow p-4 flex justify-between space-x-4">
                    
                    <div>
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <p className="text-2xl">{card.value}</p>
                        <p className={`text-sm ${card.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{card.trend}</p>
                    </div>
                    <div className="text-xl rounded-2xl h-12 w-12 flex items-center justify-center" style={{background: `linear-gradient(135deg, ${card.bgColor[0]}, ${card.bgColor[1]})`}}>{card.icon}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardSection