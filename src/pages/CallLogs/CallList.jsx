import { IoCallOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { LuCircleCheckBig } from "react-icons/lu";




const CallList = ({ callListData, statusColors, selectedCall, onSelectCall }) => {

    return (
        <div className="w-full lg:w-1/2 bg-bg-component rounded-2xl border border-border-color mt-5">
            <h1 className=" p-8 border-b border-border-color text-xl">Call List</h1>

            {callListData.map((call) => (
                <div 
                    className={`mt-5 p-2 sm:p-5 pt-4 mx-auto items-center border-border-color cursor-pointer transition-all hover:bg-site-secondary ${
                        selectedCall?.id === call.id ? 'bg-site-secondary border-l-4 border-l-[#2B7FFF]' : ''
                    }`} 
                    key={call.id}
                    onClick={() => onSelectCall(call)}
                >
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <div>
                                <div className="text-xl rounded-2xl h-10 w-10 flex items-center justify-center" style={{ background: `linear-gradient(135deg, #2B7FFF, #00B8DB)` }}><IoCallOutline className="text-2xl text-white" /></div>
                            </div>
                            <div>
                                <h1>{call.caller}</h1>
                                <p className="text-xs text-text-primary">{call.time}</p>
                            </div>
                        </div>
                        <div>
                            <p className="bg-linear-to-r from-[#00C95033] to-[#00BC7D33] px-2 rounded-lg border border-[#00C9504D] text-[#05DF72]" style={{ background: `linear-gradient(135deg, ${statusColors[call.status]}33, ${statusColors[call.status]}33)`, borderColor: `${statusColors[call.status]}4D`, color: `${statusColors[call.status]}` }}>{call.status}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2 items-center">
                        <p className="flex items-center gap-1">
                            <IoTimeOutline className="text-lg" />
                            <span className="ml-1 text-text-primary">{call.duration}</span>
                        </p>
                        <p className=" text-sm text-text-primary">
                            <LuCircleCheckBig className="inline-block mb-1" /> <span className="ml-1">{call.action}</span>
                        </p>
                        <p className="bg-[#2B7FFF33] px-3 rounded-lg text-[#51A2FF] ml-2">{call.type}</p>
                    </div>
                </div>
            ))}



        </div>
    )
}

export default CallList