import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import { useState, useEffect } from "react";
import * as Spinners from "react-spinners";

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const Loader = Spinners?.FadeLoader;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    
    return ( 
        <>
            {isLoading ? (
                <div className="flex flex-col min-h-screen">
                    <main className="flex-grow flex justify-center items-center">
                        {Loader ? (
                            <Loader color="#FF7A18" />
                        ) : (
                            <div>Loading...</div>
                        )}
                    </main>
                    <Footer />
                </div>
            ) : (
                <>
                    <Outlet />
                    <Footer />
                </>
            )}
        </>
    );
}
 
export default MainLayout;