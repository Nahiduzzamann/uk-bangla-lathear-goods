import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Loading from '../components/Loading';
import ScrollToTop from '../components/ScrollToTop';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to demonstrate loading animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <NavBar></NavBar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <ScrollToTop />

                </>
            )}
        </div>
    );
};

export default Main;