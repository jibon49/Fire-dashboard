import React from 'react'
import CardSection from './CardSection'
import ChartSection from './ChartSection'
import RecentActivity from './RecentActivity'
import TopRepairRequest from './TopRepairRequest'

const Home = () => {
  return (
    <div>
      <CardSection></CardSection>
      <ChartSection></ChartSection>
      <div className='flex justify-between gap-6 flex-col lg:flex-row'>
        <RecentActivity></RecentActivity>
        <TopRepairRequest></TopRepairRequest>
      </div>
    </div>
  )
}

export default Home