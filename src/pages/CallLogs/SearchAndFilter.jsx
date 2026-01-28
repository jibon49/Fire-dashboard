import { useState } from "react";
import ChoiceButton from "../Shared/ChoiceButton/ChoiceButton";

const SearchAndFilter = () => {

    const filterType = ["All Type", "All Resolved", "Warm Transfer", "Appointment", "Dropped"];

    const filterIssues = ["All Issues", "Screen", "Battery", "Software", "Unknown"];

    const filterDays = ["Today", "Last 7 Days", "Last 30 Days", "Last 90 Days"];

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("All Type");
    const [selectedIssue, setSelectedIssue] = useState("All Issues");
    const [selectedDays, setSelectedDays] = useState("Today");


    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
            <div className="w-full lg:w-1/2">
                <label className="input text-[#62748E] bg-bg-component rounded-lg flex items-center gap-2 px-3 py-2 w-full h-12 border border-border-color focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search by phone number, issue type..." onChange={(e) => setSearchTerm(e.target.value)} />
                </label>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4">
                <ChoiceButton options={filterType.map(type => ({ label: type, value: type }))} selectedOption={selectedType} onSelect={(value) => setSelectedType(value)} />
                <ChoiceButton options={filterIssues.map(issue => ({ label: issue, value: issue }))} selectedOption={selectedIssue} onSelect={(value) => setSelectedIssue(value)} />
                <ChoiceButton options={filterDays.map(day => ({ label: day, value: day }))} selectedOption={selectedDays} onSelect={(value) => setSelectedDays(value)} />
            </div>
        </div>
    )
}

export default SearchAndFilter