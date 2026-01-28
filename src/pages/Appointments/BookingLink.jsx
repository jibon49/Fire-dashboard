

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkOutline } from "react-icons/io5";

const BookingLink = () => {
    const bookingUrl = "https://techstore.com/book?id=store123";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(bookingUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="mt-10 w-full bg-bg-component p-8 rounded-2xl border border-border-color">
            <h1 className="mb-5 text-lg font-semibold">Booking Link</h1>
            <div className="flex gap-3 items-center">
                <input 
                    type="text" 
                    value={bookingUrl}
                    readOnly
                    className="input bg-[#101423] flex-1 border border-[#00FF8833] p-5 rounded-xl cursor-default focus:outline-none" 
                />
                <button 
                    onClick={handleCopy}
                    className="bg-[#152252] text-white btn shadow-[inset_0_0_10px_rgba(255,255,255,0.35)]  border border-white shadow-white shadow-outer text-medium rounded-xl"
                >
                    {copied ? (
                        <>
                            <IoCheckmarkOutline className="text-xl" />
                            <span className="text-sm font-medium">Copied!</span>
                        </>
                    ) : (
                        <>
                            <IoCopyOutline className="text-xl" />
                            <span className="text-sm font-medium">Copy Link</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default BookingLink