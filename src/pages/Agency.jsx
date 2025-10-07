import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import { assets } from '../assets/assets.js';

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);       //it is use to select element like in pure js document.queryselector
  const imageRef = useRef(null);

  const imageArray = [
    assets.image_1, assets.image_2, assets.image_3, assets.image_4, assets.image_5, assets.image_6, assets.image_7, assets.image_8, assets.image_9, assets.image_10, assets.image_11, assets.image_12, assets.image_13, assets.image_14
  ];

  useGSAP(function(){
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 19.6%",
        end: "top -225%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,     //smooth scrubbing with 1s easing
        anticipatePin: 1, 
        invalidateOnRefresh: true,
        onUpdate: function(elem){
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    });
  });

  return (
    <div>
    <div className='section1 py-1'>
      <div ref={imageDivRef} className='h-70 w-52 absolute top-27 left-106 overflow-hidden rounded-3xl'>
        <img ref={imageRef} className='h-full w-full object-cover' src="image-1.jpg" alt="image" />
      </div>
      <div className='font-[font2] relative'>
        <div className='mt-[23vw]'>
          <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>SEVEN7Y <br />
            TWO</h1>
        </div>
        <div className='pl-[44%]'>
          <p className='text-6xl'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
      </div>
    </div>
    <div className='section2 h-screen'>
      <div className='font-[font2] relative mx-[10vw]'>
        <div className='mt-[15vw] flex gap-85'>
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