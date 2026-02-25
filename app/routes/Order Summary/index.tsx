import { useMemo, useState } from "react";
import { Link } from "react-router";
import { useCart } from "~/Context/CartContext";

const OrderSummary = () => {
    const {serviceFee, deliveryFee, subTotalPrice} = useCart()   
    const tax= 0
    const [isClicked,setIsClicked] = useState(false)
    return ( 
    <>
        <section className="py-20 px-6 min-h-screen bg-gray-200">
            <div className="bg-white max-w-4xl mx-auto rounded-md px-4 py-4">
                <h2 className="font-bold mb-6 text-xl">Order Summary <hr className="w-full mt-1 text-gray-300"></hr></h2>
                <h3 className="mb-1 font-semibold">Add a Promo Code</h3>
                <div className="flex w-full space-x-3 items-center mb-6">
                    <input type="text" className="w-[80%] p-2 border border-gray-400 focus:ring-2 focus:border-0 focus:ring-[#FF7A11] outline-0 rounded-md placeholder:text-gray-400" placeholder="Enter code here"/>
                    <Link to={'/onboarding/login'} className='w-[20%] text-white py-2 px-6 rounded-md bg-[#FF7A18] flex justify-center items-center'>Login</Link>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-gray-400">₦{subTotalPrice.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400">Delivery Fee</p>
                    <p className="text-gray-400">₦{deliveryFee.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400">Service Fee</p>
                    <p className="text-gray-400">₦{serviceFee.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-400">Tax</p>
                    <p className="text-gray-400">₦{tax.toLocaleString()}</p>
                </div>
                <hr className="w-full mt-1 text-gray-300 mb-6"></hr>
                <div className="flex justify-between items-center mb-3">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">₦{(subTotalPrice + deliveryFee + serviceFee + tax).toLocaleString()}</p>
                </div>
                <div className="flex mb-6">
                    <button className={`w-[50%] text-white py-2 cursor-pointer px-6 rounded-tl-md rounded-bl-md text-center ${isClicked ? 'bg-gray-400' : 'bg-[#FF7A18]'}`} onClick={()=>setIsClicked(false)}>Delivery</button>
                    <button className={`w-[50%] text-white py-2 cursor-pointer px-6 rounded-tr-md rounded-br-md text-center ${isClicked ? 'bg-[#FF7A18]' : 'bg-gray-400'}`} onClick={()=>setIsClicked(true)}>Pick Up</button>
                </div>
                <h3 className="mb-1 font-semibold">Special Instructions for Restaurant</h3>
                <textarea className="w-full px-2 py-1 border border-gray-400 rounded-md min-h-24 mb-6 focus:ring-2 focus:border-0 focus:ring-[#FF7A11] outline-0 placeholder:text-gray-400"
                placeholder="E.g no onion, food is too spicy, food is too hot or food is tasty..."/>
                <Link to={'/checkout'} className='w-full block text-white py-2 px-6 rounded-md bg-[#FF7A18] text-center'>Proceed to Checkout</Link>
            </div>
        </section>
    </> );
}
 
export default OrderSummary;