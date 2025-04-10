import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
    return (
        <section className='relative min-h-[80vh] pt-20 px-20'>

            <div className='w-full flex flex-row items-center justify-center h-full  gap-5'>
                <div className='w-1/2 flex flex-col justify-center h-full'>
                    <div className='flex gap-3 flex-col'>
                        <p className='text-6xl font-bold font-serif'>EduLearn</p>
                        <p className='text-4xl font-bold font-serif'>Empower Your Learning Journey with EduLearn 🚀</p>
                        <p className='text-gray-400'>Learn at your pace, from the best instructors. Get certified, connect with peers, and level up your skills — all in one platform.</p>
                    </div>
                    <div className='pt-8 flex gap-5'>
                        <Button className={'bg-white text-black hover:shadow-xl shadow-slate-800 cursor-pointer'}>
                            Get Started
                        </Button>
                        <Button variant="solid" className={'hover:shadow-xl border shadow-slate-800 cursor-pointer'}>
                            Explore Courses
                        </Button>
                    </div>
                </div>
                <div className='w-1/2 h-[70vh] flex justify-center items-center'>
                    <img src="/hero.svg" className='h-[70vh]' alt="" />
                </div>
            </div>

        </section>
    )
}

export default Hero