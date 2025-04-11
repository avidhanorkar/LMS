import React from 'react'
import { Users, FileText, ArrowRight } from "lucide-react"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Card = ({ title, author, desc, students, lectures, price, id, img }) => {
    return (
        <div className='w-[25vw] min-h-[60vh] bg-[black] rounded-lg'>
            <img src={img} className='bg-blue-600 h-[30vh] w-full rounded-t-lg' alt="" />

            <div className='p-5 flex flex-col gap-4'>
                <div>
                    <p className='text-2xl text-white font-bold font-serif'>{title}</p>
                    <p className='text-gray-500 text-sm'>By {author}</p>
                </div>

                <div>
                    <p className='text-gray-500 text-md'>{desc}</p>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <p className='flex flex-row gap-3 text-white items-center'>
                        <Users className="h-4 w-4 text-white" />
                        {students} Students
                    </p>
                    <p className='flex flex-row gap-3 text-white items-center'>
                        <FileText className="h-4 w-4 text-white" />
                        {lectures} Lectures
                    </p>
                </div>

                <div className='text-white flex flex-row gap-3 items-center justify-between'>
                    <p>$ {price}</p>
                    <Link to={`/course/${id}`}><Button className={'text-black bg-white'}>View Course <ArrowRight /></Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card