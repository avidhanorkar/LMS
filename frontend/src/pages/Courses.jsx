import Card from '@/components/Course/Card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Courses = () => {

    const [data, setData] = useState([]);

    const getCourses = async () => {
        const response = await axios.get("http://localhost:3000/api/course/getAll");
        const courses = response.data.courses;
        console.log(courses);
        setData(courses);
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
                    <Link to={`/course/${course._id}`} key={course._id}>
                        <Card img={course.thumbnail} key={course._id} title={course.courseName} desc={course.courseDescription} author={course.instructor.name} lectures={course.lectures.length} students={course.enrolledStudents.length} price={course.coursePrice} id={course._id} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Courses