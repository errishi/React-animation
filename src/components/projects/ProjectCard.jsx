import React from 'react'
import { navImg } from '../../assets/assets';

const ProjectCard = ({image1, image2}) => {
  return (
    <>
      <div className='w-1/2 group transition-all relative cursor-pointer hover:rounded-[70px] overflow-hidden h-full'>
        <img className='w-full h-full object-cover' src={image1} alt="image" />
        <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
          <h2 className='uppercase text-4xl font-[font1] border-2 px-4 pt-1.5 text-white border-white rounded-full'>View Project</h2>
        </div>
      </div>
      <div className='w-1/2 group transition-all relative cursor-pointer hover:rounded-[70px] overflow-hidden h-full'>
        <img className='w-full h-full object-cover' src={image2} alt="image" />
        <div className='opacity-0 group-hover:opacity-100 transition-all absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10'>
          <h2 className='uppercase text-4xl font-[font1] border-2 px-4 pt-1.5 text-white border-white rounded-full'>View Project</h2>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;