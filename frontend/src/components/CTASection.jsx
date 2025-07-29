import { Button } from "./ui/Button"
import { Play } from "lucide-react"

export const CTASection = () => {
    return (
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Coding Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                Transform your skills today and join thousands of successful developers who started their journey with
                us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}