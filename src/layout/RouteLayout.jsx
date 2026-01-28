import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/Shared/Navbar/Navbar'
import Sidebar from '../pages/Shared/Sidebar/Sidebar'

const RouteLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="min-h-screen flex bg-[#152353] overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="flex flex-col flex-1 min-w-0">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-3 md:p-6 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RouteLayout
