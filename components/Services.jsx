import React from 'react'
import { services } from '@/Data/Data'

const Services = () => {
  return (
    <div className='text-center p-8 cursor-default'>
         <div className="uppercase font-semibold text-sm text-DarkBlue  pb-4">Serviços</div>
        <div className="font-semibold text-4xl text-Purple pb-4">Como trabalhamos !</div>
        <p className="text-DarkBlue text-md leading-6 max-w-xl mx-auto">Uma vez explicada a tua ideia acionamos a nossa equipa para começar a pensar a tua estratégia, aconselhamos e assessoramos-te para alcançarmos o objectivo.</p>
        <div className='grid gap-4 mt-8 text-WhiteGray sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {services.map((service)=>(
                <div key={service.id} className='p-8 bg-Blur text-center hover:scale-105 transition-all duration-300'>
                    <div className='flex justify-center text-5xl mb-4'>{service.icon}</div>
                    <div className='mb-4 text-2xl font-medium'>{service.title}</div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services