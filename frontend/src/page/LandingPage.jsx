import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"


export const LandingPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-[#fffef0]">
        <Navbar />
        {/*Hero sections of the page */}
        <Hero />
        <Footer />
        </div>

        </>
    )
}