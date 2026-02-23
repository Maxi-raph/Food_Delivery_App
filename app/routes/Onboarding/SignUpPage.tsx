import { useNavigate } from "react-router";


const SignUpPage = () => {
    const navigate = useNavigate()
    //Function that navigates you to the login page upon submission
    const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navigate('/onboarding/login')
    }

    //Function that navigates you to the sign up page
    const handleClick = ()=>{
        navigate('/onboarding/login')
    }
    return ( <>
    <section className="p-8 flex-1">
        <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-40 h-8 mx-auto"/>
        <h1 className="mt-2 text-gray-700 font-semibold text-2xl text-center mb-8">Create Your Account</h1>
        <div className="max-w-lg mx-auto mt-6">
        <button className="w-full p-3 text-center border-2 border-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 transition flex items-center justify-center gap-2">
            <img src="/Images/Onboarding/google-icon.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
        </button>
        
        <button className="w-full p-3 text-center border-2 border-gray-300 text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 transition mt-4 flex items-center justify-center gap-2">
            <img src="/Images/Onboarding/apple-icon.svg" alt="Apple" className="w-5 h-5" />
            Continue with Apple
        </button>
        
        <div className="relative flex items-center mt-6">
            <div className="grow border-t border-gray-300"></div>
            <span className="shrink mx-4 text-gray-500 text-sm">Or continue with</span>
            <div className="grow border-t border-gray-300"></div>
        </div>
        </div>
                <form className="mt-4 max-w-lg mx-auto"  onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-4">
                <label id='email' className="text-gray-800">Email</label>
                <input type="email" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="name@gmail.com"/>
            </div>
            <div className="mb-4">
                <label id='number' className="text-gray-800">Phone Number</label>
                <input type="number" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="8123340690"/>
            </div>
            <div className="mb-4">
                <label id='password' className="text-gray-800">Password</label>
                <input type="password" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="QWE123#"/>
            </div>
            <div className="mb-4">
                <label id='confirm Password' className="text-gray-800">Confirm Password</label>
                <input type="password" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="QWE123#"/>
            </div>
             <div className="flex gap-2 items-center">
                <input type="checkbox" required className="cursor-pointer"/>
                <p>I agree to the <a href="" className="text-blue-500">Terms & Conditions</a> and <a href=""  className="text-blue-500">Privacy Policy</a></p>
             </div>
             <button className="w-full p-3 text-center text-white font-semibold mt-2 bg-[#FF7A18] hover:bg-[#ff6702] transition rounded-md cursor-pointer">Continue</button>
        </form>
             <p className="mt-4 text-center text-sm">Already have an account? <span className="text-blue-500 cursor-pointer" onClick={handleClick}>sign in</span></p>
    </section>
    </> );
}
 
export default SignUpPage;