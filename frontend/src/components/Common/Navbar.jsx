import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20 && !scrolled) {
            setScrolled(true);
        } else if (window.scrollY <= 20 && scrolled) {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    return (
        <header className={`fixed w-screen top-0 h-20 border-b-[0.1px] bg-[#09090b] text-white flex justify-between items-center px-20 ${scrolled ? 'bg-[#f1feefe]/80 backdrop-blur-sm shadow-lg z-1' : 'bg-transparent'
            }`}>
            <div className='flex items-center gap-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                <span className='text-2xl font-bold'>EduLearn</span>
            </div>
            <div className='flex items-center gap-4'>
                <p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>Courses</p>
                <p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>Resources</p>
                <p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>About</p>
                <p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>Contact</p>
            </div>
            <div className='flex items-center gap-4'>
                <Button className={'bg-white text-black hover:shadow-xl shadow-slate-800 cursor-pointer'}>Login</Button>
                <Button variant="solid" className={'hover:shadow-xl border shadow-slate-800 cursor-pointer'}>Sign Up</Button>
            </div>
        </header>
    )
}

export default Navbar