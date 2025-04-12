import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/auth/login", {
            email: user.email,
            password: user.password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(response);

        if (response.status === 200) {  
            localStorage.setItem("token", response.data.token)
            window.location.href = "/"
        }
    }

    return (
        <div className='bg-[#111111] text-white min-h-[90vh] flex items-center justify-center'>
            <div className='bg-[#222222] p-8 rounded-lg shadow-lg w-[40vw] max-w-md items-center justify-center'>
                <div className='flex items-center gap-2 text-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                    <p className='font-bold text-center'>EduLearn</p>
                </div>
                <p className='font-bold text-center text-2xl'>Welcome Back</p>
                <p className='font-semibold text-center text-gray-300'>Login</p>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="email" className='block text-sm font-medium'>Email</Label>
                        <Input value={user.email} onChange={handleChange} name="email" placeholder="Enter your email" type="email" id="email" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <div>
                        <Label htmlFor="password" className='block text-sm font-medium'>Password</Label>
                        <Input value={user.password} onChange={handleChange} name="password" placeholder="Enter the password" type="password" id="password" className='mt-1 block w-full p-2 border border-gray-500 rounded-md' required />
                    </div>
                    <button type="submit" className='w-full mt-2 bg-white text-black font-semibold py-2 rounded-md cursor-pointer'>Login</button>
                </form>
                <p className='text-center text-gray-300 mt-5'>Don't have an account? <Link to={'/register'} className='text-white font-semibold cursor-pointer hover:underline hover:underline-offset-4'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default Login