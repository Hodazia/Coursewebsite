import { Button } from "./ui/Button"
import { Play,Zap,Users,Star } from "lucide-react"
import Heroimg from '../assets/pana.svg'


export const Hero = () => {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48
         bg-gradient-to-br from-[#f6eafd] via-[#fffef0] to-[#eed8fc] {/* Adjusted gradient colors for theme */}
         flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center
                            bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl
                            border border-[#e2b9f9] max-w-4xl mx-auto">


                    <img
                        src={Heroimg}
                        alt="Hero Illustration"
                        className="w-full max-w-xl h-auto object-contain mx-auto mb-4" 
                    />

                    {/* Main Heading */}
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#4f0f69]">
                        Unlock Your Coding Potential
                    </h1>

                    {/* Sub-paragraph */}
                    <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl"> {/* Changed text-muted-foreground to text-gray-700 for clarity */}
                        Access Free DSA Sheets & Code Playground, Plus Premium Courses for In-Depth Learning. Your journey to
                        a tech career starts here.
                    </p>

  
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="text-lg px-8 bg-[#4f0f69] 
                text-[#fffef0] hover:bg-[#6a1a8c] transition duration-200">
                  <Play className="mr-2 h-5 w-5" />
                  Explore All Courses
                </Button>
                <Button className="
                text-lg px-8 bg-[#eed8fc] text-[#4f0f69] hover:bg-[#d08cf4] 
                border-2 border-[#d08cf4] transition duration-200">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Free Learning
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-8">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4 text-[#4f0f69]" />
                  <span>10,000+ Students</span>
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>

            </div>
          </div>
        </section>
        </>
    )
}

