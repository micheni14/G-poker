import React from 'react'
import { GiCard2Spades } from 'react-icons/gi';
import { FaBitcoin } from 'react-icons/fa';
import { FaCoins} from 'react-icons/fa';

function About() {
return (
    <div>
    <div className="bg-neutral-950 p-4 z-10 h-[60vh] " id ="About us">
            <div className="w-mobile box shadow-2xl  mx-auto ">
                <ul>
                <div className=' text-white p-4 '>
                        <div className='pb-8  flex items-center'>
                            <GiCard2Spades fontSize={28} />
                            <p className='p-4 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div className='pb-8 flex items-center'>
                    <FaBitcoin  fontSize={28}/>
                            <p className='p-4 font-semibold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <div className='pb-8 flex items-center'>
                            <FaCoins fontSize={28} />
                            <p className='p-4 font-semibold'> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </div>
            </div>
            </ul>
            <div>
            </div>
        </div>
        <div className=" absolute bg-gray-100 z-10   top-0 bottom-0  "></div>
        </div>
    </div>
)
}

export default About