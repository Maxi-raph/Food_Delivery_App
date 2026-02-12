const SignUpPage = ({logInBtnClicked}:{logInBtnClicked:React.Dispatch<React.SetStateAction<{
    logIn: boolean;
    signUp: boolean;
}>>}) => {
    //Function that navigates you to the sign up page
    const handleClick = ()=>{
        logInBtnClicked(prev => ({...prev, logIn:true}))
    }
    return ( <>
    <section className="p-8 flex-1">
        <img src="Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-40 h-8 mx-auto"/>
        <h1 className="mt-2 text-gray-700 font-semibold text-2xl text-center">Create Your Account</h1>
        <form className="mt-2 max-w-lg mx-auto">
            <div className="mb-4">
                <label id='email' className="text-gray-800">Email</label>
                <input type="text" className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="name@gmail.com"/>
            </div>
            <div className="mb-4">
                <label id='number' className="text-gray-800">Phone Number</label>
                <input type="number" className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="8123340690"/>
            </div>
            <div className="mb-4">
                <label id='password' className="text-gray-800">Password</label>
                <input type="text" className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="QWE123#"/>
            </div>
            <div className="mb-4">
                <label id='confirm Password' className="text-gray-800">Confirm Password</label>
                <input type="text" className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="QWE123#"/>
            </div>
             <div className="flex gap-2 items-center">
                <input type="checkbox" className="cursor-pointer"/>
                <p>I agree to the <a href="" className="text-blue-500">Terms & Conditions</a> and <a href=""  className="text-blue-500">Privacy Policy</a></p>
             </div>
             <button className="w-full p-3 text-center text-white font-semibold mt-2 bg-[#FF7A18] hover:bg-[#ff6702] transition rounded-md cursor-pointer">Continue</button>
        </form>
             <p className="mt-2 text-center text-sm">Or continue with</p>
             <button className="w-full max-w-lg mx-auto block p-3 text-center  mt-4 border-2 text-gray-700 border-gray-300 transition rounded-md cursor-pointer">Continue with Google</button>
             <button className="w-full max-w-lg mx-auto block p-3 text-center  mt-4 border-2 text-gray-700 border-gray-300 transition rounded-md cursor-pointer">Continue with Apple</button>
             <p className="mt-4 text-center text-sm">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={handleClick}>sign in</span></p>
    </section>
    </> );
}
 
export default SignUpPage;