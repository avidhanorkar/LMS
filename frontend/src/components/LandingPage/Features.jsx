import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
    return (
        <div className='bg-[#111111] w-[100vw] min-h-[50vh] py-20'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-serif text-5xl font-bold'>Features</p>
                <p className='text-gray-400 text-xl'>Everything you need to create, manage, and deliver online courses.</p>
            </div>
            <div className='flex flex-row w-[100vw] items-center justify-center gap-10 mt-16 flex-wrap'>
                <FeatureCard Feature={"Role-Based Dashboards"} Desc={"Separate dashboards for Students, Instructors, and Admins to ensure a focused and streamlined experience tailored to each user's role."} />
                <FeatureCard Feature={"Course Creation & Video Upload"} Desc={"Instructors can easily create courses, upload lecture videos, and organize content with a simple and intuitive interface."} />
                <FeatureCard Feature={"Secure Payments with Razorpay"} Desc={"Users can purchase courses securely through Razorpay integration, ensuring smooth transactions and instant access."} />
                <FeatureCard Feature={"AI-Powered Lecture Summaries"} Desc={"Get automatic summaries of video lectures using advanced AI tools—perfect for quick reviews and efficient learning."} />
                <FeatureCard Feature={"Student Community"} Desc={"After completing a course, learners can take a quiz and earn certificates if they score above 80%, adding value to their learning journey."} />
                <FeatureCard Feature={"Quizzes & Certifications"} Desc={"Join interactive student communities to discuss topics, share insights, and grow your network of peers and mentors."} />
            </div>
        </div>
    )
}

export default Features