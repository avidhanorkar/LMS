import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200 && !scrolled) {
            setScrolled(true);
        } else if (window.scrollY <= 200 && scrolled) {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    return (
        <header className={`fixed w-screen top-0 h-20 bg-[#f1eefe] flex justify-between items-center px-20 ${scrolled ? 'bg-[#f1feefe]/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}>
            <p className='text-3xl font-semibold text-[#5a39ff] font-serif'>EduSphere</p>
            <div className=' flex flex-row gap-5 items-center'>
                <p className='cursor-pointer text-[18px] font-semibold text-gray-500'>Courses</p>
                <p className='cursor-pointer text-[18px] font-semibold text-gray-500'>Resources</p>
                <p className='cursor-pointer text-[18px] font-semibold text-gray-500'>About</p>
                <p className='cursor-pointer text-[18px] font-semibold text-gray-500'>Contact</p>
                <Button className="bg-[#e6e2fb] cursor-pointer text-gray-500 text-[18px] px-3 py-2 hover:bg-[#7d67ec] hover:text-white hover:px-4 hover:">Login</Button>
                <Button className="bg-[#e6e2fb] cursor-pointer text-gray-500 text-[18px] px-3 py-2 hover:bg-[#7d67ec] hover:text-white hover:px-4 hover:">SignUp</Button>
            </div>
        </header>
    )
}

export default Navbar