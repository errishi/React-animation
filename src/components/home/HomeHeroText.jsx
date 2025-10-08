import React from 'react'
import Video from './Video';
import VideoInText from './VideoInText';

const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 mt-70 lg:mt-0 text-center'>
            <div className='text-[9.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
                The spark for
            </div>
            <div className='text-[9.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
                all
                <div className='h-[7vw] lg:-mt-3 rounded-full overflow-hidden'>
                    <VideoInText />
                </div>
                things
            </div>
            <div className='text-[9.5vw] uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText;