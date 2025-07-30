import { Link } from "react-router-dom"
import { Code, Github } from "lucide-react"
import Logo from '../assets/brandlogo.png'

export const Footer = () => {
    return (
        <>
        <footer className="w-full py-12 md:py-24 lg:py-32 xl:py-48
         bg-gradient-to-br from-[#f6eafd] via-[#fffef0] to-[#eed8fc] {/* Matches other sections' background */}
         flex justify-center items-center">
            <div className="container px-4 md:px-6">
                {/* Main footer content area, styled as a card */}
                <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl w-full max-w-6xl mx-auto
                                border border-[#e2b9f9] flex flex-col items-center"> {/* Added flex-col items-center for centering content */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 w-full text-center md:text-left"> {/* Added w-full and text-center/md:text-left */}
                        <div>
                            <h3 className="font-semibold mb-3 text-[#4f0f69]">Platform</h3> {/* Applied theme color */}
                            <ul className="space-y-2 text-sm text-gray-700"> {/* Applied theme color */}
                                <li>
                                    <Link to="/courses" className="hover:text-[#4f0f69] transition-colors">Courses</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/dsa-sheet" className="hover:text-[#4f0f69] transition-colors">DSA Sheet</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/playground" className="hover:text-[#4f0f69] transition-colors">Code Playground</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/blogs" className="hover:text-[#4f0f69] transition-colors">Blogs</Link> {/* Changed href to to, added hover */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-[#4f0f69]">Company</h3> {/* Applied theme color */}
                            <ul className="space-y-2 text-sm text-gray-700"> {/* Applied theme color */}
                                <li>
                                    <Link to="/about" className="hover:text-[#4f0f69] transition-colors">About Us</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-[#4f0f69] transition-colors">Contact</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/careers" className="hover:text-[#4f0f69] transition-colors">Careers</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/blog" className="hover:text-[#4f0f69] transition-colors">Blog</Link> {/* Changed href to to, added hover */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-[#4f0f69]">Support</h3> {/* Applied theme color */}
                            <ul className="space-y-2 text-sm text-gray-700"> {/* Applied theme color */}
                                <li>
                                    <Link to="/help" className="hover:text-[#4f0f69] transition-colors">Help Center</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/community" className="hover:text-[#4f0f69] transition-colors">Community</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/status" className="hover:text-[#4f0f69] transition-colors">Status</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/feedback" className="hover:text-[#4f0f69] transition-colors">Feedback</Link> {/* Changed href to to, added hover */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3 text-[#4f0f69]">Legal</h3> {/* Applied theme color */}
                            <ul className="space-y-2 text-sm text-gray-700"> {/* Applied theme color */}
                                <li>
                                    <Link to="/privacy" className="hover:text-[#4f0f69] transition-colors">Privacy Policy</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:text-[#4f0f69] transition-colors">Terms of Service</Link> {/* Changed href to to, added hover */}
                                </li>
                                <li>
                                    <Link to="/cookies" className="hover:text-[#4f0f69] transition-colors">Cookie Policy</Link> {/* Changed href to to, added hover */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 w-full"> {/* Added border-gray-200 and w-full */}
                        <div className="flex items-center space-x-2 mb-4 sm:mb-0"> {/* Added mb-4 sm:mb-0 for mobile spacing */}
                            <span className="font-bold">
                                <img src={Logo} alt='brand logo' className='w-16 h-16 object-contain' onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/4f0f69/fff?text=Logo"; }}/> {/* Adjusted size to w-16 h-16 */}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 text-center sm:text-left">© {new Date().getFullYear()} BYTECODE. All rights reserved.</p> {/* Applied theme color and adjusted text alignment */}
                        <div className="flex space-x-4 mt-4 sm:mt-0"> {/* Adjusted spacing */}
                            <Link to="#" className="text-[#4f0f69] hover:text-[#6a1a8c] transition-colors"> {/* Changed href to to, applied theme colors */}
                                <Github className="h-6 w-6" /> {/* Increased icon size slightly */}
                            </Link>
                            <Link to="#" className="text-[#4f0f69] hover:text-[#6a1a8c] transition-colors"> {/* Changed href to to, applied theme colors */}
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> {/* Increased icon size slightly */}
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </Link>
                            <Link to="#" className="text-[#4f0f69] hover:text-[#6a1a8c] transition-colors"> {/* Changed href to to, applied theme colors */}
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> {/* Increased icon size slightly */}
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
        </>
    )
}