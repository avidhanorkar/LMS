import React from 'react'

const FeatureCard = ({ Feature, Desc }) => {
  return (
    <div className='w-[40vw] h-[60px] gap-5 flex flex-row '>
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg>

      <div className='flex flex-col'>
        <p className='text-[20px] font-bold'>{Feature}</p>
        <p className='text-gray-400'>{Desc}</p>
      </div>
    </div>
  )
}

export default FeatureCard