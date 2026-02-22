import { Link } from "react-router";

type FooterProps = {
  isAuthPage?: boolean;
  scrollHeight?: number
}

const Footer = ({isAuthPage, scrollHeight}:FooterProps) => {
    return ( 
        <footer className={` pt-8 pb-2 bg-[#7A4B33] md:block ${isAuthPage && isAuthPage ? 'hidden' :''}`}>
            <div className='grid grid-cols-2 gap-12 place-items-center md:flex justify-evenly'>
                <div>
                    <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8 mb-3"/>
                    <p className="text-white text-sm max-w-41.25 leading-relaxed">Bringing the authentic flavors of 
                    Nigerian home cooking to your table with passion and care.</p>
                </div>
                <div>
                    <h3 className="text-white text-lg mb-2">Quick Links</h3>
                    <Link to={'/home'} className=" block mb-2 text-sm text-gray-300 text-center">Home</Link>
                    <a href="" className=" block mb-2 text-sm text-gray-300 text-center">Explore</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300 text-center">My Order</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300 text-center">Account</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300 text-center">Contact</a>
                </div>
                <div>
                    <h3 className="text-white text-lg mb-2">Contact Us</h3>
                    <p className="text-gray-300 text-sm mb-2">+234 801 234 5678</p>
                    <p className="text-gray-300 text-sm mb-2">hello@chukskitchen.com</p>
                    <p className="text-gray-300 text-sm mb-2">123 Taste Blvd,Lagos,Nigeria</p>
                </div>
                <div>
                    <h3 className="text-white text-lg mb-2">Socials</h3>
                    <a href="" className=" block mb-2 text-sm text-gray-300">Facebook</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300">Twitter</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300">LinkedIn</a>
                    <a href="" className=" block mb-2 text-sm text-gray-300">Instagram</a>
                </div>
            </div>
            <div className="mt-12">
                        <div className="flex w-full h-px rounded-md bg-gray-300"></div>
                        <div className="grid grid-flow-col  auto-cols-max justify-between mt-4 text-sm text-white px-4">
                            <span>© 2024 Chuks Kitchen</span>
                            <a href="#" className="text-blue-400">Privacy Policy</a>
                            <a href="#" className="text-blue-400">Terms of Service</a>
                    </div>
            </div>
                {scrollHeight && scrollHeight > 300 && <button 
                    onClick={() => {
                        if (typeof window !== "undefined") {
                        window.scrollTo(0, 0)
                        }
                    }}
                >
                    <img src="/Images/Onboarding/Up-arrow.png" alt="upArrow" className="w-10 h-10 cursor-pointer fixed top-1/2 right-4"/>
                </button>}
    </footer>
     );
}
 
export default Footer;