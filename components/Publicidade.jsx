import React from 'react'
import {MdOutlineDone} from "react-icons/md"

const Publicidade = () => {
  return (
    <section id='pub' className='flex-col gap-4 lg:flex lg:flex-row w-[100vw] h-auto justify-evenly mb-10 pt-10 text-center items-center'>
        <div className='flex flex-col w-full min-h-[500px] border-Purple border-[1px] rounded-lg pt-8 pb-8 px-8'>
            <h1 className='text-2xl text-Purple'>Publicidade</h1>
            <h3 className='text-xl pb-10'></h3>
            <ul className='flex flex-col gap-6'>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Publicidade em Motores de Busca: Gerir campanhas de publicidade em motores de busca como o Google Ads para aumentar a visibilidade nos resultados de pesquisa.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Publicidade Display: Criar anúncios gráficos que são exibidos em sites e aplicações através de redes de publicidade.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Publicidade em Vídeo: Criar e promover anúncios em vídeo em plataformas como o YouTube.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Marketing de Conteúdo: Desenvolver estratégias de conteúdo que incluam anúncios subtis e relevantes para promover produtos ou serviços.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Email Marketing: Enviar emails promocionais e newsletters para listas de subscritores.</li>
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Publicidade em redes Sociais: Planejar, criar e gerir anúncios pagos em plataformas de redes sociais como o Facebook, Instagram, Tik Tok, etc.</li>
                
                <li className='flex items-bottom justify-center gap-3'><MdOutlineDone color={"green"}/>Marketing de Influenciadores: Colaborar com pessoas influentes para promover produtos ou serviços.</li>
            </ul>
        </div>

    </section>
  )
}

export default Publicidade