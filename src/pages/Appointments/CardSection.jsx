
import { CiCalendar } from "react-icons/ci";
import { LuCircleCheckBig } from "react-icons/lu";
import { IoAlertCircleOutline } from "react-icons/io5";

const CardSection = () => {

    const cardsData = [
        { title: "Total Booked", value: 127, icon: <CiCalendar className="text-xl text-[#51A2FF]" />, trend: "+8% this week" },
        { title: "All Booked", value: 28, icon: <LuCircleCheckBig className="text-xl text-[#05DF72]" />, trend: "82% of total" },
        { title: "Pending", value: 12, icon: <IoAlertCircleOutline className="text-xl text-[#FDC700]" />, trend: "Awaiting confirmation" },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsData.map((card, index) => (
                <div className="bg-bg-component items-center gap-3 p-4 rounded-2xl" key={index}>
                    <div className="flex items-center gap-3">
                        {card.icon}
                        <p className="text-text-primary">{card.title}</p>
                    </div>
                    <h1 className="text-2xl mt-2">{card.value}</h1>
                    <p className={`text-sm mt-2 ${card.trend.includes("+") ? "text-green-500" : "text-text-primary"}`}>{card.trend}</p>
                </div>

            ))}
        </div>
    )
}

export default CardSection