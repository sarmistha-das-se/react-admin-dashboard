import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/setttings/Profile'
import Notifications from '../components/setttings/Notifications'
import Security from '../components/setttings/Security'
import ConnectedAccounts from '../components/setttings/ConnectedAccounts'
import DangerZone from '../components/setttings/DangerZone'

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <Header title='Settings' /> 
      <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile />
        <Notifications />
        <Security />
        <ConnectedAccounts />
        <DangerZone />
      </main>
    </div>
  )
}

export default SettingsPage