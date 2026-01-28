import { FiPlayCircle } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

const CallDetails = ({ selectedCall, statusColors }) => {
    
    if (!selectedCall) {
        return (
            <div className="w-full lg:w-1/2 bg-bg-component rounded-2xl border border-border-color mt-5 flex items-center justify-center min-h-100">
                <p className="text-text-primary text-center p-4 sm:p-8">Select a call to view details</p>
            </div>
        )
    }
    
    return (
        <div className="w-full lg:w-1/2 bg-bg-component rounded-2xl border border-border-color mt-5">
            <h1 className="p-4 sm:p-8 border-b border-border-color text-lg sm:text-xl">Call Details</h1>

            <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                    <h1 className="text-xs sm:text-sm text-text-primary mb-1">Phone Number</h1>
                    <p className="text-sm sm:text-base">{selectedCall.caller}</p>
                </div>
                <div>
                    <h1 className="text-xs sm:text-sm text-text-primary mb-1">Duration</h1>
                    <p className="text-sm sm:text-base">{selectedCall.duration}</p>
                </div>
                <div>
                    <h1 className="text-xs sm:text-sm text-text-primary mb-1">Date and Time</h1>
                    <p className="text-sm sm:text-base wrap-break-words">{selectedCall.time}</p>
                </div>
                <div>
                    <h1 className="text-xs sm:text-sm text-text-primary mb-1">Issue Type</h1>
                    <p className="text-sm sm:text-base">{selectedCall.type}</p>
                </div>
                <div className="sm:col-span-2">
                    <h1 className="text-xs sm:text-sm text-text-primary mb-1">Status</h1>
                    <p className="inline-block text-center px-3 py-1 rounded-lg border text-xs sm:text-sm" style={{ background: `linear-gradient(135deg, ${statusColors[selectedCall.status]}33, ${statusColors[selectedCall.status]}33)`, borderColor: `${statusColors[selectedCall.status]}4D`, color: `${statusColors[selectedCall.status]}` }}>{selectedCall.status}</p>
                </div>
            </div>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <h1 className="text-xs sm:text-sm text-text-primary mb-1">Outcome</h1>
                <p className="text-sm sm:text-base">{selectedCall.action}</p>
            </div>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-center">
                <p className="bg-linear-to-r from-[#AD46FF33] to-[#F6339A33] rounded-xl p-2.5 sm:p-3.5 text-[#AD46FF] cursor-pointer hover:opacity-80 transition-opacity text-sm sm:text-base">
                    <span><FiPlayCircle size={20} className="inline-block mr-2 sm:mr-2 sm:w-6 sm:h-6" /></span> Play Audio Recording
                </p>
            </div>
            <div className="px-4 sm:px-5 pb-3 sm:pb-5">
                <h1 className="text-sm sm:text-base"> <IoDocumentTextOutline className="inline-block text-lg sm:text-xl text-[#51A2FF] mr-2" /> Conversation Transcript</h1>
            </div>
            <div className="p-3 sm:p-4 bg-[#1D293D80] border-t border-border-color space-y-3 sm:space-y-4 mx-3 sm:mx-5 mb-5 rounded-xl max-h-100 overflow-y-auto">
                {selectedCall.conversationTranscript && selectedCall.conversationTranscript.length > 0 ? (
                    selectedCall.conversationTranscript.map((entry, index) => (
                        <div key={index} className="wrap-break-words">
                            <h2 className={entry.name== "AI Assistant" ? "font-semibold text-[#05DF72] text-sm sm:text-base" : "font-semibold text-[#51A2FF] text-sm sm:text-base"}>{entry.name}:</h2>
                            <p className="text-text-primary text-xs sm:text-sm mt-1">{entry.message}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-text-primary text-center text-sm">No transcript available</p>
                )}
            </div>
        </div>
    )
}

export default CallDetails