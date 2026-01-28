import axios from "axios"
import { useEffect, useState } from "react"
import Pagination from "../Shared/Pagination/Pagination"


const ServiceTable = () => {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6

    useEffect(()=>{
       axios.get('/serviceData.json')
       .then(response => setData(response.data))
    },[])

    const totalPages = Math.ceil(data.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

const columnLabels = [
    "Client Name",
    "Client Phone",
    "Client Email",
    "Device",
    "Repair Type",
    "Date",
    "Slot No",
    "Start Time"
]


  return (
    <div className="mt-6 sm:mt-10">
        <div className="overflow-x-auto rounded-box border text-white border-border-color bg-bg-component">
  <table className="table border-border-color w-full">
    <thead>
       <tr className="text-white">
    {columnLabels.map((label,index)=>(
        <th key={index} className="border-b border-border-color text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">{label}</th>
    ))}

  </tr>
    </thead>
    <tbody className="divide-y divide-[#152252]">
        {currentData.map((item,index)=>(
            <tr key={index} className="hover:bg-site-secondary">
                <td className="text-[#51A2FF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.clientName}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.clientPhone}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4">{item.clientEmail}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.device}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.repairType}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.date}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 text-center">{item.slotNo}</td>
                <td className="text-[#CFCFCF] border-y border-border-color text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">{item.startTime}</td>
            </tr>
        ))}
    </tbody>
  </table>
</div>
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ServiceTable