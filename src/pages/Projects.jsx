import React from 'react'
import ProjectCard from '../components/projects/ProjectCard';
import { navImg, thumbnail } from '../assets/assets';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Projects = () => {
  const projects = [{
    image1:navImg.nav_image_5,
    image2:navImg.nav_image_1
  },{
    image1:navImg.nav_image_2,
    image2:thumbnail.thumbnail_img_1
  },{
    image1: thumbnail.thumbnail_img_2,
    image2: thumbnail.thumbnail_img_3
  },{
    image1: thumbnail.thumbnail_img_4,
    image2: thumbnail.thumbnail_img_5
  } ,{
    image1:thumbnail.thumbnail_img_6,
    image2:thumbnail.thumbnail_img_2
  }];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.from('.hero', {
      height:"40px",
      stagger: {
        amount: 0.4
      },  
      scrollTrigger: {
        trigger: '.lol',
        markers: true,
        start: "top 100%",
        end: "top -150%",
        scrub: true
      }
    })
  });

  return (
    <div className='p-2'>
      <div className='pt-[40vh]'>
        <h2 className='font-[font2] text-[10.5vw] uppercase'>Projects</h2>
      </div>
      <div className='-mt-10 lol'>
        {projects.map(function(elem, idx){
          return (
            <div key={idx} className='hero w-full h-[300px] mb-4 gap-4 flex'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Projects;