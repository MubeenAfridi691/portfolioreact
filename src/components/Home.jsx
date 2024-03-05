import React, { useEffect, useRef } from 'react'
import hero from '../assets/hero.jpg'
import pdf from '../../Pdf/resume.pdf'
import { Typed } from 'react-typed'

export default function Home() {
  const typeref=useRef(null);
  useEffect(() => {
    const options={
      strings:["WELCOME TO MUBEEN AFRIDI","MERN STACK DEVELOPER","MOBILE APP DEVELOPER(REACT NATIVE)",],
      typespeed:50,
      backspeed:50,
      backDelay: 2000,
      startDelay: 100,
      fadeOut: true,
      loop:true
    }
  
    const type=new Typed(typeref.current,options)

    return () => {
      type.destroy()
    }
  },[])
  

  
  return (
    <>
    <div className="container home">
      <div className="left" 
      data-aos="fade-right"
      data-aos-duration="1000"
      >
        <h1 ref={typeref}>


        </h1>
    
        <a download='resume.pdf' className='btn btn-outline-warning' href={pdf}>Download Resum</a>
      </div>
      <div className="right"
      data-aos="fade-left"
      data-aos-duration="1000"
      
      >

       <div className="img">
       <img src={hero} alt="" />
       </div>
      </div>
    </div>
    </>
  )
}
