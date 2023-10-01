"use client";
import {useTranslations} from 'next-intl';
import Wrapper from '@/components/Wrapper'
import Lottie from "lottie-react"
import animationData from "../../../public/hummingbird.json"
import { projects } from '@/Data/Data';
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ImEye } from "react-icons/im"
import Link from 'next/link';
import Services from '@/components/Services';
import MyCountup from '@/components/Countup';
import {countUpItems} from "@/Data/Data"
import { useInView } from 'react-intersection-observer';
import Video from '@/components/Video';
import Brandingmarque from '@/components/Brandingmarque';

const page = () => {

  const t = useTranslations('Index');

  const {ref,inView} = useInView({
    threshold: 0.5
  })

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
    <Wrapper pageIndex={"Portefolio"}>
      <div className='flex flex-col pt-40 items-center text-center'>
        <div className="uppercase font-semibold text-sm text-DarkBlue pb-4">{t('portefolioTitle')}</div>
        <div className="font-semibold text-4xl text-Purple pb-4">{t('portefolioSubtitle')}</div>
        <p className="text-DarkBlue font-bold text-xl leading-6 max-w-[600px]">{t('portefolioSubtitle2')}</p>
        <Lottie className="w-[400px] h-[400px]" animationData={animationData}/>
      </div>

      <div className='flex flex-col items-center text-center'>
      <div className="uppercase font-semibold text-sm text-DarkBlue pb-4">{t('portefolioTitleWebsite')}</div>
      <div className="font-semibold text-4xl text-Purple pb-4">{t('portefolioSubtitleWebsite')}</div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 mt-20'>
        {projects.map(project =>(
          <div className='bg-Glass1 p-4 h-[350px] rounded-lg' key={project.id}>
            <div className='w-full h-3/4 relative group'>
              <img src={project.img} alt={project.name} className='w-full h-full object-cover'/>
              <div className="absolute w-full h-full bg-DarkBlue top-0 left-0 z-10 flex items-center justify-center gap-4 scale-0 group-hover:scale-100 transition-all duration-700">
                <Link target='_blanc' href={`${project.link}`}>
                  <ImEye className='hover:scale-110 transition-all duration-300' size={40} color='#ffffff'/>
                </Link>
              </div>
            </div>
            <div className='text-Purple mt-2 text-start'>
                {project.name}
            </div>
            <div className='flex mt-2'>

            </div>
          </div>
        ))}
      </div>

      <Services />
      {/* Countup */}
      <div className='flex justify-center gap-12 flex-wrap' ref={ref}>
          {countUpItems.map(item=>(
            <div key={item.id} className='text-center'>
              <div className='text-DarkBlue text-3xl'>
                {inView && <MyCountup start={0} end={item.number} duration={5}/>}+
              </div>
              <div className='text-WhiteGray mt-3 text-sm'>
                {item.text}
              </div>
            </div>
          ))}
      </div>

      <div className='text-4xl text-Purple font-bold mt-28 mb-20 w-full flex items-center justify-center'>
            <h1>{t("publicidadeMarca")}</h1>
        </div>
    <Video />

    </Wrapper>
    <Brandingmarque />

          </motion.div>
        </AnimatePresence>
    
  )
}

export default page