import Card from '@/components/Course/Card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Courses = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCourses = async () => {
        const response = await axios.get("http://localhost:3000/api/course/getAll");
        const courses = response.data.courses;
        console.log(courses);
        setData(courses);
        
        setLoading(false);
    }

    useEffect(() => {
        getCourses();
    }, []);
    return (
        <div className='min-h-screen bg-[#111111] flex flex-col items-center p-40 px-20'>
            <h1 className='text-6xl font-bold font-serif text-white'>Explore Our Courses</h1>
            <p className='text-lg text-gray-400 mt-2'>Discover a wide range of courses to help you achieve your learning goals.</p>

            {/* <div className="pt-20 flex flex-row flex-wrap justify-center gap-8">
             */}
            <div className="pt-20 grid grid-cols-3 gap-8">
                {data.map((course) => (
                    <Card img={course.thumbnail} key={course._id} title={course.courseName} desc={course.courseDescription} author={course.instructor} lectures={course.lectures.length} students={course.enrolledStudents.length} price={course.coursePrice} id={course._id} />
                ))}
            </div>
        </div>
    )
}

export default Courses