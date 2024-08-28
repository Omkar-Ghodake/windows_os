import Image from 'next/image'
import React from 'react'
import taskbarTemperatureIcon from '@/assets/icons/taskbar_temperature_icon.png'
import taskbarWindowsIcon from '@/assets/icons/taskbar_windows_icon.png'
import taskbardesktopsIcon from '@/assets/icons/taskbar_desktops_icon.png'
import taskbarcopilotIcon from '@/assets/icons/taskbar_copilot_icon.png'
import { LuSearch } from 'react-icons/lu'
import TaskbarIcon from '@/layouts/TaskbarIcon'
import { IoChevronUp } from 'react-icons/io5'
import { ImOnedrive } from 'react-icons/im'
import { IoWifiOutline } from 'react-icons/io5'
import { IoVolumeHighOutline } from 'react-icons/io5'
import { CiBatteryFull } from 'react-icons/ci'
import { GoBellFill } from 'react-icons/go'

const Taskbar = () => {
  const taskbarAppsArray = [
    {
      appName: 'Desktop',
      appIconSrc: taskbardesktopsIcon,
    },
    {
      appName: 'Copilot',
      appIconSrc: taskbarcopilotIcon,
    },
  ]

  return (
    <div className='absolute w-full flex justify-between bottom-0 left-0 bg-black/90 text-white px-5 py-2 text-xs h-12'>
      <div className='start flex items-center space-x-2'>
        <span className='icon'>
          <Image
            src={taskbarTemperatureIcon.src}
            alt=''
            width={20}
            height={20}
          />
        </span>
        <div className='info flex flex-col justify-center'>
          <span>Current temp</span>
          <span className='text-gray-300'>Near record</span>
        </div>
      </div>

      <div className='center flex items-center justify-between space-x-3'>
        <TaskbarIcon appName='start' iconSrc={taskbarWindowsIcon} />

        <span className='bg-gray-200/10 border border-white/20 rounded-full h-full w-[13vw] relative'>
          <label
            htmlFor='windows_search'
            className='absolute p-2 flex items-center space-x-2'
          >
            <LuSearch />
            <span>Search</span>
          </label>

          <input
            type='text'
            className='bg-inherit h-full w-full rounded-full'
          />
        </span>

        <div className='taskbar_apps flex space-x-3'>
          {taskbarAppsArray.map((app) => {
            return (
              <TaskbarIcon
                key={app.appName}
                appName={app.appName}
                iconSrc={app.appIconSrc}
              />
            )
          })}
        </div>
      </div>

      <div className='end flex items-center space-x-3'>
        <div className='system_tray'>
          <IoChevronUp className='text-lg' />
        </div>

        <div className='options flex items-center space-x-3'>
          <ImOnedrive className='text-lg' />

          <span className='text-center'>
            ENG <br /> IN
          </span>

          <span className='flex items-center space-x-2'>
            <IoWifiOutline className='text-lg' />
            <IoVolumeHighOutline className='text-lg' />
            <CiBatteryFull className='text-lg' />
          </span>

          <span className='flex items-center space-x-2'>
            <span className='flex flex-col text-end'>
              <span>3:19 PM</span>
              <span>8/29/2024</span>
            </span>

            <GoBellFill className='text-lg text-[#f0c0f4]' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Taskbar
