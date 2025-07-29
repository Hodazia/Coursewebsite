
export const languages = [
    { value: "javascript", label: "JavaScript", extension: "js" },
    { value: "typescript", label: "TypeScript", extension: "ts" },
    { value: "python", label: "Python", extension: "py" },
    { value: "java", label: "Java", extension: "java" },
    { value: "cpp", label: "C++", extension: "cpp" },
    { value: "html", label: "HTML", extension: "html" },
    { value: "css", label: "CSS", extension: "css" },
    { value: "json", label: "JSON", extension: "json" },
    { value: "sql", label: "SQL", extension: "sql" },
  ]

 
export const defaultCode = {
    javascript: `// Welcome to the Code Playground!
  // Write your JavaScript code here
  
  function greet(name) {
    return \`Hello, \${name}! Welcome to CZEW Playground.\`;
  }
  
  console.log(greet("Developer"));
  
  // Try some array methods
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map(n => n * 2);
  console.log("Doubled numbers:", doubled);`,
  
    python: `# Welcome to the Code Playground!
  # Write your Python code here
  
  def greet(name):
      return f"Hello, {name}! Welcome to CZEW Playground."
  
  print(greet("Developer"))
  
  # Try some list operations
  numbers = [1, 2, 3, 4, 5]
  doubled = [n * 2 for n in numbers]
  print("Doubled numbers:", doubled)`,
  
    html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CZEW Playground</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
          }
          .container {
              background: rgba(255, 255, 255, 0.1);
              padding: 30px;
              border-radius: 10px;
              backdrop-filter: blur(10px);
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>🚀 Welcome to CZEW Playground!</h1>
          <p>Start building amazing things with HTML, CSS, and JavaScript.</p>
          <button onclick="alert('Hello from the playground!')">Click me!</button>
      </div>
  </body>
  </html>`,
  
    css: `/* Welcome to the Code Playground! */
  /* Write your CSS code here */
  
  .playground-demo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    border-radius: 12px;
    color: white;
    font-family: 'Arial', sans-serif;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .playground-demo h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .playground-demo p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
  
  .btn {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }`,
  
    typescript: `// Welcome to the Code Playground!
  // Write your TypeScript code here
  
  interface User {
    name: string;
    age: number;
    skills: string[];
  }
  
  function greetUser(user: User): string {
    return \`Hello, \${user.name}! You know \${user.skills.join(', ')}.\`;
  }
  
  const developer: User = {
    name: "Developer",
    age: 25,
    skills: ["JavaScript", "TypeScript", "React", "Node.js"]
  };
  
  console.log(greetUser(developer));
  
  // Generic function example
  function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
  }
  
  const numbers: number[] = [1, 2, 3, 4, 5];
  const firstNumber = getFirstElement(numbers);
  console.log("First number:", firstNumber);`,
  
    java: `// Welcome to the Code Playground!
  // Write your Java code here
  
  public class Playground {
      public static void main(String[] args) {
          System.out.println("Hello, Developer! Welcome to CZEW Playground.");
          
          // Array example
          int[] numbers = {1, 2, 3, 4, 5};
          System.out.println("Original array:");
          printArray(numbers);
          
          // Double the numbers
          for (int i = 0; i < numbers.length; i++) {
              numbers[i] *= 2;
          }
          
          System.out.println("Doubled array:");
          printArray(numbers);
      }
      
      public static void printArray(int[] arr) {
          for (int num : arr) {
              System.out.print(num + " ");
          }
          System.out.println();
      }
  }`,
  
    cpp: `// Welcome to the Code Playground!
  // Write your C++ code here
  
  #include <iostream>
  #include <vector>
  #include <string>
  
  using namespace std;
  
  int main() {
      cout << "Hello, Developer! Welcome to CZEW Playground." << endl;
      
      // Vector example
      vector<int> numbers = {1, 2, 3, 4, 5};
      
      cout << "Original numbers: ";
      for (int num : numbers) {
          cout << num << " ";
      }
      cout << endl;
      
      // Double the numbers
      for (int& num : numbers) {
          num *= 2;
      }
      
      cout << "Doubled numbers: ";
      for (int num : numbers) {
          cout << num << " ";
      }
      cout << endl;
      
      return 0;
  }`,
  
    json: `{
    "playground": {
      "name": "CZEW Code Playground",
      "version": "1.0.0",
      "description": "Interactive coding environment for learning and practice",
      "features": [
        "Multi-language support",
        "Real-time editing",
        "Syntax highlighting",
        "Code execution",
        "Theme customization"
      ],
      "supportedLanguages": [
        "JavaScript",
        "TypeScript", 
        "Python",
        "Java",
        "C++",
        "HTML",
        "CSS",
        "SQL"
      ],
      "author": "CZEW Team",
      "contact": {
        "website": "https://czew.dev",
        "email": "hello@czew.dev"
      }
    }
  }`,
  
    sql: `-- Welcome to the Code Playground!
  -- Write your SQL code here
  
  -- Create a sample table
  CREATE TABLE students (
      id INTEGER PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INTEGER,
      course VARCHAR(50),
      grade DECIMAL(3,2)
  );
  
  -- Insert sample data
  INSERT INTO students (name, age, course, grade) VALUES
  ('Alice Johnson', 22, 'Computer Science', 3.8),
  ('Bob Smith', 21, 'Data Science', 3.6),
  ('Carol Davis', 23, 'Web Development', 3.9),
  ('David Wilson', 20, 'Mobile Development', 3.7);
  
  -- Query examples
  SELECT * FROM students;
  
  SELECT name, course, grade 
  FROM students 
  WHERE grade > 3.7 
  ORDER BY grade DESC;
  
  SELECT course, AVG(grade) as average_grade, COUNT(*) as student_count
  FROM students 
  GROUP BY course;`,
  }
