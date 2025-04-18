import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/auth.context';
import { ArrowLeft, BookOpen, Clock, Download, ExternalLink, NotebookPen, ScreenShare, User } from 'lucide-react'
import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';

const CoursePage = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null); // Initialize course state to null
    const [loading, setLoading] = useState(true); // Add a loading state
    const token = localStorage.getItem('token');
    const { user } = useContext(AuthContext);
    const [bought, setBought] = useState(false);

    const handleClick = async () => {
        const response = await fetch(`http://localhost:3000/api/course/purchase`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ courseId: id })
        })

        if (response.ok) {
            const data = await response.json();
            window.location.href = `/mylearning`;
        }
    }

    const getCourse = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/course/getById/${id}`, {
                method: "GET"
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error fetching course data: ${errorData?.message || 'An unexpected error occurred'}`);
                window.location.href = "/courses";
                return;
            }

            const data = await response.json();
            if (data.course.enrolledStudents?.includes(user.user.id)) {
                setBought(true);
            }
            

            setCourse(data.course);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching course:", error);
            alert("An unexpected error occurred while fetching course data.");
            window.location.href = "/courses";
            setLoading(false); // Set loading to false even if there's an error
        }
    }

    useEffect(() => {
        getCourse();
    }, [id]);

    if (loading) {
        return <div className='grid place-items-center py-40 bg-[#111] p-20 min-h-screen text-white'>Loading course data...</div>; // Or a more sophisticated loading indicator
    }

    if (!course) {
        return <div className='grid place-items-center py-40 bg-[#111] p-20 min-h-screen text-white'>Error loading course.</div>; // Handle the case where course is still null after loading (e.g., API error)
    }

    return (
        <div className='grid gap-2 justify-center py-40 bg-[#111] p-20 min-h-screen '>
            <div className='text-white text-lg flex gap-3 items-center cursor-pointer hover:bg-[#1f1f1f] px-3 py-2 w-fit rounded-full font-semibold'>
                <ArrowLeft className='text-white cursor-pointer' />
                <p>Back to Courses</p>
            </div>
            <div className='grid grid-cols-3 gap-4 h-[80vh] w-[80vw]'>
                <div className='col-span-2  rounded-lg flex flex-col gap-5'>
                    <img src={`${course.thumbnail}`} className='w-full rounded-lg' alt={course.courseName} />
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-white text-4xl font-bold font-serif'>{course.courseName}</h1>
                        <div className='flex flex-row gap-5 items-center'>
                            <p className='text-white flex text-md flex-row items-center gap-2'><User className='text-gray-500' />{course.enrolledStudents?.length || 0} students enrolled</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><BookOpen className='text-gray-500' />{course.lectures?.length || 0} lectures</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><NotebookPen className='text-gray-500' />{course.quizzes?.length || 0} quizzes</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <p className='text-white text-lg font-semibold'>Course Description</p>
                        <p className='text-gray-400 text-md'>{course.courseDescription}</p>
                    </div>

                    <Link to={`/profile/${id}`}>
                        <div className='flex flex-row gap-5 '>
                            <img src={course.instructor.image} className='h-16 rounded-full' alt="" />
                            <div className='flex flex-col justify-center'>
                                <p className='text-white text-2xl font-bold font-serif'>{course.instructor.name}</p>
                                <p className='text-gray-400 text-md'>Course Instructor</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='bg-[#09090b] border-2 border-white p-10 rounded-lg sticky top-28 h-fit'>
                    <p className='text-white text-3xl font-bold '>$ {course.coursePrice}</p>
                    <p className='text-gray-400 pt-2'>One time payment, lifetime access</p>

                    <div className='btn'>
                        <Button
                            onClick={!bought ? handleClick : () => window.location.href = `/course/${id}`}
                            className="bg-white text-black hover:shadow-xl text-md shadow-slate-800 cursor-pointer w-full mt-5"
                        >
                            {!bought ? 'Enroll Now' : 'Go to Course'}
                        </Button>

                    </div>

                    <div className='flex flex-col text-white mt-5'>
                        <p className='font-semibold text-lg'>This course includes: </p>

                        <div className='flex flex-col gap-2 items-start mt-5'>
                            <p className='text-white flex text-md flex-row items-center gap-2'><User />{course.enrolledStudents?.length || 0} students enrolled</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><BookOpen />{course.lectures?.length || 0} lectures</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><NotebookPen />{course.quizzes?.length || 0} quizzes</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><Clock /> Lifetime Access</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'>
                                <ScreenShare />
                                Access on mobile and desktop</p>
                            <p className='text-white flex text-md flex-row items-center gap-2'><Download />Certificate on course completion</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursePage