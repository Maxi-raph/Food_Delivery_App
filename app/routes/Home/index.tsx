import { HiSearch } from "react-icons/hi";
import type { Route } from "./+types";
import { Link } from 'react-router'
import MenuCard from "~/components/MenuCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Home" },
    { name: "description", content: "Welcome to your dashboard" },
  ];
}

const HomePage = () => {
    const popularCategory = [
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

    const specialsCategory=[
      {img:'/Images/Onboarding/Image-7.png',
       name:'Spicy Tilapia Pepper Soup',
       description:'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
       id:1,
       price:3500,
       btnText:'Add to Cart'
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Rice And Fried Chicken',
       description:'Our signature Jollof rice, cooked to perfection , serve with succulent fried chicken.',
       id:2,
       price:3500,
       btnText:'Add to Cart'
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Rice And Fried Chicken',
       description:'Our signature Jollof rice, cooked to perfection , serve with succulent fried chicken.',
       id:3,
       price:3500,
       btnText:'Add to Cart'
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Rice And Fried Chicken',
       description:'Our signature Jollof rice, cooked to perfection , serve with succulent fried chicken.',
       id:4,
       price:3500,
       btnText:'Add to Cart'
      },
      {img:'/Images/Onboarding/Image-8.png',
       name:'Jollof Rice And Fried Chicken',
       description:'Our signature Jollof rice, cooked to perfection , serve with succulent fried chicken.',
       id:5,
       price:3500,
       btnText:'Add to Cart'
      },
      {img:'/Images/Onboarding/image-9.png',
       name:'Egusi Soup & Pounded Yam',
       description:'Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.',
       id:1,
       price:3500,
       btnText:'Add to Cart'
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
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full">
              <div className="relative w-full flex justify-center">
                <HiSearch className="absolute top-3 left-[17.2%] md:left-[19.8%] text-xl" color="gray"/>
                <input type="text" placeholder="What are you craving for today?"
                className="w-[68%] md:w-[62%] pl-8 pr-3 py-2 rounded-md shadow-md bg-white focus:ring-[#FF7A18] focus:ring-2 outline-0"/>
              </div>
            </div>
          </section>
          <section className="bg-gray-200 py-16 px-12">
            <h2 className="text-xl text-center mb-6 font-bold">Popular Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {popularCategory.map(item =>(
                  <MenuCard item={item}/>
              ))}
            </div>
          </section>
          <section className="bg-gray-200 py-16 px-12">
            <h2 className="text-xl text-center mb-6 font-bold">Chef's Specials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {specialsCategory.map(item =>(
                  <MenuCard item={item}/>
              ))}
            </div>
          </section>
          <section 
            className="bg-cover bg-center bg-no-repeat px-8 py-24"
            style={{ 
            backgroundImage: `url('/Images/Onboarding/bg-2.jpeg')`,
            backgroundColor: 'rgba(0,0,0,0.8)',
            backgroundBlendMode: 'overlay'
          }}>
            <h1 className="text-5xl font-bold text-white mb-6">
              Introducing Our New Menu Additions
            </h1>
            <p className="text-white mb-8 text-2xl max-w-3xl">Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
            <Link to={'/home'} className="text-white py-3 px-5
             text-center bg-[#FF7A18] rounded-md">
            Discover what's new</Link>
          </section>
        </>
    );
}
 
export default HomePage;