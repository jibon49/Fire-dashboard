
const TopRepairRequest = () => {

    const topRepairRequestData = [
        { id: 1, issue: 'Screen Repair', count: 156 },
        { id: 2, issue: 'Battery Replacement', count: 89 },
        { id: 3, issue: 'Black Glass Repair', count: 67 },
        { id: 4, issue: 'Software Issue', count: 45 },
    ]


  return (
    <div className="w-full lg:w-1/2 bg-bg-component p-4 sm:p-5 rounded-2xl border border-gray-500">
        <h1 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Top Repair Requests</h1>
        <div>
            <ul className="space-y-2">
                {topRepairRequestData.map((request) => (
                    <li key={request.id} className="bg-site-secondary p-2 sm:p-3 rounded-lg">
                        <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-2 mb-2">
                            <span className="text-sm sm:text-base font-medium">{request.issue}</span>
                            <span className="text-[#C0CCDD] text-xs sm:text-sm whitespace-nowrap">{request.count} requests</span>
                        </div>
                        <progress className="progress progress-info w-full h-2" value={request.count} max="200"></progress>
                        
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TopRepairRequest