
import { Link } from "react-router-dom"
import { Button } from "./ui/Button"

import { languages } from "../assets/code_editor_assets"
import { defaultCode } from "../assets/code_editor_assets"
// some default code for every languages

 
export const CodeEditor = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState(defaultCode.javascript)
  const [theme, setTheme] = useState("vs-dark")
  const [fontSize, setFontSize] = useState(14)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const editorRef = useRef(null)

  useEffect(() => {
    setCode(defaultCode[selectedLanguage] || "")
  }, [selectedLanguage])

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("Running code...")

    // Simulate code execution
    setTimeout(() => {
      if (selectedLanguage === "javascript") {
        try {
          // Create a safe execution context
          const logs = []
          const mockConsole = {
            log: (...args) => logs.push(args.join(" ")),
            error: (...args) => logs.push("Error: " + args.join(" ")),
            warn: (...args) => logs.push("Warning: " + args.join(" ")),
          }

          // Replace console with mock console
          const wrappedCode = `
            const console = ${JSON.stringify(mockConsole)};
            console.log = (...args) => logs.push(args.join(' '));
            ${code}
          `

          // This is a simplified execution - in a real app, you'd use a sandboxed environment
          const func = new Function("logs", wrappedCode)
          func(logs)

          setOutput(logs.length > 0 ? logs.join("\n") : "Code executed successfully (no output)")
        } catch (error) {
          setOutput(`Error: ${error}`)
        }
      } else {
        // For other languages, show a mock output
        const mockOutputs = {
          python: `Hello, Developer! Welcome to CZEW Playground.
Doubled numbers: [2, 4, 6, 8, 10]`,
          html: "HTML rendered successfully! Check the preview tab.",
          css: "CSS compiled successfully!",
          typescript: `Hello, Developer! You know JavaScript, TypeScript, React, Node.js.
First number: 1`,
          java: `Hello, Developer! Welcome to CZEW Playground.
Original array:
1 2 3 4 5 
Doubled array:
2 4 6 8 10`,
          cpp: `Hello, Developer! Welcome to CZEW Playground.
Original numbers: 1 2 3 4 5 
Doubled numbers: 2 4 6 8 10`,
          json: "JSON is valid and properly formatted!",
          sql: `Table 'students' created successfully.
4 rows inserted.
Query executed successfully.`,
        }

        setOutput(mockOutputs[selectedLanguage] || "Code executed successfully!")
      }
      setIsRunning(false)
    }, 1500)
  }
  const resetCode = () => {
    setCode(defaultCode[selectedLanguage] || "")
    setOutput("")
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">CZEW</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/courses" className="hover:text-foreground/80">
              Courses
            </Link>
            <Link href="/dsa-sheet" className="hover:text-foreground/80">
              DSA
            </Link>
            <Link href="/roadmaps" className="hover:text-foreground/80">
              Roadmaps
            </Link>
            <Link href="/blogs" className="hover:text-foreground/80">
              Blogs
            </Link>
            <Link href="/playground" className="text-primary font-semibold">
              Playground
            </Link>
            <Link href="/contact" className="hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button className="text-blue-400">
              Sign In
            </Button>
            <Button className="text-blue-500 text-md">Get Started</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 pb-24 md:pb-4">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold">Code Playground</h1>
          </div>
          <p className="text-muted-foreground">
            Write, test, and experiment with code in multiple programming languages
          </p>
        </div>
    </div>
    </div>
    </>
  )
}