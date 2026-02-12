

const OnboardingPage = ({signUpBtnClicked}:{signUpBtnClicked:React.Dispatch<React.SetStateAction<{
    logIn: boolean;
    signUp: boolean;
}>>}) => {
    //Function that navigates you to the sign up page
    const handleClick = ()=>{
        signUpBtnClicked(prev => ({...prev, signUp:true}))
    }
    return ( 
            <section className="p-8 flex-1 justify-self-center">
                <div className="flex justify-end md:justify-between relative">
                    <img src="Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-36 h-8 absolute top-14 left-1/3 md:static"/>
                    <button className="cursor-pointer text-md text-center px-6 py-1 rounded-md border-2 border-blue-500 text-blue-500  transition
                     hover:bg-blue-500 hover:text-white"
                     onClick={handleClick}>Sign Up</button>
                </div>
                <div className='p-1 mt-16 max-w-lg'>
                    <h1 className='text-3xl font-bold text-center mb-4'>Your Authentic Taste of Nigeria</h1>
                    <p>
                        Experience homemade flavors delivered fresh to your desk or home. 
                        We bring the rich country heritage of Nigeria right to your doorstep.
                    </p>
                    <div className="grid space-y-6 space-x-0 grid-cols-1 lg:space-x-2 lg:grid-cols-2 mt-8">
                        <div className="flex gap-4 items-center py-1 px-1 bg-gray-200 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold">Freshly Prepared</p>
                        </div>
                        <div className="flex gap-4 items-center  py-1 px-1 bg-gray-200 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold">Support Local Business</p>
                        </div>
                        <div className="flex gap-4 items-center py-1 px-1 bg-gray-200 rounded-md">
                            <div className="p-1 rounded-md bg-[#FFE1C4] w-9 h-9 flex justify-center items-center">
                                <img src="Images/Onboarding/fork-knife-fill.png" alt="icon"/>
                            </div>
                            <p className="font-bold">Fast & Reliable Delivery</p>
                        </div>
                    </div>
                    <button className="w-full p-3 text-center text-white font-semibold mt-8 bg-[#FF7A18] hover:bg-[#ff6702] transition rounded-md cursor-pointer">Start Your Order</button>
                    <button className="w-full p-3 text-center  text-blue-500 font-semibold mt-6 border-2 border-blue-500 transition rounded-md cursor-pointer hover:bg-blue-500 hover:text-white">Learn More About Us</button>
                </div>
                <div className="lg:mt-20 md:mt-16 md:w-full lg:static md:absolute md:left-0 mt-12">
                    <div className="flex lg:w-full md:mx-auto md:w-[79%] h-0.5 rounded-md bg-gray-200"></div>
                    <div className="flex justify-evenly mt-2 text-sm">
                        <span>© 2024 Chuks Kitchen</span>
                        <a href="#" className="text-blue-400">Privacy Policy</a>
                        <a href="#" className="text-blue-400">Terms of Service</a>
                    </div>
                </div>
            </section>
     );
}
 
export default OnboardingPage;