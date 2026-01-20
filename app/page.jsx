import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
    <h2> let complete this project without struggles</h2>
    <Button className="bg-destructive"> let Do it!</Button>
    <UserButton/> 
    </div>
  )
}

export default HomePage
