import React from 'react'
import {useTranslations} from 'next-intl';

const ChatBot = () => {

  const t = useTranslations('Index');
    
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12 lg:flex-row lg:flex lg:items-center lg:justify-center pt-30 lg:pt-32 mb-12 lg:mb-0 min-h-auto'>
    <div className='w-1/2 items-center justify-center flex flex-col'>
      <iframe className='w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]' src="https://lottie.host/?file=5b7ac62e-94ab-4112-b7bc-fceb7f749171/zOLRL1lXBU.json"></iframe></div>
    <div className='w-1/1 px-0 mx-0 flex flex-col gap-6'>
        <h1 className='font-semibold text-4xl text-Purple pb-4'>{t('titlebot')}</h1>
        <h3 className='text-WhiteGray text-1xl font-semibold'>{t('titlebot1')}</h3>
        <p className='text-DarkBlue font-bold text-xl leading-6 max-w-[600px]'>{t('titlebot2')}</p>
    </div>
    </div>
  )
}
 
export default ChatBot