import React from 'react'

const TestimonialCard = ({Name, Role, testi}) => {
  return (
    <div className='h-[200px] gap-3 w-[300px] bg-[#09090b] border rounded-lg shadow-lg flex flex-col p-5'>
        <div className='flex flex-row items-center gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <div className='flex flex-col '>
                <p className='text-[20px] font-semibold'>{Name || "John Doe"}</p>
                <p className='text-gray-400'>{Role || "User"}</p>
            </div>
        </div>

        <p>{testi?.length > 125 ? testi.slice(0, 125) + '...' : testi}</p>
    </div>
  )
}

export default TestimonialCard