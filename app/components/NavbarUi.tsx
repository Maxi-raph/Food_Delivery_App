import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router'

const Nav = () => {
    const [isNavOpen,setIsNavOpen] = useState(false)
    const showNav = ()=>{
        setIsNavOpen(prev=>!prev)
    }

    return (<>
        {/* Desktop Navigation */} 
        <div className='hidden md:flex py-3 px-6  space-x-20 justify-between items-center shadow-md border-b border-gray-400'>
            <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8"/>
            <div className='flex flex-1 items-center justify-between'>
                <NavLink to={'/home'} className={({isActive})=>(
                    isActive 
                    ? 'text-[#FF7A18] md:text-md'
                    : ''
                )}>Home</NavLink>
                <NavLink to={'/onboarding/login'} className={({isActive})=>(
                    isActive 
                    ? 'text-[#FF7A18]'
                    : 'hover:text-[#FF7A18]'
                )}>Explore</NavLink>
                <NavLink to={'/onboarding/signUp'} className={({isActive})=>(
                    isActive 
                    ? 'text-[#2a1f17]'
                    : 'hover:text-[#FF7A18]'
                )}>My Orders</NavLink>
                <NavLink to={'/onboarding'} className={({isActive})=>(
                    isActive 
                    ? 'text-[#FF7A18]'
                    : 'hover:text-[#FF7A18]'
                )}>Account</NavLink>
            </div>
            <Link to={'/onboarding/login'} className='text-white py-1 px-6 rounded-md bg-[#FF7A18]'>Login</Link>
        </div>
        {/* Mobile Navigation */} 
        <div className='flex md:hidden py-3 px-6 justify-between items-center relative shadow-lg border-b border-gray-400'>
            <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8"/>
            {!isNavOpen 
            ? <HiMenu  size={24} className={`cursor-pointer `} onClick={()=>showNav()}/>
            : <HiX  size={24} className={`cursor-pointer `} onClick={()=>showNav()}/>
            }
            
                <div className={`p-6 rounded-lg w-64 shadow-lg border border-gray-400 bg-gray-300/30 backdrop-blur-sm absolute z-10 top-15 right-2 
                    transition-translate duration-800 ${!isNavOpen ? 'translate-x-100' : 'translate-x-0'}`}>
                    <div className='flex w-full flex-col items-center space-y-6'>
                        <NavLink to={'/home'} className={({isActive})=>(
                            isActive 
                            ? 'text-[#FF7A18]'
                            : 'hover:text-[#FF7A18] text-white'
                        )} onClick={()=>showNav()}>Home</NavLink>
                        <NavLink to={'/onboarding/login'} className={({isActive})=>(
                            isActive 
                            ? 'text-[#FF7A18]'
                            : 'hover:text-[#FF7A18] text-white'
                        )} onClick={()=>showNav()}>Explore</NavLink>
                        <NavLink to={'/onboarding/signUp'} className={({isActive})=>(
                            isActive 
                            ? 'text-[#FF7A18]'
                            : 'hover:text-[#FF7A18] text-white'
                        )} onClick={()=>showNav()}>My Orders</NavLink>
                        <NavLink to={'/onboarding'} className={({isActive})=>(
                            isActive 
                            ? 'text-[#FF7A18]'
                            : 'hover:text-[#FF7A18] text-white'
                        )} onClick={()=>showNav()}>Account</NavLink>
                        <Link to={'/onboarding/login'} className='text-white py-1 px-6 rounded-md
                         bg-[#FF7A18] hover:bg-[#ff6702] text-center w-full'>
                        Login</Link>
                    </div>
                </div>
            
        </div>
    </>);
}
 
export default Nav;