import type React from "react";
import { Link, useNavigate } from "react-router";




const LogInPage = () => {
     const navigate = useNavigate()

    //Function that navigates you to the Home page
    const handleSubmit = (e:React.SyntheticEvent<HTMLFormElement>)=>{
        e.preventDefault()
        window.location.href = '/home'

    }

    //Function that navigates you to the sign up page
    const handleClick = ()=>{
        navigate('/onboarding/signUp')
    }
   
    return (
    <section className="p-8 flex-1">
              <Link
      to={'/home'}
        className="mb-8 flex justify-center p-2 bg-green-500 text-white rounded w-full"
      >
        Test Direct Navigation
      </Link>
        <img src="/Images/Onboarding/Chuks-Kitchen.png" alt="logo" className="w-40 h-8 mx-auto"/>
        <h1 className="mt-2 text-gray-700 font-semibold text-2xl text-center">Login Your Account</h1>
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
        <form onSubmit={(e)=>handleSubmit(e)} className="mt-2 max-w-lg mx-auto">
            <div className="mb-4">
                <label htmlFor='email' className="text-gray-800">Email</label>
                <input type="text" name="email" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="name@gmail.com"/>
            </div>
            <div className="mb-4">
                <label htmlFor='password' className="text-gray-800">Password</label>
                <input type="password" name="password" required className="w-full block mt-2 p-2 rounded-md border-2 border-gray-300" placeholder="******"/>
                <a href="" className="text-blue-500 mt-2 flex justify-end">Forgot Password?</a>
            </div>
             <button className="w-full p-3 text-center text-white font-semibold mt-2 bg-[#FF7A18] hover:bg-[#ff6702] transition rounded-md cursor-pointer" type="submit">Continue</button>
        </form>
        <p className="mt-4 text-center text-sm">Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={()=>handleClick()}>Create an account</span></p>
    </section>
    );
}
 
export default LogInPage;