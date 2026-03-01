import { useNavigate } from "react-router";
import { useCart } from "~/Context/CartContext";

const PaymentPage = () => {
    const {serviceFee, deliveryFee, subTotalPrice} = useCart()
    const totalPrice = serviceFee + deliveryFee + subTotalPrice
    const navigate = useNavigate()
    return (
    <>
        <section className="py-20 px-6 min-h-screen bg-gray-200">
            <div className="bg-white max-w-4xl mx-auto rounded-md px-4 py-4">
                <h2 className="font-bold mb-6 text-xl">Payment <hr className="w-full mt-1 text-gray-300"></hr></h2>
                <form onSubmit={(e)=>{
                e.preventDefault()
                navigate('/order-confirmation')}
                } className="block">
                <h3 className="font-semibold mb-3">Pay With:</h3>
                <div className="flex w-full mb-6">
                    <div className="w-[33.3%] flex gap-1 items-center">
                        <input type="radio" required name="paymentMethod"  className="rounded-full cursor-pointer accent-green-300" />
                        <p className="text-gray-400">Card</p>
                    </div>
                     <div className="w-[33.3%] flex gap-1 items-center">
                        <input type="radio" required name="paymentMethod"  className="rounded-full cursor-pointer accent-green-300" />
                        <p className="text-gray-400">Bank</p>
                    </div>
                     <div className="w-[33.3%] flex gap-1 items-center">
                        <input type="radio" required name="paymentMethod"  className="rounded-full cursor-pointer accent-green-300" />
                        <p className="text-gray-400">Transfer</p>
                    </div>
                </div>
                    <label className="font-semibold">Card Number</label>
                    <input required type="number" className="w-full p-2 border mt-3 mb-3 border-gray-400 focus:ring-2 focus:border-0 focus:ring-[#FF7A11] outline-0 rounded-md placeholder:text-gray-400" placeholder="1234 5678 9101 11121"/>
                    <div className="flex w-full gap-3 justify-between mb-3">
                        <div className="w-[50%]">
                            <label className="font-semibold">Expiration Date</label>
                            <input required type="number" className="w-full p-2 border mt-3 mb-3 border-gray-400 focus:ring-2 focus:border-0 focus:ring-[#FF7A11] outline-0 rounded-md placeholder:text-gray-400" placeholder="MM/YY"/>
                        </div>
                        <div className="w-[50%]">
                            <label className="font-semibold">CVV</label>
                            <input required type="number" className="w-full p-2 border mt-3 mb-3 border-gray-400 focus:ring-2 focus:border-0 focus:ring-[#FF7A11] outline-0 rounded-md placeholder:text-gray-400" placeholder="123"/>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-6 items-center">
                        <input type="checkbox" className="cursor-pointer"/>
                        <p className="text-gray-400">Save card details</p>
                    </div>
                    <button type="submit" className='w-full cursor-pointer text-white py-2 px-6 rounded-md bg-[#FF7A18] text-center'>Pay ₦{(subTotalPrice > 0 && totalPrice.toLocaleString()) || 0}</button>
                </form>
                    <p className="text-gray-400 mt-4 mb-2 text-sm">Your personal data will be used to process your order,support your experience
                        throughout this website, and for other purposes described in our privacy policy.
                    </p>
            </div> 
        </section>
    </> );
}
 
export default PaymentPage;