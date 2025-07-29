import { Link} from 'react-router-dom';
import { Code,Users,FileText,BookOpen,Target,ArrowRight  } from 'lucide-react'
import { Button } from './ui/Button';
import Logo from '../assets/logoSGV.svg'

export const Navbar = () => {
    return (
        <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full 
       bg-background/95 backdrop-blur 
       text-[#4f0f69] 
       ">
        <div className="container mx-auto flex h-24 items-center
         rounded-full p-4  border border-[#f6eafd] shadow-sm 
         ">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-sm">
                <img src={Logo} alt='brand logo' className='w-20 h-20 object-contain'/>
                {/*using object-contain so that the svg doesn't break out of the containers 
                height and width */}
              </span>
            </Link>
            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6 
            text-md font-medium">
              <Link to="/courses" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Courses
              </Link>
              <Link to="/dsa-sheet" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                DSA
              </Link>
              <Link to="/roadmaps" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Roadmaps
              </Link>
              <Link to="/blogs" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Blogs
              </Link>
              <Link href="/playground" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Playground
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Contact
              </Link>
            </nav>
          </div>
          {/* Auth buttons - hidden on mobile */}
          <div className="ml-auto flex items-center space-x-4">
            <Button className="h-10 w-auto px-4 bg-[#4f0f69] text-[#fffef0] hover:bg-[#6a1a8c] transition duration-200">
              Sign In
            </Button>
            <Button className="text-sm h-10 w-auto px-4 bg-[#eed8fc] text-[#4f0f69] hover:bg-[#d08cf4] transition duration-200">
              Get Started
              </Button>
          </div>
        </div>
      </header>

         {/* Mobile Navigation - fixed at bottom */}
         <nav className="md:hidden fixed bottom-0 left-0 right-0
             z-[100] bg-background/95 backdrop-blur-md border-t shadow-lg
             text-[#4f0f69]">
                <div className="flex items-center justify-around py-2 px-2">
                    <Link
                        to="/courses"
                        className="flex flex-col items-center
                         space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <BookOpen className="h-5 w-5 bg-[#eed8fc]
                        border-[#e2b9f9] rounded-md text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">Courses</span>
                    </Link>
                    <Link
                        to="/dsa-sheet"
                        className="flex flex-col items-center space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <Target className="h-5 w-5
                        border-[#bd60ec] rounded-md text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">DSA</span>
                    </Link>
                    <Link
                        to="/roadmaps"
                        className="flex flex-col items-center space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <ArrowRight className="h-5 w-5 text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">Roadmaps</span>
                    </Link>
                    <Link
                        to="/blogs"
                        className="flex flex-col items-center space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <FileText className="h-5 w-5 text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">Blogs</span>
                    </Link>
                    <Link
                        to="/playground"
                        className="flex flex-col items-center space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <Code className="h-5 w-5 text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">Playground</span>
                    </Link>
                    <Link
                        to="/contact"
                        className="flex flex-col items-center space-y-1 p-2 rounded-lg min-w-[60px] transition-colors duration-200 hover:bg-[#4f0f69] hover:text-[#fffef0]"
                    >
                        <Users className="h-5 w-5 text-[#d08cf4] p-1" />
                        <span className="text-xs font-medium text-center">Contact</span>
                    </Link>
                </div>
            </nav>
    </>
    )
}

