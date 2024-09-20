import React from 'react'

const StartMenuPanel = ({
  isStartMenuActive,
}: {
  isStartMenuActive: boolean
}) => {
  return (
    <div
      className={`h-[85vh] mt-10 w-[40vw] blur-bg-dark rounded-md mx-auto ${
        isStartMenuActive ? 'translate-y-0' : 'translate-y-[100vh]'
      } duration-200`}
    >
      StartMenuPanel
    </div>
  )
}

export default StartMenuPanel
