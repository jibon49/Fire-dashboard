import React, { useState } from 'react'
import SearchAndFilter from './SearchAndFilter'
import CallList from './CallList'
import CallDetails from './CallDetails'

const CallLogs = () => {

  const [selectedCall, setSelectedCall] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Type");
  const [selectedIssue, setSelectedIssue] = useState("All Issues");
  const [selectedDays, setSelectedDays] = useState("Today");

  const callListData = [
    {
      id: 1,
      caller: "+1 (555) 345-6789",
      time: "2025-12-16  09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      action: "Quote Provided",
      type: "Screen",
      conversationTranscript: [
        {
          role: "ai",
          name: "AI Assistant",
          message: "Thank you for calling UBreakiFix! How can I help you today?"
        },
        {
          role: "customer",
          name: "Customer",
          message: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?"
        },
        {
          role: "ai",
          name: "AI Assistant",
          message: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?"
        },
        {
          role: "customer",
          name: "Customer",
          message: "Yes, please! When are you available?"
        },
        {
          role: "ai",
          name: "AI Assistant",
          message: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?"
        }
      ]


    },
    {
      id: 2,
      caller: "+1 (555) 345-6789",
      time: "2025-12-16  09:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      action: "Warm Transfer",
      type: "Battery"
    },
    {
      id: 3,
      caller: "+1 (555) 345-6789",
      time: "2025-12-16  09:42 AM",
      duration: "5:23",
      status: "Appointment",
      action: "AI Booked",
      type: "Software"
    },
    {
      id: 4,
      caller: "+1 (555) 345-6789",
      time: "2025-12-16  09:42 AM",
      duration: "0:20",
      status: "Dropped",
      action: "Call Dropped",
      type: "Unknown"
    },
    {
      id: 5,
      caller: "+1 (555) 345-6789",
      time: "2025-12-16  09:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      action: "Quote Provided",
      type: "Screen",
      conversationTranscript: [
        {
          role: "ai",
          name: "AI Assistant",
          message: "Thank you for calling UBreakiFix! How can I help you today?"
        },
        {
          role: "customer",
          name: "Customer",
          message: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?"
        },
        {
          role: "ai",
          name: "AI Assistant",
          message: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?"
        },
        {
          role: "customer",
          name: "Customer",
          message: "Yes, please! When are you available?"
        },
        {
          role: "ai",
          name: "AI Assistant",
          message: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?"
        }
      ]
    }

  ]

  const statusColors = {
    "AI Resolved": "#00C950",
    "Warm Transfer": "#FFAA00",
    "Appointment": "#2B7FFF",
    "Dropped": "#FF3B30"
  }


  const filteredCallListData = callListData.filter((call) => {

    const matchesSearch = searchTerm === "" || 
      call.caller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.action.toLowerCase().includes(searchTerm.toLowerCase());


    const matchesType = selectedType === "All Type" || call.status === selectedType;


    const matchesIssue = selectedIssue === "All Issues" || call.type === selectedIssue;

    return matchesSearch && matchesType && matchesIssue;
  });

  return (
    <div>
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedIssue={selectedIssue}
        setSelectedIssue={setSelectedIssue}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
      />
      <div className="flex flex-col lg:flex-row gap-5 mt-5">
        <CallList 
          callListData={filteredCallListData} 
          statusColors={statusColors}
          selectedCall={selectedCall}
          onSelectCall={setSelectedCall}
        />
        <CallDetails 
          selectedCall={selectedCall} 
          statusColors={statusColors}
        />
      </div>
    </div>
  )
}

export default CallLogs