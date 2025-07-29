// Define the controller here
const nodemailer = require("nodemailer");



module.exports.feedback_contr = async (req,res) => {
    // send it to the backend
    const {name,email,query} = req.body;

    // Validate incoming data (basic validation)
    if (!name || !email || !query) {
        return res.status(400).json(
            { success: false, 
            message: "Please provide name, email, and query." });
    }

// have a general HTML Template for this
const thankYouHtmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback!</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: "Inter", sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div class="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full text-center">
        <h1 class="text-4xl font-extrabold text-blue-600 mb-6">Hey ${name} Thank You!</h1>
        <p class="text-gray-700 text-lg mb-4">
            We sincerely appreciate you taking the time to send us your query/feedback.
            Your input is incredibly valuable and helps us improve our website and services.
        </p>
        <p class="text-gray-700 text-lg mb-4">
            Your query <strong>${query}</strong> , has been received.
        </p>
        <p class="text-gray-700 text-lg mb-6">
            We are constantly working to enhance your experience. Please keep an eye out for
            new features and updates in our upcoming versions!
        </p>
        <div class="mt-8">
            <a href="/" class="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-md
               hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Return to Homepage
            </a>
        </div>
        <p class="text-gray-500 text-sm mt-8">
            &copy; 2025 ByteCode . All rights reserved.
        </p>
    </div>
</body>
</html>
`;

    // create a nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zia23hoda@gmail.com', // Your Gmail address
          pass: process.env.GMAIL_APP_AUTH, // Use an App Password (not your Gmail password)
        },
    })

    async function sendEmail() {
        try {
          const mailOptions = {
            from: 'zia23hoda@gmail.com',
            to: email,
            subject: `Query Received Successfully `,
            text: 'Hello, this is a plain-text email!',
            html: thankYouHtmlTemplate, // Optional HTML content
          };
      
          const info = await transporter.sendMail(mailOptions);
          console.log('Email sent:', info.messageId);

          return res.status(200).json(
            { success: true,
             message: "Your query has been sent successfully!" });
        } 
        catch (err) {
          console.error('Error sending email:', err);
          return res.status(500).json(
            { success: false, 
            message: "Failed to send your query. Please try again later." });
        }
      }
      
      sendEmail();      

} 