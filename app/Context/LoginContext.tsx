import  { createContext } from "react";
import type  React from "react";
import { useContext, useState } from "react";


interface LoginType{
    isLoggedIn:boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginContext = createContext<LoginType | undefined>(undefined)


export const LoginProvider = ({children}:{children:React.ReactNode})=>{
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  return <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    {children}
  </LoginContext.Provider>
}

  export const useLogin = () => {
    const context = useContext(LoginContext);

    if (!context) {
      throw new Error("useLogin must be used within LoginProvider");
    }

    return context;
};