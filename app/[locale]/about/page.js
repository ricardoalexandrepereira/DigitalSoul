"use client";
/* import Image from "next/image" */
import {useTranslations} from 'next-intl';
import Lottie from "lottie-react"
import animationData from "../../../public/textmsg.json"
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
/* import { skills } from "@/Data/Data" */
/* import Skills from "@/components/Skills"; */
import ContextPrices from "@/components/ContextPrices";
import SocialMedia from "@/components/SocialMedia";
import Marca from "@/components/Marca";
import Publicidade from "@/components/Publicidade";
import Website from '@/components/Website';



export function Services() {

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
<Wrapper pageIndex={"Services"}>
      <div className="flex flex-col gap-12 lg:flex-row pt-10 lg:pt-10 items-center justify-center mb-12 lg:mb-0 min-h-screen">
        {/* <Image src={"/aboutImage.png"} width={500} height={500} alt={"about image"}/> */}
        <Lottie className="w-[400px] h-[400px]" animationData={animationData}/>
        <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
          <div className="uppercase font-semibold text-sm  text-DarkBlue pb-4">{t('about')}</div>
          <div className="font-semibold text-4xl text-Purple pb-4">{t('about1')}</div>
          <p className=" text-DarkBlue font-bold text-xl leading-6">{t('about2')}</p>
          <div className="flex gap-8 mt-8">
            <Link className="text-white font-semibold text-sm uppercase bg-Purple rounded-md px-3 py-2 border-transparent border-[1px] hover:bg-white hover:border-[1px] hover:border-Purple hover:text-Purple ease duration-100" href="/contact">{t('about3')}</Link>
          </div>
        </div>
      </div>
      {/* <Skills skills={skills} /> */}
      
</Wrapper>
<ContextPrices />
<SocialMedia />

<div className="flex flex-col items-center justify-center mt-[100px] overflow-hidden">
<h1 className='text-2xl lg:text-3xl text-Purple font-bold'>Websites</h1>
<Website />
</div>

<div className="flex flex-col items-center justify-center mt-[20px] overflow-hidden">
<h1 className='text-2xl lg:text-3xl text-Purple font-bold'>A tua Marca</h1>
<Marca />
</div>

<div className="flex flex-col items-center justify-center mt-[20px] overflow-hidden">
<h1 className='text-2xl lg:text-3xl text-Purple font-bold'>Publicidade</h1>
<Publicidade />
</div>

</motion.div>
</AnimatePresence>
    
  )
}

export default Services