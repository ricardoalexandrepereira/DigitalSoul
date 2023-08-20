"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
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
        <Wrapper
          pageIndex={"Home"}
          className="max-w-full text-center flex flex-col justify-center lg:pt-4 xs:pt-20 overflow-x-hidden"
        >
          <section className="w-full h-full flex gap-10 lg:flex-row items-center justify-center flex-col-reverse">
            <div className="w-1/2">
              <div className="flex flex-row sm:justify-between items-center gap-4 sm:gap-0">
                <div className="text-xl sm:text-3xl  text-DarkBlue font-bold">
                  Hi, We are
                </div>
                {/* <div className="sm:h-2 md:w-[30rem] xs:w-[19rem] rounded-sm bg-DarkBlue"></div> */}
              </div>
              <div className="min-w-[200px] sm:text-[7.2rem] xs:text-6xl lg:text-[80px] text-Purple font-medium">
                Digital soul
              </div>
              <div className="min-w-[200px] capitalize font-bold text-2xl xs:text-center first-letter xs:text-[1rem] md:text-center text-DarkBlue mt-8">
                Welcome to the next level of your <br /> online presence.
              </div>
            </div>

            <div className="w-1/2">
              <Image
                className="shadow-lg shadow-slate-600 rounded-full"
                src={"/logo.png"}
                width={500}
                height={500}
                alt={"logo"}
              />
            </div>
          </section>

          <section className="w-full min-h-[100vh]">
            <div className="flex flex-col pt-10 items-center text-center">
              <div className="font-semibold text-4xl text-Purple pb-4">
                Who are we?
              </div>
              <p className="text-DarkBlue font-bold text-xl leading-6 max-w-[600px]">
                Knowledge and data drive our decisions. We find value in
                analysis and advancement. We self-actualize and constantly
                undergo training to stay on top of the needs of our clients,
                trends and possibilities. In the same vein, we believe that by
                gathering reliable, factual information and sharing it with
                others, we can make the world a better place.{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 items-center justify-center mx-auto w-full place-items-center mt-20">

              <div className="flex flex-col items-center w-[100vw] sm:flex-row sm:flex-grow-0 sm:flex-1">
                <div className="sm:w-1/2 px-4 min-h-[400px] bg-yellow-200">
                  <h1 className="text-white text-3xl font-bold px-3 py-8">Our Goal</h1>
                  <p className="text-DarkBlue text-md font-bold px-8 leading-8 py-8"> We are on a mission to empower our clients to reach
                  their business goals and take their business to the next
                  level. We do this through careful planning and a strategic
                  approach that equips them with the best tools to differentiate
                  themselves in a (usually) crowded market. We set goals,
                  identify the growth stage of our clients and create a plan
                  that takes them from their current situation to their desired
                  state</p>
                </div>
                <div className="sm:w-1/2 px-4 min-h-[400px] flex items-center justify-center ">
                <Image
                className=""
                src={"/aboutImage.png"}
                width={500}
                height={500}
                alt={"logo"}
              />
                </div>
              </div>

              <div className="flex items-center w-[100vw] sm:flex-row sm:flex-grow-0 sm:flex-1 flex-col-reverse">
                <div className="sm:w-1/2 px-4 min-h-[400px] flex items-center justify-center ">
                <Image
                className=""
                src={"/aboutImage.png"}
                width={500}
                height={500}
                alt={"logo"}
              />
                  
                </div>
                <div className="sm:w-1/2 px-4 min-h-[400px] bg-yellow-200">
                <h1 className="text-white text-3xl font-bold px-3 py-8">Our Goal</h1>
                  <p className="text-DarkBlue text-md font-bold px-8 leading-8 py-8"> We are on a mission to empower our clients to reach
                  their business goals and take their business to the next
                  level. We do this through careful planning and a strategic
                  approach that equips them with the best tools to differentiate
                  themselves in a (usually) crowded market. We set goals,
                  identify the growth stage of our clients and create a plan
                  that takes them from their current situation to their desired
                  state</p>
                </div>
              </div>

            </div>
          </section>
        </Wrapper>
      </motion.div>
    </AnimatePresence>
  );
}
