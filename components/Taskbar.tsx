'use client'

import Image from 'next/image'
import React, { useState } from 'react'
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
import StartMenuPanel from './StartMenu/StartMenuPanel'

const Taskbar = () => {
  const taskbarAppsArray = [
    {
      appIconSrc: taskbardesktopsIcon,
    },
    {
      appIconSrc: taskbarcopilotIcon,
    },
  ]

  const [isStartMenuActive, setIsStartMenuActive] = useState<boolean>(false)

  const toggleStartMenu = () => {
    isStartMenuActive ? setIsStartMenuActive(false) : setIsStartMenuActive(true)
  }

  return (
    <>
      <div className='absolute w-full flex justify-between bottom-0 left-0 bg-black/90 text-white px-5 py-1 text-xs h-12 z-50'>
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

        <div className='center flex items-center justify-between space-x-3 py-1'>
          <TaskbarIcon
            appName='Start'
            iconSrc={taskbarWindowsIcon}
            onClick={toggleStartMenu}
          />

          <span className='bg-gray-200/10 border border-white/20 rounded-full h-full w-[13vw] relative flex items-center px-2'>
            <label
              htmlFor='windows_search'
              className='px-2 flex items-center space-x-2 z-10'
            >
              <LuSearch className='text-lg' />
              {/* <span>Search</span> */}
            </label>

            <input
              type='text'
              className='bg-transparent h-full w-full outline-none z-20 text-sm'
              placeholder='Search'
            />
          </span>

          <div className='taskbar_apps flex space-x-3'>
            {taskbarAppsArray.map((app, index) => {
              return (
                <>
                  <TaskbarIcon key={index} iconSrc={app.appIconSrc} />
                  {/* <span className='cursor-pointer'>lorem</span> */}
                </>
              )
            })}
          </div>
        </div>

        <div className='end flex items-center space-x-3'>
          <div className='system_tray hover:bg-white/10 h-full flex justify-center items-center p-1 duration-75'>
            <IoChevronUp className='text-lg' />
          </div>

          <div className='options flex items-center space-x-3 h-full'>
            <ImOnedrive className='text-2xl hover:bg-white/10 h-full flex justify-center items-center p-1 duration-75' />

            <span className='text-center hover:bg-white/10 h-full flex justify-center items-center p-1 duration-75'>
              ENG <br /> IN
            </span>

            <span className='space-x-2 hover:bg-white/10 h-full flex justify-center items-center p-1 duration-75'>
              <IoWifiOutline className='text-lg' />
              <IoVolumeHighOutline className='text-lg' />
              <CiBatteryFull className='text-lg' />
            </span>

            <span className='space-x-2 hover:bg-white/10 h-full flex justify-center items-center p-1 duration-75'>
              <span className='flex flex-col text-end'>
                <span>3:19 PM</span>
                <span>8/29/2024</span>
              </span>

              <GoBellFill className='text-lg text-[#f0c0f4]' />
            </span>
          </div>
        </div>
      </div>

      <StartMenuPanel isStartMenuActive={isStartMenuActive} />
    </>
  )
}

export default Taskbar
