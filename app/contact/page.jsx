"use client";
import React, { useState } from 'react'
import Wrapper from '@/components/Wrapper'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { contacts } from '@/Data/Data';


const page = () => {

  const [userName, setUserName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")

  /* email validation */
  const emailValidation = ()=>{
    return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }
  /* email validation */

const handlerSend = (e)=>{
  e.preventDefault()
  if(userName === ""){
    setErrMsg("username is required")
  }else if (phoneNumber === ""){
    setErrMsg("phone Number is required")
  }else if(!emailValidation(email)){
    setErrMsg("Give a valid email")
  }else if(message === ""){
    setErrMsg("message is required")
  }else{
    setSuccessMsg("message sent successfully!  we will contact you as soon as possible.")
    setErrMsg("")
    setUserName("")
    setPhoneNumber("")
    setEmail("")
    setMessage("")
  }
}

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
          <div className="uppercase text-4xl text-Purple font-semibold">Let's work together</div>
          <p className='leading-8 mb-8 text-xl max-w-xl font-bold mt-10 text-DarkBlue'>
            We are excited about creating and growing your business or venture together. Because we offer a very personalized service, we pay attention to make sure that our systems, talent and vision is compatible with that of our clients.
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
        <div className='lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-Purple'>
          <div className="uppercase text-2xl tracking-widest font-semibold my-4 mt-32"> Send us your message</div>
          
          <form>

            {
              errMsg && (<p className='py-1 text-red-600 animete-bounce'>{errMsg}</p>)
            }
            {
              successMsg &&  (<p className='py-1 text-green-600 animete-bounce'>{successMsg}</p>)
            }
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Name'/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Phone'/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none' placeholder='Email'/>
            </div>
            <div className="flex flex-col gap-9 items-center border-b border-Purple py-2 mb-8">
             <textarea onChange={(e)=>setMessage(e.target.value)} value={message} cols="30" rows="6" type="text" className='appearance-none bg-transparent border-none w-full text-DarkBlue mr-3 py-1 px-2 leading-tight focus:outline-none resize-none' placeholder='Message'/>
            </div>
              <button onClick={handlerSend} type='submit' className='mt-10 px-8 py-2 flex text-right rounded-md bg-Purple text-White uppercase text-sm cursor-pointer'>Send</button>
          </form>

        </div>
    </Wrapper>
          </motion.div>
        </AnimatePresence>
    
  )
}

export default page