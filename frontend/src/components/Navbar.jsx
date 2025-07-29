import { Link}
from 'react-router-dom';
import { Code,Users,FileText,BookOpen,Target,ArrowRight  } from 'lucide-react'
import { Button } from './ui/Button';
import Logo from '../assets/brandlogo.png'

export const Navbar = () => {
    return (
        <>
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b
       bg-background/95 backdrop-blur 
       supports-[backdrop-filter]:bg-background/60
       text-[#4f0f69]
       ">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-sm">
                <img src={Logo} alt='brand logo' className='w-40 h-40'/>
              </span>
            </Link>
            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-6 
            text-md font-medium">
              <Link href="/courses" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Courses
              </Link>
              <Link href="/dsa-sheet" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                DSA
              </Link>
              <Link href="/roadmaps" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Roadmaps
              </Link>
              <Link href="/blogs" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Blogs
              </Link>
              <Link href="/playground" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Playground
              </Link>
              <Link href="/contact" className="hover:text-[#fffef0] hover:bg-[#4f0f69] text-[#4f0f69]">
                Contact
              </Link>
            </nav>
          </div>
          {/* Auth buttons - hidden on mobile */}
          <div className="ml-auto flex items-center space-x-4">
            <Button className="h-10 w-10 bg-red-200">
              Sign In
            </Button>
            <Button className="text-sm h-10 w-10 bg-red-200">Get Started</Button>
          </div>
        </div>
      </header>

    </>
    )
}

