import React from 'react'
import Marquee from 'react-fast-marquee'
const Marque = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-[#181818] text-neutral-200'>
        <div className='w-[50%] flex flex-col'>
            <div className="flex space-y-2 flex-col text-center mb-14">
                <span className='text-5xl font-bold'> Skills that i have</span>
                <span className='text-2xl'>
                    These are the technologies I've worked with
                </span>
            </div>
            <Marquee>
                <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
                    Hey
                    </div>
            </Marquee>
        </div>


    </div>
  )
}

export default Marque