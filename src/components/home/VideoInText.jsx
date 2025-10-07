import React from 'react'

const VideoInText = () => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full rounded-full' autoPlay muted loop src="background-video.mp4"></video>
    </div>
  )
}

export default VideoInText;