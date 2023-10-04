import React from 'react'
import {MdOutlineDone} from "react-icons/md"

const Marca = () => {
  return (
    <section id='marca' className='flex-col gap-4 lg:flex lg:flex-row w-[100vw] h-auto justify-evenly mb-10 pt-10 text-center items-center'>
        <div className='flex flex-col w-full min-h-[500px] border-Purple border-[1px] rounded-lg pt-8 pb-8 px-8'>
            <h1 className='text-2xl text-Purple'>Branding</h1>
            <h3 className='text-xl pb-10'></h3>
            <ul className='flex flex-col gap-6'>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Desenvolvimento de Mensagem de Marca: Definir a voz e o tom da marca, bem como as mensagens-chave que serão comunicadas à audiência.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Estratégia de Marca: Desenvolver uma estratégia abrangente que englobe a missão, visão e valores da marca, bem como a sua posição no mercado.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Design de Material de Marketing: Criar materiais de marketing que estejam em linha com a identidade da marca, como panfletos, cartões de visita e kits de imprensa.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Experiência do Cliente: Desenhar uma experiência coerente para o cliente em todos os pontos de contacto, incluindo a experiência no site, o atendimento ao cliente, entre outros.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Pesquisa de Mercado: Realizar pesquisas para compreender o público-alvo, a concorrência e as tendências do mercado.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Gestão da Reputação da Marca: Supervisionar e proteger a reputação da marca online e responder a comentários e críticas.</li>
                
            </ul>
        </div>

    </section>
  )
}

export default Marca