import { AuthContext } from '@/context/auth.context'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@/components/MyCourses/Card';
import { Link } from 'react-router-dom';

const MyCourses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/course/getEnrolledCourses`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            setCourses(response.data.courses);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCourses();
    }, [])
    return (
        <div className='bg-[#09090b] w-full min-h-screen flex flex-col items-center justify-center py-40'>
            {courses.length == 0 ? <h1 className='text-white text-2xl'>No courses enrolled</h1> :
                <div className='flex flex-col flex-wrap gap-4 justify-center '>
                    <h1 className='text-6xl font-bold font-serif text-white text-center'>My Courses</h1>
                    <p className='text-lg text-gray-400 mt-2 text-center'>Discover a wide range of courses to help you achieve your learning goals.</p>
                    <div className="pt-20 grid grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <Link to={`/course/learn/${course._id}`} key={course._id}>
                            <Card img={course.thumbnail} key={course._id} title={course.courseName} desc={course.courseDescription} author={course.instructor.name} lectures={course.lectures.length} students={course.enrolledStudents.length} price={course.coursePrice} id={course._id} />
                        </Link>
                    ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default MyCourses