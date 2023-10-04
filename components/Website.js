import React from 'react'
import {MdOutlineDone} from "react-icons/md"


const Website = () => {
  return (
    <section id='website' className='flex-col gap-4 lg:flex lg:flex-row w-[100vw] h-auto justify-evenly mb-10 pt-10 text-center items-center'>
        <div className='flex flex-col w-full min-h-[500px] border-Purple border-[1px] rounded-lg pt-8 pb-8'>
            <h1 className='text-2xl text-Purple'>Site Standard</h1>
            <h3 className='text-xl pb-10'>+ Hospedagem</h3>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Criação de site profissional personalizado baseado em modelos</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Design responsivo (desktop, tablet, mobile)</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Single page</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Formulários e botões</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Integração com redes sociais</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Google Friendly</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Conformidade com a LGPD</li>
            </ul>
        </div>

        <div className='flex flex-col w-full min-h-[500px] border-Purple border-[1px] rounded-lg pt-8 pb-8'>
            <h1 className='text-2xl text-Purple'>Site personalizado</h1>
            <h3 className='text-xl pb-10'>+ Hospedagem e manutenção</h3>
            <ul className='flex flex-col gap-4'>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Criação de site profissional exclusivo de forma artesanal</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Layout exclusivo sob medida</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Design Responsivo (desktop, tablet, mobile)</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>One Page, Multipage</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Integrações customizadas</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Formulários e botões</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Integração com redes sociais</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Conformidade com a LGPD</li>
                <li className='flex items-center justify-center gap-3'><MdOutlineDone color={"green"}/>Chat Boot</li>
            </ul>
        </div>

    </section>
  )
}

export default Website