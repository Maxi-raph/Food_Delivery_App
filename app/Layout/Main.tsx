import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import { useState, useEffect } from "react";
import * as Spinners from "react-spinners";
import Nav from "~/components/NavbarUi";

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [scrollHeight,setScrollHeight] = useState(0)
    const Loader = Spinners?.FadeLoader;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        
        const handleScroll = () => {
                setScrollHeight(window.scrollY);
        };
            
        window.addEventListener('scroll', handleScroll);
            
            // Cleanup
            return ()=>{
                window.removeEventListener('scroll', handleScroll);
                clearTimeout(timer);  
            } 
    }, []);
          // Use useEffect for window scroll to show the upArrow icon so the user can scroll up just by clicking it
          useEffect(() => {

        }, []);
    
    return ( 
        <>
            {isLoading ? (
                <section className="flex flex-col min-h-screen">
                    <Nav />
                    <main className="grow flex justify-center items-center bg-gray-200">
                        {Loader ? (
                            <Loader color="#FF7A18" />
                        ) : (
                            <div>Loading...</div>
                        )}
                    </main>
                    <Footer />
                </section>
            ) : (
                <>
                <section>
                    <Nav />
                    <Outlet />
                    <Footer scrollHeight={scrollHeight}/>
                </section>
                </>
            )}
        </>
    );
}
 
export default MainLayout;