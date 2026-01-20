import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import React, { useEffect, useState } from 'react'
import { UserContext } from './_context/UserContext'

const AuthProvider = ({children}) => {
    const {user} = useUser()
    const CreateUser = useMutation(api.users.CreateUser)
   const [userData, setUserData] = useState();

    useEffect(()=>{
console.log(user)
user&& CreateNewUser()
    },[user])
const CreateNewUser =async()=>{

    // save the user info
const result = await CreateUser({
 name: user.fullName,
 email: user?.primaryEmailAddress.emailAddress
}); // once you user data 
console.log(result)
setUserData(result)
}

  return (
    <div>
       <UserContext.Provider value={{userData,setUserData}}>
      {children}
       </UserContext.Provider>
    </div>
  )
}

export default AuthProvider
