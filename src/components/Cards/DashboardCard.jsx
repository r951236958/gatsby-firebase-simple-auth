import React from 'react'

export const DashboardCard = () => (
  <div className="rounded h-full flex justify-center items-center">
    <div className="rounded bg-white shadow-md h-48 w-48 p-6 flex flex-col justify-around">
      <div>
        <p className="text-base text-gray-600">Revenue</p>
      </div>
      <div>
        <p className="text-2xl text-gray-700 font-bold">$56,734</p>
      </div>
      <div className="text-sm">
        <p className="text-green-500 mb-1 flex item-center">
          <i className="material-icons">arrow_drop_up</i> 5.77%
        </p>
        <p className="text-gray-600">Since last month</p>
      </div>
    </div>
  </div>
)

export default DashboardCard
