import React from 'react'

function Navigations({title}) {
  return (
    <div className='text-md text-gray-900 md:px-4 md:pt-1 md:pb-1 items-center justify-center flex cursor-pointer hover:text-black smooth'>
        {title}
    </div>
  )
}

export default Navigations