import OnboardingPage from "~/components/OnboardingPage";
import type { Route } from "./+types/index";
import { useState } from "react";
import SignUpPage from "~/components/SignUpPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "Custom website development" },
  ];
}


const Homepage = () => {
    const [flag,setFlag] = useState({logIn:false,signUp:false})
    return ( <>
    <main className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            <img src="Images/Onboarding/Rectangle-1.png" alt="home-image" className="hidden md:block md:w-[48vw] md:min-h-[110vh]"/>
            <img src="Images/Onboarding/Rectangle-4317.png" alt="" className="lg:hidden md:hidden block w-[88%] mx-auto h-50"/>
            { !flag.logIn && !flag.signUp && <OnboardingPage signUpBtnClicked={setFlag}/> }
            {  flag.signUp && <SignUpPage  logInBtnClicked={setFlag}/> }
        </div>
    </main>
    <footer className={`p-8 bg-[#7A4B33] ${flag.signUp  || flag.logIn ? 'md:mt-0' :null} md:mt-18 mt:0 lg:mt-0`}>
        <div className='grid grid-cols-2 gap-3 place-items-center md:flex justify-evenly'>
            <div>
                <img src="Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8"/>
                <p className="text-white max-w-[165px] leading-relaxed">Bringing the authentic flavors of 
                   Nigerian home cooking to your table with passion and care.</p>
            </div>
            <div>
                <h3 className="text-white text-lg mb-2">Quick Links</h3>
                <a href="#" className=" block mb-2 text-xs text-gray-300 ">Home</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">Explore</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">My Order</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">Account</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">Contact</a>
            </div>
            <div>
                <h3 className="text-white text-lg mb-2">Contact Us</h3>
                <p className="text-gray-300 text-xs mb-2">+234 801 234 5678</p>
                <p className="text-gray-300 text-xs mb-2">hello@chukskitchen.com</p>
                <p className="text-gray-300 text-xs mb-2">123 Taste Blvd,Lagos,Nigeria</p>
            </div>
            <div>
                <h3 className="text-white text-lg mb-2">Socials</h3>
                <a href="" className=" block mb-2 text-xs text-gray-300">Facebook</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">Twitter</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">LinkedIn</a>
                <a href="" className=" block mb-2 text-xs text-gray-300">Instagram</a>
            </div>
        </div>
        <div className="flex justify-between items-center mt-8 w-[80%] mx-auto">
            <p className="text-xs text-gray-300">© 2020 Lift Media. All Rights Reserved.</p>
            <button onClick={()=>window.scrollTo(0,0)}>
                <img src="Images/Onboarding/Up-arrow.png" alt="upArrow" className="w-10 h-10 cursor-pointer"/>
            </button>
        </div>
    </footer>
    </> );
}
 
export default Homepage;