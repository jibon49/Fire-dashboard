

const RecentActivity = () => {

    const recentActivity = [
        { id: 1, activity: 'AI booked for iphone 13 screen repair', time: '2 mins ago', type: 'success' },
        { id: 2, activity: 'Warm transfer to technician - Software issue', time: '5 mins ago' , type: 'accent'},
        { id: 3, activity: 'Quote provided for iPad battery replacement', time: '8 mins ago', type:'warning' },
        { id: 4, activity: 'Call dropped after 12 seconds', time: '15 mins ago', type:'error' },
        { id: 5, activity: 'Password reset requested by user', time: '20 mins ago', type:'success' },
    ]


    return (
        <div className="bg-bg-component p-5 rounded-2xl border border-gray-500 w-1/2 md:w-full">
            <h1 className="text-lg font-semibold mb-4">Recent Activity</h1>
            <div>
                <ul className="">
                    {recentActivity.map((activity) => (
                        <li className="bg-site-secondary p-3 rounded-lg mb-2" key={activity.id}>
                            <div className="inline-grid *:[grid-area:1/1]">
                                <div className={`status status-xs status-${activity.type} animate-ping`}></div>
                                <div className={`status status-xs status-${activity.type}`}></div>
                            </div> {activity.activity}
                            <p className="text-gray-400 text-xs">{activity.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentActivity