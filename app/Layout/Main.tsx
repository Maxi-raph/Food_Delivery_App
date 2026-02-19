import { Outlet } from "react-router";
import Footer from "~/components/Footer";
import { useState, useEffect } from "react";
import * as Spinners from "react-spinners";
import Nav from "~/components/NavbarUi";

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
                    <Footer />
                </section>
                </>
            )}
        </>
    );
}
 
export default MainLayout;