import { HiEmojiHappy } from "react-icons/hi";

const OrderConfirmationPage = () => {
    return ( 
    <>
        <section className="py-20 px-6 min-h-screen bg-gray-200">
            <div className=" max-w-4xl mx-auto px-4 pt-20 pb-4 flex flex-col items-center gap-3">
                <img src="/Images/Onboarding/Check-icon.png" alt="" className="w-15 h-15"/>
                <p>Order Placed Successfully!</p>
                <p>Your delicious Chuks Kitchen meal is on it's way!</p>
                <div className="text-8xl mt-4 mb-4">😄</div>
                <p>Order #123RGR231567Y Confirmed</p>
                <button className='w-68 block text-white py-2 px-6 rounded-md bg-[#FF7A18] text-center cursor-pointer'>Track Order</button>
                <a href="" className="text-gray-400 cursor-pointer">Generate Receipt</a>
                <a href="" className="text-blue-400 cursor-pointer">Need help with your order?</a>
            </div>
        </section>
    </> );
}
 
export default OrderConfirmationPage;