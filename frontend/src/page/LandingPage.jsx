import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Newsletter } from "../components/Newsletter"
import { FAQSection } from "../components/FAQsection"
import { CTASection } from "../components/CTASection"
import { Testimonials } from "../components/Testimonials"

export const LandingPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-[#fffef0]">
        <Navbar />
        {/*Hero sections of the page */}
        <Hero />
        <CTASection />
        <Testimonials />
        <Newsletter />
        <FAQSection />
        <Footer />
        </div>

        </>
    )
}