interface Category{
 id:number,
 name:string,
 img:string,
 description?:string,
 price?:number,
 btnText?:string,
 route?:string
}

const MenuCard = ({item}: {item:Category}) => {
    return ( 
            <div key={item.id} className="pb-6 rounded-xl bg-white flex flex-col items-center object-cover">
                  <img src={item.img} alt={item.name} className="w-full rounded-tr-xl rounded-tl-xl"/>
                  <p className="mt-4">{item.name}</p>
                  {item.description && 
                  <p className="text-gray-500 text-center mt-2">{item.description}</p>}
                  <div className="flex justify-between items-center-mt-4">
                    {item.price && <span className="text-[#FF7A18] font-bold">{`₦${item.price}`}</span>}
                    {item.btnText && <button className="text-white py-1 px-4 rounded-md bg-[#FF7A18]">{item.btnText}</button>}
                  </div>
            </div>
     );
}
 
export default MenuCard;