import React, { useRef } from 'react'

const Agency = () => {
  const imageDivRef = useRef(null);       //it is use to select element like in pure js document.queryselector

  return (
    <div>
    <div className='section1'>
      <div className='h-70 w-52 absolute top-27 left-106 overflow-hidden rounded-3xl'>
        <img className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="image" />
      </div>
      <div className='font-[font2] relative'>
        <div className='mt-[23vw]'>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>SEVEN7Y <br />
            TWO</h1>
        </div>
        <div className='pl-[40%]'>
          <p className='text-6xl'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
    </div>
    <div className='section2 h-screen'>
      <div className='font-[font2] relative mx-[10vw]'>
        <div className='mt-[23vw] flex gap-85'>
          <div>
          <p className='text-xl'>Expertise</p>
          </div>
          <div>
          <ul className='text-xl'>
            <li>Strategy</li>
            <li>Advertising</li>
            <li>Branding</li>
            <li>Design</li>
            <li>Content</li>
          </ul>
          </div>
        </div>
        <div className='flex justify-between mt-40'>
          <div className='w-85'>
            <p>Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
          </div>
          <div className='w-85'>
            <p>Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
          </div>
          <div className='w-85'>
            <p>Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Agency;