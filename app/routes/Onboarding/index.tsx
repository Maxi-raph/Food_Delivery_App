import type { Route } from "./+types/index";
import { useEffect, useState } from "react";
import Footer from "~/components/Footer";
import { redirect, Outlet, useLocation, useNavigate, Link } from "react-router";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Welcome" },
    { name: "description", content: "Welcome to Chuks Kitchen" },
  ];
}


const Homepage = () => {
    const [scrollHeight,setScrollHeight] = useState(0)
    const navigate = useNavigate()
    const location = useLocation();
    const isAuthPage =
  location.pathname === "/onboarding/login" ||
  location.pathname === "/onboarding/signUp";
      // Use useEffect for window scroll to show the upArrow icon so the user can scroll up just by clicking it
      useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return ( <>
    <main>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch ">
            <div className="hidden md:block md:w-[48vw] md:min-h-[110vh] relative">
                <div className={`absolute inset-0 z-20 flex flex-col 
                items-center justify-center text-white text-center ${isAuthPage ? '' : 'hidden'}`}>
                    <h2 className="font-bold mb-4 text-3xl">Chuks Kitchen</h2>
                    <p className="max-w-lg text-lg">Your journey to delicious,authentic, Nigerian meals start here. 
                        Sign up or log in to order your favorites today!
                    </p>
                </div>
                <div className={`absolute top-0 left-0 z-10 inset-0 bg-[#FF7A18]/60 ${ isAuthPage ? '' : 'hidden'}`}></div>
                <img src="/Images/Onboarding/Rectangle-1.png" alt="home-image" className="w-full h-full"/>
            </div>
              <Outlet />
        </div>
    </main>
    <Footer isAuthPage={isAuthPage} scrollHeight={scrollHeight}/>
    </> );
}
 
export default Homepage;