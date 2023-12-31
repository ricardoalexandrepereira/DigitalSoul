import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import Link from 'next-intl/link'; 


const Wrapper = ({ children, className}) => {


  
  return (
    <section className={className}>

      {/* blur behind */}
      <div className='fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[50rem] md:h-[50rem] md:-left-10 md:-top-40 bg-gray-200 -z-10 rounded-full blur-3xl'></div>
       {/* blur behind */}

       <>{children}</>


        {/* blur behind */}
      <div className='fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[20rem] md:h-[20rem] md:-right-60 md:-bottom-40 bg-cyan-200 -z-10 rounded-full blur-3xl'></div>
       {/* blur behind */}

       {/* <div className='fixed bottom-12 right-6 xs:text-3xl text-2xl text-gray-400'>
        {pageIndex}
       </div> */}
      
       <div className='z-40 p-2 fixed bottom-12 left-6 xs:text-3xl text-2xl bg-green-500 rounded-full'>
        <a href="https://wa.me/917326624" className='wattsapp_float z-50' target='_blank'>
          <FaWhatsapp color="#fff" size={"2rem"}/>
        </a>
       </div>

       <span className='flex flex-col z-60 text-[#e83468] fixed gap-2 right-[3rem] bottom-[8rem] rounded-md'>
                    
                    <div className='px-1 py-1 gap-2 rounded-full text-sm border border-[#e83468] hover:bg-[#e83468] hover:text-white transition'>
                    <Link href="/" locale="pt">
                    PT
                    </Link>
                    
                    </div>

                    <div className='px-1 py-1 gap-2 rounded-full text-sm border border-[#e83468] hover:bg-[#e83468] hover:text-white transition'>
                    <Link href="/" locale="en">
                    EN
                    </Link>
                    </div>
                </span>

    </section>
  )
}

export default Wrapper