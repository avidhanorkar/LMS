import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='bg-[#111111] text-white min-h-[100vh] pt-20 flex items-center justify-center'>
            <div className='bg-[#222222] p-8 rounded-lg shadow-lg w-[40vw] max-w-md items-center justify-center'>
                <div className='flex items-center gap-2 text-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                    <p className='font-bold text-center'>EduLearn</p>
                </div>
                <p className='font-bold text-center text-2xl'>Create an Account</p>
                <p className='font-semibold text-center text-gray-300'>Enter Your information to get Started</p>
                <form className='space-y-4'>
                    <div>
                        <Label htmlFor="name" className='block text-sm font-medium'>Name</Label>
                        <Input placeholder="Enter your name" type="text" id="name" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <div>
                        <Label htmlFor="username" className='block text-sm font-medium'>Username</Label>
                        <Input placeholder="Enter your username" type="text" id="username" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <div>
                        <Label htmlFor="email" className='block text-sm font-medium'>Email</Label>
                        <Input placeholder="Enter your email" type="email" id="email" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <div>
                        <Label htmlFor="password" className='block text-sm font-medium'>Password</Label>
                        <Input placeholder="Enter the password" type="password" id="password" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <button type="submit" className='w-full mt-2 bg-white text-black font-semibold py-2 rounded-md cursor-pointer'>Login</button>
                </form>
                <p className='text-center text-gray-300 mt-5'>Already have an account? <Link to={'/login'} className='text-white font-semibold cursor-pointer hover:underline hover:underline-offset-4'>Login</Link></p>
                <p className='text-center text-gray-400'>Note: This is just a student login.</p>

            </div>
        </div>
    )
}

export default Register