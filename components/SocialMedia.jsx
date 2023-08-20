import React from 'react'
import Marquee from "react-fast-marquee";
import { socialMedia } from "@/Data/Data"


const SocialMedia = () => {
  return (
    
      
        <Marquee pauseOnHover gradient={false} className="bg-[#3E2044] font-bold py-4 flex items-center justify-center">
            {socialMedia.map((media)=>(
                <div className='w-[400px] overflow-x-hidden' key={media.id}>
                    <img className='w-[150px]' src={media.img} alt="media" />
                </div>
            ))}
        </Marquee>
      
     
  )
}

export default SocialMedia