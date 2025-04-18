import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const LearnCourse = () => {

    const { id } = useParams();
    const [course, setCourse] = useState([]);

    const getCourse = async () => {
        try {
            const respone = await fetch(`http://localhost:3000/api/course/getById/${id}`, {
                method: "GET",
            })
            const data = await respone.json();
            console.log(data.course);
            setCourse(data.course);
        } catch (error) {
            console.error("Error fetching course:", error);
            alert("An unexpected error occurred while fetching course data.");
            window.location.href = "/courses";
        }
    }

    useState(() => {
        getCourse();
    }, [id])

    return (
        <div className='flex flex-row min-h-screen bg-[#09090b] text-white pb-10 pt-24 px-8 gap-5'>

            <div className='rounded-lg shadow-lg w-2/3 '>
                <video className='w-full h-3/4 rounded-lg' controls>
                    {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
                </video>
                <p className='text-4xl font-semibold font-serif pt-2'>{course.courseName}</p>
                <p className='text-xl pt-1 text-gray-400'>{course.courseDescription}</p>

                <Link to={`/profile/${id}`}>
                    <div className='flex flex-row gap-5 bg-[#333333] rounded-lg h-fit p-4 mt-5 items-center'>
                        <img src={course.instructor?.image} className='h-12 rounded-full' alt="" />
                        <div className='flex flex-col justify-center'>
                            <p className='text-white text-2xl font-bold font-serif'>{course.instructor?.name}</p>
                            <p className='text-gray-300 text-md'>Course Instructor</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='flex flex-col gap-5 rounded-lg p-5 w-1/3 bg-[#333333] min-h-screen'>
                <p className='text-2xl font-serif font-bold'>AI Summary of the Lecture</p>
            </div>
        </div>
    )
}

export default LearnCourse