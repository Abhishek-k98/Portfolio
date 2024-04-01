import React,{useEffect} from 'react'
import INCS from '../assets/projects/NavMart.jpg'
import Musicapp from '../assets/projects/Musicapp2.png'
import Skygoal from '../assets/projects/skygoal.jpg'
import Trijatta from '../assets/projects/Trijatta2.jpg'
import NetArt from '../assets/projects/Award.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: INCS,
      desc: "NavMart is an E-Commerce website for the Navy Officers is made using Html, Css, Javascript, Php....",
      demo: "https://incsonline.in/",
      code: "https://github.com/Abhishek-k98"
    },
    {
      id: 2,
      src: Trijatta,
      desc: "This is a Landing Page of previous Company....",
      demo: "https://trijatta.com/",
      code: "https://github.com/Abhishek-k98"
    },
    {
      id: 3,
      src: Musicapp,
      desc: "Music-App build for an assignment is made using React, node....",
      demo: "https://github.com/Abhishek-k98/ProjectIOTR.git",
      code: "https://github.com/Abhishek-k98/ProjectIOTR.git"
    },
    {
      id: 4,
      src: Skygoal,
      // desc: "Travel Landing website...",
      demo: "https://skygoal-by-abhishek.netlify.app/",
      code: "https://github.com/Abhishek-k98/Website_Travel1"
    },
    {
      id: 5,
      src: NetArt,
      // desc: "About section of C.R.I fluid systems...",
      demo: "https://net-art-by-abhishek.netlify.app/",
      code: "https://github.com/Abhishek-k98/NetArt"
    },
    /*{
      id: 6,
      src: #,
      // desc: "#...",
      demo: "https://github.com/Abhishek-k98",
      code: "https://github.com/Abhishek-k98"
    },*/
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-14'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects