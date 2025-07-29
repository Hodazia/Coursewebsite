import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import {CodeEditor} from "../components/CodeEditor"


export const CodePlaygroundpage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen bg-[#fffef0]">
        <Navbar />
        <CodeEditor />
        <Footer />
        </div>
        </>
    )
}

