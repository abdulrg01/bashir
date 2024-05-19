import React from 'react'

export default function ExperienceCard({ img, title }) {
  return (
    <div className='flex flex-col gap-5 p-10 mx-12 my-5 items-center bg-[#222831] dark:bg-[#222831] rounded-2xl'>
      <img src={img} alt={title} className='w-13 h-8' />
      <p className=' text-[12px] font-normal'>{title}</p>
    </div>
  )
}
