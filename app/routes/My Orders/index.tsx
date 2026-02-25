import { useCart } from "~/Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { HiMinus, HiPlus, HiX } from "react-icons/hi";


const MyOrdersPage = () => {
    const {items,addItem, decreaseQuantity,removeItem} = useCart()
    return ( 
    <>
    <section className="py-20 px-8 min-h-screen bg-gray-200">
        <div className="bg-white w-full rounded-md px-2 py-2">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>
            {items.map(item =>(
                <motion.div layout className='border border-gray-300 flex items-center space-x-3 px-2 py-1 w-full mb-2 rounded-md'>   
                    <img src={item.img} alt="" className='w-30 h-27 rounded-lg'/>
                    <div className='flex-1 grid grid-cols-1  place-items-center gap-4 md:grid-cols-3 items-center'>
                        <div>
                            <p className='font-bold md:text-lg  text-md'>{item.name}</p>
                            <p className="text-gray-500 mt-1">{item.description?.split(' ')[0]}</p>
                        </div>
                        <div className="flex space-x-18 text-lg">
                            <span className='block p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={()=>addItem(item)}>
                                <HiPlus />
                            </span>
                            <p className="font-semibold">{ item.quantity && item.quantity}</p>
                            <span className='block p-1 bg-gray-300 rounded-lg cursor-pointer' onClick={()=>decreaseQuantity(item.id)}>
                                <HiMinus />
                            </span>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[#FF7A18] font-semibold">{item.price && item.quantity && (item.price * item.quantity)}</p>
                            <span className='block p-1 bg-[#FF7A11]' onClick={()=>removeItem(item.id)}>
                                <HiX className="text-white cursor-pointer"/>
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
            {items.length <= 0 && (
                <p className="text-center mt-4 text-gray-400">No dish has been added to your cart yet... </p>
            )}
        </div>
    </section>
    
    
    </> );
}
 
export default MyOrdersPage;