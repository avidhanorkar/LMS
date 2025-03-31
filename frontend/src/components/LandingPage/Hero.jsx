import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className='relative min-h-[80vh] pt-20'>

            <div className='w-full flex flex-col items-center justify-center mt-20 gap-5'>
                <p className="text-6xl font-bold text-center text-[#7d67ec]">
                    Empower Your Learning Journey <br /> With AI Driven Education
                </p>
                <p className='text-gray-500 text-center text-2xl'>Experience next-generation learning  with personalized AI tutoring,<br /> interactive lessons, and a vibrant community of learners and educators.</p>
                <div className='flex flex-row gap-10'>
                    <Button className="bg-[#7d67ec] text-xl h-[50px] rounded-full text-white w-36">Join Today</Button>
                    <Button className="bg-[#7d67ec] text-xl h-[50px] rounded-full text-white w-36">Join Today</Button>
                </div>

                <div className='pt-20 transform -translate-x-1/2 animate-bounce duration-1000'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>

        </section>
    )
}

export default Hero