
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from "lucide-react"
import { faqData } from "../assets/faqdata"


export const FAQSection =  () => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const isOpen = (id) => openItems.includes(id)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#f6eafd] via-[#fffef0] to-[#eed8fc] flex justify-center items-center">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="h-8 w-8 text-[#4f0f69]" /> {/* Applied theme color */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4f0f69]">Frequently Asked Questions</h2> {/* Applied theme color */}
          </div>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl"> {/* Changed text-muted-foreground to text-gray-700 */}
            Got questions? We've got answers! Find everything you need to know about our platform, courses, and
            resources.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqData.map((faq) => (
            <Card key={faq.id} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardHeader
                className="cursor-pointer hover:bg-[#f6eafd] transition-colors p-4 md:p-6 lg:p-8" // Adjusted padding and hover color
                onClick={() => toggleItem(faq.id)}
            >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-left text-lg font-semibold pr-4 text-[#4f0f69]">{faq.question}</CardTitle> {/* Applied theme color */}
                  <Button className="shrink-0 bg-transparent hover:bg-[#d08cf4] text-[#4f0f69] hover:text-white rounded-full p-2"> {/* Styled button */}
                    {isOpen(faq.id) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </Button>
                </div>
              </CardHeader>

              {isOpen(faq.id) && (
                <CardContent className="pt-0 pb-6 px-6 md:px-8 lg:px-10"> {/* Adjusted padding for content */}
                  <div className="border-t pt-4">
                    <CardDescription className="leading-relaxed text-gray-700">{faq.answer}</CardDescription> {/* Used CardDescription */}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <Card className="mx-auto max-w-2xl bg-[#eed8fc] border-[#d08cf4]"> {/* Applied theme colors for card */}
            <CardContent className="pt-6"> {/* Used CardContent */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MessageCircle className="h-6 w-6 text-[#4f0f69]" /> {/* Applied theme color */}
                <h3 className="text-xl font-semibold text-[#4f0f69]">Still have questions?</h3> {/* Applied theme color */}
              </div>
              <p className="text-gray-700 mb-6"> {/* Changed text-muted-foreground to text-gray-700 */}
                Can't find the answer you're looking for? Our support team is here to help you get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#4f0f69] hover:bg-[#6a1a8c] text-[#fffef0]"> {/* Applied theme button styling */}
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button className="bg-[#fffef0] text-[#4f0f69] border border-[#d08cf4] hover:bg-[#f6eafd]"> {/* Applied theme button styling */}
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Browse Help Center
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="text-center p-6 bg-[#eed8fc]"> {/* Used Card, applied theme color */}
            <div className="text-2xl font-bold text-[#4f0f69] mb-2">24/7</div> {/* Applied theme color */}
            <div className="text-sm text-gray-600">Community Support</div> {/* Changed text-muted-foreground */}
          </Card>
          <Card className="text-center p-6 bg-[#eed8fc]"> {/* Used Card, applied theme color */}
            <div className="text-2xl font-bold text-[#4f0f69] mb-2">{"<2hrs"}</div> {/* Applied theme color */}
            <div className="text-sm text-gray-600">Average Response Time</div> {/* Changed text-muted-foreground */}
          </Card>
          <Card className="text-center p-6 bg-[#eed8fc]"> {/* Used Card, applied theme color */}
            <div className="text-2xl font-bold text-[#4f0f69] mb-2">98%</div> {/* Applied theme color */}
            <div className="text-sm text-gray-600">Student Satisfaction</div> {/* Changed text-muted-foreground */}
          </Card>
        </div>
      </div>
    </section>
  )
}
