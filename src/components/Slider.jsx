import { ArrowLeft, ArrowRight, ForkLeft } from '@mui/icons-material'
import React, { useState } from 'react'
import hero from '../assets/hero_img.png'
import { ApiSlides } from '../Apifolder/Sliderapi'

const Slider = () => {
  // Usestate 
  const [slides] = useState(ApiSlides);
  const [activeslides, setActiveslides] = useState(0)

  // now we will apply functionality on our Right Arrow 
  const nextslide = () =>{
    if(activeslides === slides.length-1){
      setActiveslides(0)
    }
    else{
      setActiveslides(activeslides+1);
    }
  }
  // now we will apply the functionality of prev slide
const prevslide =() =>{
  if(activeslides === 0){
    setActiveslides(slides.length -1)
  }
  else{
    setActiveslides(activeslides -1);

  }
}


  const arrow = "leftarrow flex items-center justify-center bg-grey shadow-sm hover:cursor-pointer"
  return (
    <div className='parentDIV h-[550px] flex items-center justify-between bg-white mobile:hidden'>
        {/* leftarrow div */}
        <div className= {arrow}>
            <ArrowLeft style={{fontSize: "50px"}} onClick = {prevslide} />

        </div>
        {
          slides.map((slide, index) =>{
            if(index === activeslides){
              return(
         <div className={`wrapper flex items-center justify-center w-[100%] h-[500px]
                 rounded-lg border-[#c0c0c0] overflow-hidden relative shadow-2xl ` + slide.background} >
          <div className='slide flex justify-center items-centern h-[100%]'>
            <div className='forimage flex flex-1 justify-center items-center h-[100%]'>
              <img className='h-[100%] object-contain mr-32'
              src={slide.src} alt="" />
            </div>
            <div className='des flex flex-col flex-1 place-items-start justify-center -ml-11'>
              <h2 className='text-[50px]'>{slide.content.h2}</h2>
              <p className='text-[30px]'>{slide.content.p}</p>
              <button className='btn'>Shop Now</button>
            </div>
          </div>
        </div>
              )
            }

          })
        }
        {/* Right arrow div */}
        <div className={arrow}>
            <ArrowRight style= {{fontSize: "50px"}} onClick = {nextslide} />
        </div>
    </div>
  )
}

export default Slider