import React from 'react'
// import Button from '../components/Button';



function Contact() {
    return (
    
    <div  id= "contact">
        <div className=' md:grid grid-cols-2 '>
        <div className=" bg-black top-0 left-0 right-0 bottom-0  h-full z-50  flex justify-center items-center ">
        <div className=" md:w-[500px] w-[78%]">
            <div className="mb-4">
                <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Name
            </label>
            <input
                type="text"
                name="from_name"
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
                />
            </div>
            <div className="mb-4">
                <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Email
            </label>
                <input
                type="email"
            name='email'
                className="appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
            />
            </div>
            <div className="mb-4">
                <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Message
            </label>
                        <textarea
                            name='message'
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                required
            />
        </div>
        <div className="flex items-center justify-between">
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        
            >
            Submit
            </button>
            <button
            type="submit"
            className="bg-gray-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            Cancel
            </button>
        </div>
        
    </div>
    </div>
            <div className='bg-black text-white h-full w-full '>
                <div className="grid grid-cols-2 gap-10">
                            <div className='flex justify-center items-center py-28'>
                            <ul className='list-none '>
    <li className='text-xl sm:text-2xl'>Quick links</li>
    <li className='text-gray-400'>Home</li>
    <li className='text-gray-400'>About us</li>
    <li className='text-gray-400'>Tournaments</li>
    <li className='text-gray-400'>Contact</li>
    </ul>
</div>

                    <div className='py-28'>
                        <p className='text-white text-xl sm:text-2xl'>Say hello</p>
                        <p className='text-gray-400'>Gpoker@example.co.ke</p>
                                <p className='text-gray-400'>Gpoker@example.com</p>
                                <div className='space-x-3 '>
                                <i class='bx bxl-facebook-circle bx-sm'></i>
                                <i class='bx bxl-instagram-alt  bx-sm' ></i>
                                <i class='bx bxl-twitter  bx-sm' ></i>
                                </div>
                    </div>

            
            </div>
            </div>
            </div>
            </div>
   
)
}

export default Contact;