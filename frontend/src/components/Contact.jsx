import { useState } from "react"
import { ToastContainer, toast} from 'react-toastify';
import { BACKEND_URL } from "../assets/backend_url";

export const Contact = () => {
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [query,setquery] = useState('');

    const submitform = async (e) => {
        e.preventDefault();
        setname('');
        setemail('');
        setquery('');

    // send  a backend request to the nodemailer API to send the 
    // query to my mail, once the query is sent , send a toast message 
    // that the query has been sent and it will be processed in the further 
    // updates

    const response = await axios.post(`${BACKEND_URL}/api/web/contact-sendquery`,{
        name
    })

    toast.success("Your query has been sent successfully!")

    }

    return (
        <>
        <div className="min-h-screen p-4 flex bg-[#fffef0]
         justify-center items-center">

        <form
            className="bg-white p-8 rounded-lg shadow-xl w-full 
            max-w-md flex flex-col items-center space-y-6"
            onSubmit={submitform}
            >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>

                {/* Name Input */}
                <div className="w-full">
                    <label htmlFor="name" className="block text-gray-700 
                    text-sm font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border 
                        border-gray-300 rounded-md focus:outline-none
                         focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required // Make name field required
                    />
                </div>

                {/* Email Input */}
                <div className="w-full">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required // Make email field required
                    />
                </div>

                {/* Query Textarea */}
                <div className="w-full">
                    <label htmlFor="query" className="block text-gray-700 text-sm font-semibold mb-2">Query</label>
                    <textarea
                        id="query"
                        placeholder="Enter your query"
                        rows="5" // Set a default number of rows
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y transition duration-200 ease-in-out"
                        value={query}
                        onChange={(e) => setquery(e.target.value)}
                        required // Make query field required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Submit Query
                </button>

                
                <ToastContainer
                    position="top-right" // Position of the toast
                    autoClose={4000} // Close after 5 seconds
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </form>
        </div>
        </>
    )

}