
import React, {useRef} from "react";
import {useTranslations} from 'next-intl';

import {BsVectorPen, BsCode} from "react-icons/bs";
import {FiBarChart} from "react-icons/fi";
import { HiMagnifyingGlass} from "react-icons/hi2"
import {FaDesktop} from "react-icons/fa"
import {AiOutlineShareAlt} from "react-icons/ai"
import {BiCubeAlt} from "react-icons/bi"
import {MdBrandingWatermark} from "react-icons/md"
import {TbMessageChatbot} from "react-icons/tb"
import {BsFillPeopleFill} from "react-icons/bs"

const Skills = () => {
  const ref = useRef(null);
 
  const t = useTranslations('Index');

  return (
    <div>
      <div className="text-Black font-semibold uppercase text-sm text-center mb-8 ">
       {t("EP")}
      </div>
      <div className="font-semibold text-3xl ml-4 text-center text-Purple mb-10">
      {t("EP1")}
      </div>
      <p className="text-DarkBlue text-md text-center leading-6 max-w-xl mx-auto">{t("EP2")}</p>
      <div ref={ref} className="grid md:grid-cols-3 gap-10 mt-14 p-10">
        
     
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes1')}</p>
            <div><FaDesktop size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info1')}</div>
          </div>
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes2')}</p>
            <div><AiOutlineShareAlt size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info2')}</div>
          </div>
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes3')}</p>
            <div><BiCubeAlt size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info3')}</div>
          </div>
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes4')}</p>
            <div><MdBrandingWatermark size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info4')}</div>
          </div>
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes5')}</p>
            <div><TbMessageChatbot size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info5')}</div>
          </div>
          <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
            <p className="text-Purple text-2xl">{t('changes6')}</p>
            <div><BsFillPeopleFill size={"4em"} color={"#e83468"}/></div>
            <div className="font-bold text-gray-500">{t('info6')}</div>
          </div>
      
    </div>
          
          
      
      </div>
    
  );
};

export default Skills;
