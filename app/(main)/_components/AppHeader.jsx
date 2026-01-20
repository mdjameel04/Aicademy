import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const AppHeader = () => {
  return (
    <div className='flex items-center justify-between shadow-sm p-3'>
     <div className='flex items-center justify-center'> 
                <Image src={"/logo.png"} alt='' width={40} height={60}/>
            <h2 className='font-bold text-xl mt-1.5 text-[#4c1d95] '>AIcademy </h2>
     </div> 
        <UserButton/>
    </div>
  )
}

export default AppHeader