"use client";
/* import Lottie from "lottie-react"
import word from "../public/2ITFWSuiWP.json" */
import Wrapper from "@/components/Wrapper";
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
/* import { gsap } from 'gsap'; */ 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Home() {

gsap.registerPlugin(ScrollTrigger);

const videoRef = useRef(null)
const textRef = useRef(null)
const triggerRef = useRef(null)
const digitalsoulRef = useRef(null)

useEffect(()=>{
const tl = gsap.timeline(
  {
    scrollTrigger:{
      trigger: triggerRef.current,
      scrub:true,
      start:"top center",
      end:"bottom top",
    },
  }
);
tl.to(
  textRef.current,
  {
    translateY:200
  },
  0,
);
tl.to(
  digitalsoulRef.current,
  {
    translateX:100,
  },
  0,
);


},[])


  return (
    <AnimatePresence mode="wait">
      <motion.div
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


        <div ref={triggerRef} className="video-section overflow-hidden relative w-[100%] h-[100vh]">
          <video
            ref={videoRef}     
            className="w-[100%] h-[100%] object-cover"
            src="./video.mp4"
            loop
            autoPlay
            muted
          ></video>
          <div className="h-[70vh]"></div>
          
          
          <div className="absolute top-0 left-0 right-0 h-[100%] text-[46.4vw] ml-[-1vw] text-white leading-[40vw] select-none mix-blend-multiply bg-black flex pt-36 xs:pt-20 sm:pt-20 md:pt-2 lg:items-start ">
            <h1 ref={textRef} className={bebas.className}>Digital</h1>
          </div>
        </div>
        <Wrapper
          pageIndex={"Home"}
          className="max-w-full text-center flex flex-col justify-center lg:pt-4 xs:pt-20 overflow-x-hidden"
        >
          <section className="absolute top-0 left-0 w-full h-full flex gap-10 lg:flex-row items-center justify-center flex-col-reverse">
            <div className="w-1/2">
              <div className="flex flex-row sm:justify-between items-center gap-4 sm:gap-0">
                {/* <div className="sm:h-2 md:w-[30rem] xs:w-[19rem] rounded-sm bg-DarkBlue"></div> */}
              </div>
              <div
              ref={digitalsoulRef}
                id="letraEspecial"
                className="min-w-[200px] flex left-[-30px] sm:text-[7.2rem] xs:text-[4.2rem] lg:text-[200px] text-Purple font-extralight "
              >
                Digital soul
              </div>
              {/* <div className="min-w-[200px] capitalize font-bold text-2xl xs:text-center first-letter xs:text-[1rem] md:text-center text-white mt-8">
                Bem-vindo ao próximo nível da tua
                <br /> presença online.
              </div> */}
            </div>

            <div className="w-1/3">
              {/* <Image
                 className="shadow-lg shadow-Purple rounded-full" 
                src={"/logodigital.png"}
                width={500}
                height={500}
                alt={"logo"}
              /> */}
            </div>
          </section>

          {/* <Lottie className="w-[400px] h-[400px] absolute top-0 right-0 z-10 " word={word}/> */}

          <section className="w-full min-h-[100vh]">
            <div className="flex flex-col pt-10 items-center text-center mb-[200px]">
              <div className="font-semibold text-4xl text-Purple pb-4">
                Quem somos nós?
              </div>
              <p className="text-DarkBlue font-bold text-xl leading-6 max-w-[600px]">
                Somos uma agência de marketing digital dedicada a elevar a
                presença online das marcas. Nosso compromisso é proporcionar
                serviços personalizados que impulsionam a visibilidade e o
                sucesso na era digital. Com uma equipe experiente, dedicamo-nos
                incansavelmente a conceber estratégias que não apenas geram
                resultados, mas também criam um impacto duradouro para as marcas
                que atendemos."
              </p>
            </div>

            <div className="grid grid-cols-1 items-center justify-center mx-auto w-full place-items-center mt-20">
              <div className="flex flex-col items-center w-[100vw] sm:flex-row sm:flex-grow-0 sm:flex-1">
                <div className="sm:w-1/2 px-4 min-h-[400px] bg-yellow-200">
                  <h1 className="text-white text-5xl font-bold px-3 py-8">
                    A nossa missão
                  </h1>
                  <p className="text-DarkBlue text-md font-bold px-8 leading-8 py-8">
                    {" "}
                    é ser a alma digital das marcas, elevando-as a alturas
                    inimagináveis no mundo online, um pixel de cada vez.
                  </p>
                  <p className="text-DarkBlue text-md font-bold px-8 leading-8 pb-4">
                    Para cumprir essa missão, utilizamos estratégias inovadoras,
                    criatividade ilimitada e um compromisso inabalável com a
                    excelência. Construímos parcerias sólidas e duradouras,
                    orientando nossos clientes através do complexo cenário do
                    marketing digital
                  </p>
                </div>
                <div className="sm:w-1/2 px-4 min-h-[400px] flex items-center justify-center ">
                  <Image
                    className=""
                    src={"/relaxricardo.png"}
                    width={400}
                    height={400}
                    alt={"logo"}
                  />
                </div>
              </div>

              <div className="flex items-center w-[100vw] sm:flex-row sm:flex-grow-0 sm:flex-1 flex-col-reverse">
                <div className="sm:w-1/2 px-4 min-h-[400px] flex items-center justify-center ">
                  <Image
                    className=""
                    src={"/rosamari.png"}
                    width={400}
                    height={400}
                    alt={"logo1"}
                  />
                </div>
                <div className="sm:w-1/2 px-4 min-h-[400px] bg-yellow-200">
                  <h1 className="text-white text-5xl font-bold px-3 py-8">
                    Visão
                  </h1>
                  <p className="text-DarkBlue text-md font-bold px-8 leading-8 py-8">
                    Nossa visão é ser mais do que uma agência de marketing; é
                    ser um catalisador de transformação digital para empresas em
                    todo o mundo. A Digital Soul continuará a liderar o caminho,
                    capacitando marcas a alcançarem novos patamares de sucesso
                    online e moldando o futuro do marketing digital com paixão,
                    inovação e excelência."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
      </motion.div>
    </AnimatePresence>
  );
}
