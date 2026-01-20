"use client"
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { ExpertsList } from '@/Data/constants'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import UserInputDialog from './UserInputDialog'


const FeatureAssistants = () => {
    const {user} = useUser()
  return (
    <div>
    <div className='flex items-center justify-between'>
        <div>
         <p className='font-medium text-gray-500'> My Workspace</p>
         <h2 className='text-3xl font-bold'>Welcome back {user?.fullName} </h2>
         </div>
         
            <Button className="bg-destructive"> Profile</Button>
         </div>
  
          <div className='grid grid-cols-2 lg:grid-cols-5 gap-10 mt-10'>
            {ExpertsList.map((item,index)=>(
             <div className='p-3 bg-secondary rounded-3xl flex flex-col items-center justify-center ' key={index}>
               <BlurFade delay={0.40} direction="left" blur='6px' inView>
                <UserInputDialog  ExpertsList= {item}>
                 <div className=' flex flex-col items-center justify-center ' key={index}>

              <Image src={item.icon} alt={item.name} 
              width={150} 
              height={150}
              className='h-[70px] w-[70px] hover:rotate-12 cursor-pointer transition-all'
               />
              <h2 className='mt-2 '>{item.name} </h2>
              </div>
              </UserInputDialog>
              </BlurFade>
             </div>
            ))}
          </div>

    </div>
  )
}

export default FeatureAssistants