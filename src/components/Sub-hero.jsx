    import React from "react";
    const Subhero = () => {
    return (
        <div className="bg-green-800 md:py-16 py-8">
        <div className="w-mobile md:w-medium mx-auto  grid md:grid-cols-2 justify-center   items-center relative h-[300px]">
            <div className="space-y-5 px-10 text-white">
            <h2 className="text-4xl font-bold">
                Play Online poker
            </h2>
            <p className="text-4xl font-bold"> 
            Get the ultimate exprience by playing G-poker
            </p>
            <div>
                <a
                target="_blank"
                href="https://play.google.com/store/search?q=mech+connect&c=apps"
                >
                <button className=" py-3 bg-my_yellow text-yellow-600 rounded-full  flex space-x-5">
                    <span className="text-2xl" >Download game</span>
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    </span>
                </button>
                </a>
            </div>
            </div>
            <div></div>
        </div>
        </div>
    );
    };

    export default Subhero;