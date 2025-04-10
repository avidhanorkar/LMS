import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    return (
        <div className='w-[100vw] min-h-[50vh] py-20 bg-[#09090b]'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-serif text-5xl font-bold'>Testimonials</p>
                <p className='text-gray-400 text-xl'>See what our users have to say about EduLearn</p>
            </div>

            <div className='flex flex-row w-[100vw] items-center justify-center gap-10 mt-16 flex-wrap'>
                <TestimonialCard Name={"Aarohi Mehta"} Role={"Student"} testi={"“EduLearn has completely changed how I learn online. The AI-powered lecture summaries help me revise faster, and the quizzes keep me sharp. Earning certificates after each course gives me real motivation!”"} />
                <TestimonialCard Name={"Rahul Deshmukh"} Role={"Instructor"} testi={"Creating and managing my courses on EduLearn has been a breeze. The platform is intuitive, and I love how I can directly engage with my students through the community features."} />
                <TestimonialCard Name={"Snehal Kulkarni"} Role={"Admin"} testi={"“From user management to monitoring course quality, EduLearn gives me all the tools I need. The role-based dashboard keeps everything organized and efficient.”"} />
            </div>
        </div>
    )
}

export default Testimonials