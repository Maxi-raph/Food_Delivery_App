import OnboardingPage from "./OnboardingPage";
import type { Route } from "./+types/index";
import { useState } from "react";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LoginPage";
import { redirect, Outlet, useLocation, useNavigate, Link } from "react-router";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Welcome" },
    { name: "description", content: "Welcome to Chuks Kitchen" },
  ];
}


const Homepage = () => {

const navigate = useNavigate()
const location = useLocation();
const isAuthPage =
  location.pathname === "/onboarding/login" ||
  location.pathname === "/onboarding/signUp";
    return ( <>
    <main className="">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            <img src="/Images/Onboarding/Rectangle-1.png" alt="home-image" className="hidden md:block md:w-[48vw] md:min-h-[110vh]"/>
              <Outlet />
        </div>
    </main>
    <footer className={`p-6 pt-8 pb-2 bg-[#7A4B33] md:block ${isAuthPage ? 'hidden' :''}`}>
        <div className='grid grid-cols-2 gap-3 place-items-center md:flex justify-evenly'>
            <div>
                <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8"/>
                <p className="text-white text-sm max-w-41.25 leading-relaxed">Bringing the authentic flavors of 
                   Nigerian home cooking to your table with passion and care.</p>
            </div>
            <div>
                <h3 className="text-white text-lg mb-2">Quick Links</h3>
                <Link to={'/home'} className=" block mb-2 text-xs text-gray-300">Home</Link>
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
        <div className="mt-12">
                    <div className="flex w-full h-px rounded-md bg-gray-300"></div>
                    <div className="flex justify-between mt-4 text-sm text-white">
                        <span>© 2024 Chuks Kitchen</span>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
        </div>
            <button 
                  onClick={() => {
                    if (typeof window !== "undefined") {
                    window.scrollTo(0, 0)
                    }
                }}
            >
                <img src="/Images/Onboarding/Up-arrow.png" alt="upArrow" className="w-10 h-10 cursor-pointer fixed top-1/2 right-4"/>
            </button>
    </footer>
    </> );
}
 
export default Homepage;