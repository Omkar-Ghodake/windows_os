import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

const TaskbarIcon = ({
  className,
  appName,
  iconSrc,
  button,
  onClick,
}: {
  className?: string
  appName?: string
  iconSrc: string | StaticImport
  button?: boolean
  onClick?: () => any
}) => {
  return (
    <span className={`${className} z-50 relative`}>
      <Image
        src={iconSrc}
        alt=''
        width={40}
        height={40}
        className='peer hover:bg-white/10 p-2 rounded-sm'
        onClick={onClick}
      />

      {appName && (
        <span className='bg-stone-800 p-2 rounded-sm absolute -top-12 -left-1/2 translate-x-1/2 opacity-0 peer-hover:opacity-100 duration-200 delay-[600ms] ease-in'>
          {appName}
        </span>
      )}
    </span>
  )
}

export default TaskbarIcon
