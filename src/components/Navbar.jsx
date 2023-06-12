import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const offsetThreshold = 50;
    
        setIsSticky(scrollTop > offsetThreshold);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [sidebar, setsidebar] = useState(false);
    return (
    <div>
    <div className={
        isSticky
        ? "  bg-black  fixed h-20 w-full top-0 z-20"
        : " bg-black h-20 w-full "
    }
    
    >
    <div className="flex justify-between items-center w-medium mx-auto  h-16">
        <div>
<div className='text-2xl text-yellow-500 p-10'> G-poker</div>
        </div>
        
    <div className="hidden md:flex justify-between items-center w-medium mx-auto  h-16">
        <div>

        </div>
            <div className=
                "md:flex justify-between items-center space-x-40 text-slate-200">
        <ul className="flex space-x-10  ">
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="About us"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About us
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Tournaments
            </Link>
                    </li>
            <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Features
            </Link>
            </li>
        </ul>
        <div>
        <a href="#_" class="relative px-5 py-2 font-medium text-white group" id='Contact'>
<span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-yellow-600 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
<span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
<span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
<span class="relative">Contact us</span>
</a>
        </div>
        </div>
    
                    </div>
                    <div className="md:hidden block z-30 text-slate-500"
            onClick={() => setsidebar(!sidebar)} 
            >
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor" className="w-14 h-14">
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    </div>
            </div>
            <div className={
                sidebar
                    ? "bg-slate-800 h-full w-[80%] z-20 fixed top-0 md:hidden " 
                    : "h-full w-full fixed top-0 hidden"
            }
            >   
                
        {/* <div>
    <img src="" alt="logo" className="text-white" />
        </div> */}
            <div className=
                    " w-[85%] mx-auto text-white font-medium text-xl">
                    <div className=' flex justify-between'>
                        <div><img src="" alt="logo" className="text-white" /></div>
                        <div className=''
                            onClick={() => setsidebar(!sidebar)} 
                        >
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>


                        </div>
                    </div>
        <ul className="flex  flex-col space-y-8 text-center ">
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="About us"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About us
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
            >
            projects
            </Link>
                    </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Features
            </Link>
                        </li>
                        
        </ul>
        <div>
            
        </div>
        </div>
    
                </div>
        
            </div>
            <div className={
                sidebar
                    ? "bg-yellow-600 h-full w-[80%] z-20 fixed top-0 md:hidden " 
                    : "h-full w-full fixed top-0 hidden"
            }
            >   
                
        {/* <div>
    <img src="" alt="logo" className="text-white" />
        </div> */}
            <div className=
                    " w-[85%] mx-auto text-white font-medium text-xl">
                    <div className=' flex justify-between'>
                    <p>G-poker</p>
                        <div className=''
                            onClick={() => setsidebar(!sidebar)} 
                        >
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
<path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>


                        </div>
                    </div>
        <ul className="flex  flex-col space-y-8 text-center ">
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Home
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="About us"
                spy={true}
                smooth={true}
                offset={-10}
            >
                About Game
            </Link>
            </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
            >
            Tournaments
            </Link>
                    </li>
            <li className="cursor-pointer">
            <Link
            onClick={() => setsidebar(!sidebar)} 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-10}
            >
                Contact
            </Link>
                        </li>
                    
        </ul>
        <div>
            
        </div>
        </div>
        </div>
        

    
            </div>
        
        
      
    
    
);
};

export default Navbar;