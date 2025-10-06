import React from 'react'
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 mb-3'>
        <Link to="/projects" className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full px-6 leading-[5.5vw] pt-4 uppercase'>Projects</Link>
        <Link to="/agency" className='text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-3 border-white rounded-full px-6 leading-[5.5vw] pt-4 uppercase'>Agency</Link>
    </div>
  )
}

export default HomeBottomText;