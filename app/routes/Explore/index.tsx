import { useState } from "react";
import MenuCard from "~/components/MenuCard";

const ExplorePage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Popular");  
    const categoryNames = [
    "Popular",
    "Jollof Rice & Entrees",
    "Swallows & Soups",
    "Grills & Sides",
    "Beverages",
    "Desserts"
    ];
    const categories = [
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Delights',
       description:'Our signature Jollof rice, served with crispy fried chicken and plantain.',
       category:'Popular',
       btnVariant:'icon',
       id:1,
       price:3500
      },
      {img:'/Images/Onboarding/image-9.png',
       name:'Eba & Egusi Soup (Goat Meat)',
       description:'Healthy Egusi soup with tender goat meat, served with soft Eba.',
       category:'Popular',
       btnVariant:'icon',
       id:2,
       price:3500
      },
      {img:'/Images/Onboarding/image-11.png',
       name:'Pounded Yam & Edikaikong',
       description:'Traditional pounded yam with rich, leafy Edikaikong soup.',
       category:'Popular',
       btnVariant:'icon',
       id:3,
       price:3500
      },
      {img:'/Images/Onboarding/image-12.png',
       name:'Peppered Snail',
       description:'Spicy and savory peppered snail, perfect as a starter.',
       category:'Popular',
       btnVariant:'icon',
       id:4,
       price:3500
      },
      {img:'/Images/Onboarding/image-14.png',
       name:'Grilled Tilapia Fish',
       description:'Whole grilled tilapia with our special spices.',
       category:'Popular',
       btnVariant:'icon',
       id:5,
       price:3500
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Rice & Fried Chicken',
       description:'Our signature Jollof rice, served with crispy fried chicken and plantain.',
       category:'Popular',
       btnVariant:'icon',
       id:6,
       price:3500
      },
      {img:'/Images/Onboarding/image-13.png',
       name:'Jollof Rice & Smoked Fish',
       description:'Flavorful Jollof rice served with perfectly smoked fish.',
       category:'Jollof Rice & Entrees',
       btnVariant:'icon',
       id:7,
       price:3500
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Party Jollof (Veg)',
       description:'Vegetarian party jollof, full of rich flavors.',
       category:'Jollof Rice & Entrees',
       btnVariant:'icon',
       id:8,
       price:2800
      },  
      {img:'/Images/Onboarding/Image-8.png',
       name:'Party Jollof (Veg)',
       description:'Vegetarian party jollof, full of rich flavors.',
       category:'Jollof Rice & Entrees',
       btnVariant:'icon',
       id:9,
       price:3500
      },
      {img:'/Images/Onboarding/image-9.png',
       name:'Amala with Gbegiri & Ewedu',
       description:'Classic Amala served with Gbegiri(Beans) and Ewedu (jute leaf) soup.',
       category:'Swallows & Soups',
       btnVariant:'icon',
       id:10,
       price:3500
      },
      {img:'/Images/Onboarding/image-9.png',
       name:'Fufu & Okra Soup',
       description:'Light Fufu served with fresh Okra soup and tilapia fish.',
       category:'Swallows & Soups',
       btnVariant:'icon',
       id:11,
       price:3300
      },
      {img:'/Images/Onboarding/image-9.png',
       name:'Fufu & Egusi Soup',
       description:'Light Fufu served with fresh Egusi soup and assorted meat.',
       category:'Swallows & Soups',
       btnVariant:'icon',
       id:12,
       price:3500
      },
      {img:'/Images/Onboarding/Image-6.png',
       name:'Grilled Honey Meat',
       description:'Salted and garnished grilled meat glazed with honey.',
       category:'Grills & Sides',
       btnVariant:'icon',
       id:13,
       price:3500
      },
      {img:'/Images/Onboarding/Image-4.png',
       name:'Sweet Treats',
       description:'Different delicacies of sweetened small chops.',
       category:'Desserts',
       btnVariant:'icon',
       id:14,
       price:3300
      },
    ]
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
          <section className="py-12 px-8 bg-gray-200 mb-24">
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
                        {categoryNames.map((category) => (
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
            <div className="mt-6">
                <h2 className="text-xl mb-6 font-bold">{selectedCategory}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {categories.filter(cat => cat.category === selectedCategory).map(item =>(
                        <MenuCard item={item}/>
                    ))}
                    {categories.filter(cat => cat.category === selectedCategory).length === 0 && (
                        <p className="text-gray-500 text-center col-span-full">No items found in this category.</p>
                     )}
                </div>
            </div>
          </section>
    </> );
}
 
export default ExplorePage;