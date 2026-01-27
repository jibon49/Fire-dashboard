import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar/Navbar'
import Sidebar from '../pages/Shared/Sidebar/Sidebar'

const RouteLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#152353]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RouteLayout
