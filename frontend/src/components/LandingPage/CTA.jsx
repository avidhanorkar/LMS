import React from 'react'

const CTA = () => {
    return (
        <div className='bg-[#111111] min-h-[60vh] flex flex-col items-center justify-center py-10 gap-5'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[40px] font-semibold font-serif'>Join the Community</h1>
                <p className='text-gray-400 text-[20px]'>Be a part of our growing community and stay updated with the latest news and features.</p>
            </div>
            <button className='bg-[white] text-black px-6 py-3 rounded-lg mt-5 w-[20vw] text-xl font-semibold'>Get Started</button>
        </div>
    )
}

export default CTA