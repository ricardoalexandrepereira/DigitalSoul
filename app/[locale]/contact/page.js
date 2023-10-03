"use client";
import React, { useState } from 'react'
import Confetti from '@/components/Confetti';
import Wrapper from '@/components/Wrapper'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { contacts } from '@/Data/Data';
import {useTranslations} from 'next-intl';




export function Contact() {

  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('Index');

  const router = useRouter();
  return (

    <AnimatePresence mode="wait">
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 1,
            }}
            variants={{
              initialState: {
                opacity: 0,
                clipPath: "polygon(100% 0, 0 0, 100% 0, 0% 100%)",
              },
              animateState: {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              },
              exitState: {
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              },
            }}
          >
    <Wrapper pageIndex={"Contact"} className="text-DarkBlue gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0">
        <div className='px-6 py-6 text-center md:mt-32 mt-4'>
          <div className="capitalize text-4xl text-Purple font-semibold">{t('contact')}</div>
          <p className='leading-8 mb-8 text-xl max-w-xl font-bold mt-10 text-DarkBlue'>
          {t('contact1')}
          </p>
          <div>
            {contacts.map((contact)=>(
              <div className='mt-6 ' key={contact.id}>
                <div className='text-xl font-medium mb-2'>{contact.title}</div>
                <div className='text-sm text-Purple'>{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div id='contact' className='lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-Purple'>
          <div className="uppercase text-2xl tracking-widest font-semibold my-4 mt-32"> {t('contact2')}</div>
          
          <form action="https://getform.io/f/50ce0c3a-8091-4a32-9862-62f4b4193e70" method="POST" acttype="multipart/form-data">

          
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input name='name' type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder={'Name'}/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input name='phone' type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Phone'/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input name='email' type="email" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Your email'/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <textarea name='message' cols="30" rows="6" type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none resize-none' placeholder='Message'/>
            </div>
              <button onClick={() => setIsVisible(true)} className='mt-10 px-8 py-2 flex text-right rounded-md bg-Purple text-White uppercase text-sm cursor-pointer'>{t('button')}</button>
              {isVisible && <Confetti />}
          </form>

          
        </div>
                <Confetti />
    </Wrapper>
          </motion.div>
        </AnimatePresence>
    
  )
}

export default Contact