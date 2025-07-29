

import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const ConatactPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-[#fffef0]">
            <Navbar />
            <Contact />
            <Footer />
        </div>
        
        </>
    )
}

