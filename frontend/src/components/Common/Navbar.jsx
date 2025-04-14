import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { AuthContext } from '@/context/auth.context';
import axios from 'axios';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [userData, setUserData] = useState();

    const getData = async () => {
        const response = await axios.get("http://localhost:3000/api/auth/user", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });

        setUserData(response.data.user);
    }
    useEffect(() => {
        getData();
    }, [user])


    return (
        <header className={`fixed w-screen top-0 h-20 border-b-[0.1px] bg-[#09090b] text-white flex justify-between items-center px-20 z-10 `}>
            <div className='flex items-center gap-2 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
                <span className='text-2xl font-bold'>EduLearn</span>
            </div>
            <div className='flex items-center gap-4'>
                <Link to={'/'}><p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>Home</p></Link>
                <Link to={'/courses'}><p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>Courses</p></Link>
                <Link to={'/mylearning'}><p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>My Learning</p></Link>
                <Link to={''}><p className='cursor-pointer font-semibold hover:underline hover:underline-offset-4'>About</p></Link>
            </div>


            {user ?
                <div className='flex items-center gap-4'>
                    <Button onClick={logOut} className={'hover:shadow-xl bg-red-500 font-bold  shadow-slate-800 cursor-pointer'}>Log Out</Button>
                    {userData && (
                        <Link to={`/profile`}>
                            <div className='h-[40px] w-[40px] rounded-full overflow-hidden'>
                                <img
                                    className='w-full h-full object-cover rounded-full border border-gray-300'
                                    src={userData.image}
                                    alt="Profile"
                                />
                            </div>
                        </Link>
                    )}

                </div>
                :
                <div className='flex items-center gap-4'>
                    <Link to={'/login'}><Button className={'bg-white text-black hover:shadow-xl shadow-slate-800 cursor-pointer'}>Login</Button></Link>
                    <Link to={'/register'}><Button variant="solid" className={'hover:shadow-xl border shadow-slate-800 cursor-pointer'}>Sign Up</Button></Link>
                </div>
            }
        </header>
    )
}

export default Navbar