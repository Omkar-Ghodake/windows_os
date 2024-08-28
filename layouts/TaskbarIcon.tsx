import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

const TaskbarIcon = ({
  className,
  appName,
  iconSrc,
}: {
  className?: string
  appName: string
  iconSrc: string | StaticImport
}) => {
  return (
    <span className={`${className} cursor-pointer`}>
      <Image src={iconSrc} alt='' width={20} height={20} className='' />
    </span>
  )
}

export default TaskbarIcon
