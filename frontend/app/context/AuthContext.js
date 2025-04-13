import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({children}) {
    const [isLoading,setIsLoading] = useState(true)
    const [userToken,setUserToken] = useState(null)
  return (
    <AuthContext.Provider>
        {childern}
    </AuthContext.Provider>
  )
}
