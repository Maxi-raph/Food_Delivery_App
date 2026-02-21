interface Category{
 id:number,
 name:string,
 img:string
}

const CategoriesCard = ({item}: {item:Category}) => {
    return ( 
                        <div key={item.id} className="h-50 rounded-xl bg-white flex flex-col items-center object-cover">
                  <img src={item.img} alt={item.name} className="w-full h-34"/>
                  <p className="mt-4">{item.name}</p>
                </div>
     );
}
 
export default CategoriesCard;