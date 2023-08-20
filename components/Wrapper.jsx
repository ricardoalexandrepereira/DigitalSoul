import React from 'react'

const Wrapper = ({pageIndex, children, className}) => {
  return (
    <section className={className}>

      {/* blur behind */}
      <div className='fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[50rem] md:h-[50rem] md:-left-10 md:-top-40 bg-gray-200 -z-10 rounded-full blur-3xl'></div>
       {/* blur behind */}

       <>{children}</>


        {/* blur behind */}
      <div className='fixed w-[20rem] h-[20rem] xs:w-[28rem] xs:h-[28rem] md:w-[20rem] md:h-[20rem] md:-right-60 md:-bottom-40 bg-cyan-200 -z-10 rounded-full blur-3xl'></div>
       {/* blur behind */}

       <div className='fixed bottom-12 right-6 xs:text-3xl text-2xl text-gray-400'>
        {pageIndex}
       </div>
    </section>
  )
}

export default Wrapper