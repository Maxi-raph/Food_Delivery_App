import { useCart } from "~/Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { HiMinus, HiPlus, HiX } from "react-icons/hi";
import { Link } from "react-router";


const MyOrdersPage = () => {
    const {items,addItem, decreaseQuantity,removeItem, subTotalPrice} = useCart()
    return ( 
    <>
    <section className="py-20 px-6 min-h-screen bg-gray-200">
        <div className="bg-white w-full rounded-md px-2 py-2">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>
            {items.map(item =>(
                <motion.div layout className='border border-gray-300 flex items-center space-x-3 px-2 py-1 w-full mb-3 rounded-md'>   
                    <img src={item.img} alt="" className='w-27 h-29 md:w-30 md:h-27 rounded-lg'/>
                    <div className='grid grid-cols-1 w-full place-items-center sm:space-x-4 space-y-8 sm:space-y-0 sm:grid-cols-3 items-center'>
                        <div className="col-span-1 px-4 w-full text-center">
                            <p className='font-semibold md:font-bold  text-sm md:text-lg'>{item.name}</p>
                            <p className="text-gray-500 mt-1 text-sm md:text-md">{item.description?.split(' ')[0]}</p>
                        </div>
                        <div className="flex items-center col-span-1 md:gap-18 gap-14 text-sm md:text-md">
                            <span className='block p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={()=>addItem(item)}>
                                <HiPlus />
                            </span>
                            <p className="font-semibold">{ item.quantity && item.quantity}</p>
                            <span className='block p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={()=>decreaseQuantity(item.id)}>
                                <HiMinus />
                            </span>
                        </div>
                        <div className="flex col-span-1 justify-between px-3 w-full text-sm md:text-md">
                            <p className="text-[#FF7A18] font-semibold">{item.price && item.quantity && `₦${(item.price * item.quantity).toLocaleString()}`}</p>
                            <span className='block p-1 bg-[#FF7A11]' onClick={()=>removeItem(item.id)}>
                                <HiX className="text-white cursor-pointer"/>
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
            {items.length > 0 && (
                <div className="flex justify-between mt-6 mb-4 px-4">
                    <p className="text-[#FF7A18] font-bold">Estimated Total:</p>
                    <p className="text-[#FF7A18] font-bold">₦{subTotalPrice}</p>
                </div>
            )}
            {items.length <= 0 && (
                <p className="text-center mt-4 text-gray-400">No dish has been added to your cart yet... </p>
            )}
        </div>
        <div className="bg-white w-full rounded-md px-4 py-4 mt-6 flex flex-col md:flex-row gap-4 justify-between">
            {items.length > 0 && (
                <Link to={'/my-orders-summary'}className="text-white px-4 py-2 w-50 bg-[#FF7A11] rounded-md text-center">Place Your Order</Link>
            )}
            <Link to={'/explore'} className="text-blue-400 flex items-center"><HiPlus className="mr-2 inline"/> Add more items from Chuks Kitchen</Link>

        </div>
    </section>
    
    
    </> );
}
 
export default MyOrdersPage;