import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#090909] min-h-[10vh] flex flex-row items-center justify-between px-20 py-10 gap-5'>
            <div className='flex items-center gap-2 cursor-pointer text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                <span className='text-2xl font-bold'>EduLearn</span>
            </div>

            <div className='flex items-center gap-10 text-white'>
                <p className='font-semibold'>About</p>
                <p className='font-semibold'>Contact</p>
                <p className='font-semibold'>Become an Admin</p>
            </div>

            <div>
                <p className='text-gray-400'>© 2025 EduLearn. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer