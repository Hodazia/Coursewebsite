import { Card,CardContent,CardDescription,CardTitle } from "./ui/Card"
import { Button } from "./ui/Button"
import { Star,Users,CheckCircle, Trophy } from "lucide-react"



export const Testimonials = () => {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48
         bg-gradient-to-br from-[#f6eafd] via-[#fffef0] to-[#eed8fc] {/* Matches Hero/Newsletter gradient */}
         flex justify-center items-center">
            <div className="container px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4f0f69]">What Our Learners Say</h2> {/* Applied theme color */}
                    <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl mt-4"> {/* Changed text-muted-foreground to text-gray-700 */}
                        Success stories from developers who transformed their careers
                    </p>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"> {/* Added max-w-5xl and mx-auto for centering */}
                    <Card> {/* Uses the custom Card component */}
                        <CardContent className="pt-6"> {/* Uses the custom CardContent */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" /> 
                                ))}
                            </div>
                            <CardDescription className="mb-4"> {/* Uses CardDescription */}
                                "The DSA sheet and courses helped me land my dream job at Google. The structured approach and video
                                explanations made complex concepts easy to understand."
                            </CardDescription>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#eed8fc] flex items-center justify-center mr-3 text-[#4f0f69] font-semibold"> {/* Applied theme colors */}
                                    <span className="text-sm">AS</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Arjun Sharma</p> {/* Applied text color */}
                                    <p className="text-sm text-gray-600">Software Engineer at Google</p> {/* Applied text color */}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card> {/* Uses the custom Card component */}
                        <CardContent className="pt-6"> {/* Uses the custom CardContent */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <CardDescription className="mb-4"> {/* Uses CardDescription */}
                                "As a complete beginner, the full-stack course gave me all the skills I needed. The projects were
                                challenging but rewarding, and I'm now working as a developer!"
                            </CardDescription>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#eed8fc] flex items-center justify-center mr-3 text-[#4f0f69] font-semibold">
                                    <span className="text-sm">PK</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Priya Kumari</p>
                                    <p className="text-sm text-gray-600">Full Stack Developer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card> {/* Uses the custom Card component */}
                        <CardContent className="pt-6"> {/* Uses the custom CardContent */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <CardDescription className="mb-4"> {/* Uses CardDescription */}
                                "The code playground is amazing for quick testing, and the blogs keep me updated with the latest
                                trends. Great platform for continuous learning!"
                            </CardDescription>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#eed8fc] flex items-center justify-center mr-3 text-[#4f0f69] font-semibold">
                                    <span className="text-sm">RG</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Rahul Gupta</p>
                                    <p className="text-sm text-gray-600">Senior Frontend Developer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Stats Section */}
                <div className="text-center mt-12">
                    <Card className="mx-auto max-w-3xl bg-[#eed8fc] border-[#d08cf4]"> {/* Uses Card, applied theme colors */}
                        <CardContent className="py-8 px-6 md:px-10"> {/* Adjusted padding for content */}
                            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600"> {/* Adjusted spacing and responsiveness */}
                                <div className="flex items-center justify-center">
                                    <Users className="mr-2 h-4 w-4 text-[#4f0f69]" /> {/* Applied theme color */}
                                    <span>10,000+ Students Enrolled</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <CheckCircle className="mr-2 h-4 w-4 text-[#4f0f69]" /> {/* Applied theme color */}
                                    <span>5,000+ Courses Completed</span>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Trophy className="mr-2 h-4 w-4 text-[#4f0f69]" /> {/* Applied theme color */}
                                    <span>85% Job Placement Rate</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        </>
    )
}