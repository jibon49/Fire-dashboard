

const RecentActivity = () => {

    const recentActivity = [
        { id: 1, activity: 'AI booked for iphone 13 screen repair', time: '2 mins ago', type: 'success' },
        { id: 2, activity: 'Warm transfer to technician - Software issue', time: '5 mins ago' , type: 'accent'},
        { id: 3, activity: 'Quote provided for iPad battery replacement', time: '8 mins ago', type:'warning' },
        { id: 4, activity: 'Call dropped after 12 seconds', time: '15 mins ago', type:'error' },
        { id: 5, activity: 'Password reset requested by user', time: '20 mins ago', type:'success' },
    ]


    return (
        <div className="w-full lg:w-1/2 bg-bg-component p-4 sm:p-5 rounded-2xl border border-gray-500">
            <h1 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Recent Activity</h1>
            <div>
                <ul className="space-y-2">
                    {recentActivity.map((activity) => (
                        <li className="bg-site-secondary p-2 sm:p-3 rounded-lg" key={activity.id}>
                            <div className="flex items-start gap-2">
                                <div className="inline-grid *:[grid-area:1/1] mt-1 shrink-0">
                                    <div className={`status status-xs status-${activity.type} animate-ping`}></div>
                                    <div className={`status status-xs status-${activity.type}`}></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm sm:text-base wrap-break-words">{activity.activity}</p>
                                    <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentActivity