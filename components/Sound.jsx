'use client'
import React, { useRef, useState } from 'react'
import "../components/Soundcss.css";


const Sound = () => {


const ref = useRef(null)
const [click , setClick] = useState(false)


const handleClick = ()=>{
    setClick(!click)

    

    if(!click){
        ref.current.play();
        
       
    }else{
        ref.current.pause();
        
    }
}

  return (
    <div onClick={()=>handleClick()} className='flex cursor-pointer z-30'>
        
        <div className='line' click={click}/>
        <div className='line' click={click}/>
        <div className='line' click={click}/>
        <div className='line' click={click}/>
        <div className='line' click={click}/>


        <audio src="../sounds/sound3.mp3" ref={ref} loop />
    </div>
  )
}

export default Sound