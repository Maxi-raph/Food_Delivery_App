import { HiPlus } from "react-icons/hi";

interface Category{
 id:number,
 name:string,
 img:string,
 description?:string,
 price?:number,
 btnText?:string,
 btnVariant?:string,
 route?:string,
 category?:string
}

const MenuCard = ({item}: {item:Category}) => {
    return ( 
            <div key={item.id} className="pb-6 rounded-xl bg-white flex flex-col items-center object-cover">
                  <img src={item.img} alt={item.name} className="w-full rounded-tr-xl rounded-tl-xl"/>
                  <p className="mt-4 font-bold text-center px-2">{item.name}</p>
                  {item.description && 
                  <p className="text-gray-500 text-center mt-2 px-2">{item.description}</p>}
                  <div className="flex justify-between w-full px-4 space-x-6 items-center mt-4 mb-2">
                    {item.price && <span className="text-[#FF7A18] font-bold">{`₦${item.price}`}</span>}
                    {item.btnVariant === 'text' && item.btnText && <button className="text-white py-1 px-4 rounded-md bg-[#FF7A18] cursor-pointer">{item.btnText}</button>}
                    {item.btnVariant === 'icon' && <button className="text-white py-2 px-2 rounded-full bg-[#FF7A18] cursor-pointer"><HiPlus /></button>}
                  </div>
            </div>
     );
}
 
export default MenuCard;