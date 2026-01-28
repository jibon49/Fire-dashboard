import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MdOutlineArrowDropDown } from "react-icons/md";
import ChoiceButton from '../../Shared/ChoiceButton/ChoiceButton';

const ChartSection = () => {

    const dataWeekly = [
        {
            name: 'Mon',
            uv: 48,
            
        },
        {
            name: 'Tue',
            uv: 62,
        },
        {
            name: 'Wed',
            uv: 60,
        },
        {
            name: 'Thu',
            uv: 70,
        },
        {
            name: 'Fri',
            uv: 87,
        },
        {
            name: 'Sat',
            uv: 98,
        },
        {
            name: 'Sun',
            uv: 65,
        },
    ];

    const dataMonthly = [
        { name: 'Week 1', uv: 2400},
        { name: 'Week 2', uv: 1398 },
        { name: 'Week 3', uv: 9800 },
        { name: 'Week 4', uv: 3908},
    ]

    const filterOptions = [
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
    ];

    const [activeOption, setActiveOption] = useState('weekly');

    const handleOption = (value) => {
        setActiveOption(value);
    }


    return (
        <div className='border rounded-2xl bg-bg-component h-106.5 p-5 border-gray-500 mb-10'>
            <div className="flex justify-between items-center mb-4 mx-8">
                <div>
                    <h1 className='text-xl'>Call Trends- This Week</h1>
                    <p className='text-sm'>Total:472 calls</p>
                </div>
                {/* Choice Button */}
                <ChoiceButton options={filterOptions} selectedOption={activeOption} onSelect={handleOption} />
            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={activeOption === 'weekly' ? dataWeekly : dataMonthly}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#0F172B80" fill="#3B82F6" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ChartSection