import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const OnboardingPage = ({signUpBtnClicked}:{signUpBtnClicked:React.Dispatch<React.SetStateAction<{
    logIn: boolean;
    signUp: boolean;
}>>}) => {
    //Function that navigates you to the sign up page
    const navigate = useNavigate()
    const handleClick = ()=>{
        
        navigate('/onboarding/signUp')
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);
    return ( 
            <section className="p-8 flex-1 justify-self-center">
                <div className="flex justify-between items-center relative">
                    <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8"/>
                    <button className="cursor-pointer text-md text-center px-6 py-1 rounded-md border-2 border-blue-500 text-blue-500  transition
                     hover:bg-blue-500 hover:text-white"
                     onClick={()=>handleClick()}>Sign Up</button>
                </div>
                <div className='p-1 mt-16 max-w-xl md:mt-20'>
                    <div 
                        className="bg-cover bg-center bg-no-repeat p-16 md:p-0 rounded-md md:bg-none"
                        style={{ 
                            backgroundImage: isMobile ? `url('/Images/Onboarding/Rectangle-4317.png')` : 'none',
                            backgroundColor:isMobile ? 'rgba(0,0,0,0.8)':'',
                            backgroundBlendMode: 'overlay'
                        }}>
                    <h1 className='text-3xl font-bold text-center mb-8 text-white md:text-black'>Your Authentic Taste of Nigeria</h1>
                    <p className="text-white md:text-black text-center leading-relaxed">
                        Experience homemade flavors delivered fresh to your desk or home. 
                        We bring the rich country heritage of Nigeria right to your doorstep.
                    </p>
                    <div className="grid space-y-6 space-x-0 grid-cols-1 lg:space-x-2 lg:grid-cols-2 mt-8">
                        <div className="flex gap-4 items-center py-1 px-1 md:bg-gray-200 bg-gray-600 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="/Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold text-white md:text-black">Freshly Prepared</p>
                        </div>
                        <div className="flex gap-4 items-center  py-1 px-1 md:bg-gray-200 bg-gray-600 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="/Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold text-white md:text-black">Support Local Business</p>
                        </div>
                        <div className="flex gap-4 items-center py-1 px-1 md:bg-gray-200 bg-gray-600 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="/Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold text-white md:text-black">Fast & Reliable Delivery</p>
                        </div>
                    </div>
                    <button className="w-full p-3 text-center text-white font-semibold mt-8 bg-[#FF7A18] hover:bg-[#ff6702] transition rounded-md cursor-pointer">Start Your Order</button>
                    <button className="w-full p-3 text-center  text-blue-500 font-semibold mt-8 border-2 border-blue-500 transition rounded-md cursor-pointer hover:bg-blue-500 hover:text-white">Learn More About Us</button>
                    </div>
                </div>
            </section>
     );
}
 
export default OnboardingPage;