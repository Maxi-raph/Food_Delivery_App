import { useCart } from "~/Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";


const MyOrdersPage = () => {
    const {items} = useCart()
    return ( 
    <>
    <section className="py-20 px-8 min-h-screen bg-gray-200">
        <div className="bg-white w-full rounded-md px-2 py-1">
            <h1 className="text-xl font-bold mb-4">Your Cart</h1>
            {items.map(item =>(
                <motion.div layout>   
                    <img src={item.img} alt="" />
                    <div>
                        <p>{item.name}</p>
                        <p>{item.description?.split(',')[0]}</p>
                        <p>{item.quantity}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
    
    
    </> );
}
 
export default MyOrdersPage;