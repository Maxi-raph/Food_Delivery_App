import { useState } from "react";

const ExplorePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Menu Categories");  
    const categories = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallows & Soups",
    "Grills & Sides",
    "Beverages",
    "Desserts"
    ];
    return ( 
    <>
          <section 
            className="bg-cover bg-center bg-no-repeat py-24 px-8  relative"
            style={{ 
            backgroundImage: `url('/Images/Onboarding/bg-3.jpeg')`,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backgroundBlendMode: 'overlay'
          }}>
            <h1 className="text-5xl font-bold text-white pt-36 mb-6">
              Chuks Kitchen
            </h1>
            <p className="text-white mb-8 text-2xl">Chuks kitchen Nigerian Home Cooking 4.8 (1.2k)</p>
          </section>
          <section className="py-12 px-8">
            <div className=" flex justify-center relative">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2  font-bold bg-white border border-gray-500 rounded-lg flex items-center justify-between w-[90%] cursor-pointer"
            >
                Menu Categories
                <svg className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                { (
                    <div className={`absolute mt-1 w-[90%]  bg-white border border-gray-500 rounded-lg shadow-lg z-10 transition-translate duration-400 ${isOpen ? 'translate-y-10' : '-translate-y-80 opacity-0'} `}>
                        <h2  className="px-4 py-2 font-bold">Menu Categories</h2>
                        {categories.map((category) => (
                            <div
                                    key={category}
                                    className={`px-4 py-2 hover:bg-[#FFE1C4] cursor-pointer hover:border-l-4 hover:border-l-[#FF7A18] ${selectedCategory === category ? 'border-l-4 border-l-[#FF7A18] bg-[#FFE1C4] ' : ''}`}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setIsOpen(false);
                                    }}
                                >
                                    {category}
                            </div>
                        ))}
                    </div>
                 )}
            </div>
          </section>
    </> );
}
 
export default ExplorePage;