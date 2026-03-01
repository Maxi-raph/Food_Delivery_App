import { Outlet, useLocation } from "react-router";
import Footer from "~/components/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Spinners from "react-spinners";
import Nav from "~/components/NavbarUi";
import { useNav } from "~/Context/NavContext";

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [scrollHeight,setScrollHeight] = useState(0)
    const Loader = Spinners?.FadeLoader;
    const Location = useLocation();
    const {closeNav} = useNav()

    useEffect(() => {
        
        setIsLoading(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        
        const handleScroll = () => {
                setScrollHeight(window.scrollY);
        };
            
        window.addEventListener('scroll', handleScroll);
            
        return ()=>{
                window.removeEventListener('scroll', handleScroll);
                clearTimeout(timer);  
            } 
    }, [Location.pathname]);
    
    return ( 
        <>
            {isLoading ? (
                <section className="flex flex-col min-h-screen">
                    <Nav />
                    <main className="grow flex justify-center items-center bg-gray-200"
                    onClick={()=>closeNav()}>
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
                    <AnimatePresence mode="wait">
                        <motion.div
                            onClick={()=>closeNav()}
                            key={Location.pathname}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}>
                                <Outlet />
                            </motion.div>
                    </AnimatePresence>
                    <Footer scrollHeight={scrollHeight}/>
                </section>
                </>
            )}
        </>
    );
}
 
export default MainLayout;