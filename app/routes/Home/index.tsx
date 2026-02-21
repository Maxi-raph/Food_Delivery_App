import { HiSearch } from "react-icons/hi";
import type { Route } from "./+types";
import { Link } from 'react-router'
import CategoriesCard from "~/components/CategoriesCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Home" },
    { name: "description", content: "Welcome to your dashboard" },
  ];
}

const HomePage = () => {
    const popularCategories = [
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Delights',
       id:1
      },
      {img:'/Images/Onboarding/Image-2.png',
       name:'Swallow & Soups',
       id:2
      },
      {img:'/Images/Onboarding/Image-3.png',
       name:'Grills & BBQ',
       id:3
      },
      {img:'/Images/Onboarding/Image-4.png',
       name:'Sweet Treats',
       id:4
      },
      {img:'/Images/Onboarding/Image-5.png',
       name:'Jollof Delights',
       id:5
      },
      {img:'/Images/Onboarding/Image-6.png',
       name:'Jollof Delights',
       id:6
      }
    ]
    return ( 
        <>
          <section 
            className="bg-cover bg-center bg-no-repeat py-16 px-8 min-h-screen relative"
            style={{ 
            backgroundImage: `url('/Images/Onboarding/bg-1.jpeg')`,
            backgroundColor: 'rgba(0,0,0,0.8)',
            backgroundBlendMode: 'overlay'
          }}>
            <h1 className="text-5xl font-bold text-white pt-36 mb-6">
              The Heart of Nigerian Home Cooking
            </h1>
            <p className="text-white mb-8 text-2xl">Handcrafted with passion, delivered with care.</p>
            <Link to={'/home'} className="text-white py-3 px-5
             text-center bg-[#FF7A18] rounded-md">
            Discover what's new</Link>
            <div className="absolute -bottom-4 flex justify-center w-full">
              <div className="relative w-full flex justify-center">
                <HiSearch className="absolute top-3 left-[19.8%] text-xl" color="gray"/>
                <input type="text" placeholder="What are you craving for today?"
                className="w-[62%] pl-8 pr-3 py-2 rounded-md shadow-md bg-white focus:ring-gray-300 focus:ring-2 outline-0"/>
              </div>
            </div>
          </section>
          <section className="bg-gray-200 py-16 px-12">
            <h2 className="text-xl text-center mb-6 font-bold">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {popularCategories.map(item =>(
                  <CategoriesCard item={item}/>
              ))}
            </div>
          </section>
        </>
    );
}
 
export default HomePage;