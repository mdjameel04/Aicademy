"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const FeatureAssistants = () => {
    const {user} = useUser()
  return (
    <div className='flex items-center justify-between'>
        <div>
         <p className='font-medium text-gray-500'> My Workspace</p>
         <h2 className='text-3xl font-bold'>Welcome back {user?.fullName} </h2>
         </div>
         <div>
            <Button className="bg-destructive"> Profile</Button>
         </div>
    </div>
  )
}

export default FeatureAssistants