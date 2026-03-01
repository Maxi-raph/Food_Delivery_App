import React, { createContext, useContext, useState } from "react";

interface NavProp {
    isNavOpen:boolean
    showNav: () => void
    closeNav: () => void
}

const NavContext = createContext<NavProp | undefined>(undefined)


export const NavProvider = ({children}:{children:React.ReactNode})=>{
      const [isNavOpen,setIsNavOpen] = useState(false)
      const showNav = ()=>{
        setIsNavOpen(prev=>!prev)
    }

      const closeNav = ()=>{
        setIsNavOpen(false)
    }

    return <NavContext.Provider value={{isNavOpen, showNav, closeNav}}>
        {children}
    </NavContext.Provider>
}


export const useNav = ()=>{
    let context = useContext(NavContext)

    if(!context) throw new Error('useNav must be used within NavProvider')

      return context
}