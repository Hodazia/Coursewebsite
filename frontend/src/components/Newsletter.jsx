import { Link } from "react-router-dom"
import { Button } from "./ui/Button"
export const Newsletter = () => {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48
         bg-gradient-to-br from-[#f6eafd] via-[#fffef0] to-[#eed8fc] {/* Matches Hero gradient */}
         flex justify-center items-center">
          {/* Inner container for content, centered horizontally and styled as a card */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center
                            bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl {/* Matches Hero card styling */}
                            border border-[#e2b9f9] max-w-2xl mx-auto"> {/* max-w-2xl for newsletter width, mx-auto for centering */}

              {/* Heading */}
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#4f0f69]"> {/* Applied theme color */}
                Stay Updated with Our Latest Content
              </h2>

              {/* Sub-paragraph */}
              <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl"> {/* Changed text-muted-foreground to text-gray-700 */}
                Get notified about new courses, blog posts, and coding resources. Join our community of learners!
              </p>

              {/* Subscription Form */}
              <div className="mx-auto w-full max-w-sm space-y-4 mt-6"> {/* Increased space-y for better vertical spacing */}
                <form className="flex flex-col sm:flex-row gap-4"> {/* Changed to flex-col on small screens for better stacking */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 px-4 py-2 border border-gray-300 rounded-md
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out" // Styled input
                    required // Make email field required
                  />
                  <Button
                    type="submit"
                    className="text-lg px-8 bg-[#4f0f69] text-[#fffef0] hover:bg-[#6a1a8c] transition duration-200" // Applied theme button styling
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-600"> {/* Changed text-muted-foreground to text-gray-600 */}
                  By subscribing, you agree to our{" "}
                  <Link to="/privacy" className="underline underline-offset-2 text-[#4f0f69] hover:text-[#6a1a8c]"> {/* Changed href to to, applied theme link color */}
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}