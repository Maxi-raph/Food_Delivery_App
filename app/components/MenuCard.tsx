import { HiPlus } from "react-icons/hi";
import { useCart } from "~/Context/CartContext";

interface itemCategory{
 id:number,
 name:string,
 img:string,
 description?:string,
 price?:number,
 btnText?:string,
 btnVariant?:string,
 category?:string
}


interface Category{
    img:string,
    name:string,
    id:number,
    description?:string,
    price?:number,
    btnText?:string,
    btnVariant?:string
}



const MenuCard = ({item, category}:
   {item:itemCategory, category:Category[]}) => {
    const {items, addItem} = useCart();
    const addToCart = (item:itemCategory)=>{
      let obj = category.filter(cat => cat.id === item.id)
      let product = obj[0]
      console.log(product,items);
      
      addItem(product)
            console.log(product,items);

    }
    return ( 
            <div key={item.id} className="pb-6 rounded-xl bg-white flex flex-col items-center object-cover">
                  <img src={item.img} alt={item.name} className="w-full rounded-tr-xl rounded-tl-xl"/>
                  <p className="mt-4 font-bold text-center px-2">{item.name}</p>
                  {item.description && 
                  <p className="text-gray-500 text-center mt-2 px-2">{item.description}</p>}
                  <div className="flex justify-between w-full px-4 space-x-6 items-center mt-4 mb-2">
                    {item.price && <span className="text-[#FF7A18] font-bold">{`₦${item.price}`}</span>}
                    {item.btnVariant === 'text' && item.btnText && <button className="text-white py-1 px-4 rounded-md bg-[#FF7A18] cursor-pointer text-sm"
                    onClick={()=>addToCart(item)}>{item.btnText}</button>}
                    {item.btnVariant === 'icon' && <button className="text-white py-2 px-2 rounded-full bg-[#FF7A18] cursor-pointer"><HiPlus /></button>}
                  </div>
            </div>
     );
}
 
export default MenuCard;