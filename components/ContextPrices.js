import React from "react";
import { Link } from "react-scroll";

const ContextPrices = () => {
  return (
    <div className="mb-28 mt-20">
      <div className="text-Black font-semibold uppercase text-sm text-center mb-2"></div>
      <div className="font-semibold text-3xl ml-4 text-center text-Purple mb-10">
        O que oferecemos
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-14 lg:px-44 mt-20 bg-contextcc bg-left object-cover h-auto items-center">
        <div className="bg-white py-10 h-[400px] rounded-lg border-Purple border-[1px]">
          <div className="flex flex-col items-center justify-evenly h-[100%] px-5 text-center">
            <h2 className="font-bold text-2xl sm:text-1xl md:text-1xl lg:text-1xl text-Purple">
              Identidade visual (Marca)
            </h2>
            {/* <h3 className="font-bold text-2xl text-[#000000] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500">80€</h3> */}
            {/*    <ul className="flex flex-col pt-10 items-start gap-4 list-disc">
              <li>Web site creation</li>
              <li>maintenance</li>
              <li>visual identity</li>
              <li>Branding</li>
            </ul> */}
            <p className="text-sm py-5">
              Na Digital Soul, entendemos que a marca é o coração de qualquer
              negócio que aspira ao sucesso duradouro. Uma empresa sem uma marca
              distintiva não só deixa de ser lucrativa, como também perde a
              oportunidade de criar valor a longo prazo. É por isso que a nossa
              primeira missão é ajudá-lo a construir a narrativa da sua marca.
            </p>
            <Link
              to="marca"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-Purple text-white border-[1px] px-2 py-1 rounded-lg cursor-pointer hover:scale-110 transition"
            >
              Saber Mais
            </Link>
          </div>
        </div>

        <div className="bg-Purple flex items-center justify-center py-16 h-[500px] rounded-lg">
          <div className="flex flex-col items-center justify-evenly h-[100%] px-5 text-center">
            <h2 className="font-bold text-2xl sm:text-1xl md:text-1xl lg:text-1xl text-[#ffffff]">
              Estrutura Digital (Website)
            </h2>
            {/* <h3 className="font-bold text-2xl text-[#ffffff] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500">125€</h3> */}
            {/* <ul className="flex flex-col pt-10 items-start gap-4 list-disc">
              <li>CEO</li>
              <li>Google Ads</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Tik-Tok</li>
              <li>Adwords ad</li>
            </ul> */}
            <p className="text-sm py-5">
              Um site não é apenas uma presença online, é a sua loja virtual.
              Assim como uma loja física, as pessoas visitam o seu site em busca
              de uma experiência memorável. Além disso, não deixamos que as
              perguntas frequentes se acumulem. Utilizamos a Inteligência
              Artificial (IA) para criar chatbots inteligentes.
            </p>
            <Link
              to="website"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-white text-Purple px-2 py-1 rounded-lg cursor-pointer hover:scale-110 transition"
            >
              Saber Mais
            </Link>
          </div>
        </div>
        <div className="bg-white py-10 h-[400px] rounded-lg border-Purple border-[1px]">
          <div className="flex flex-col items-center justify-evenly h-[100%] px-5 text-center">
            <h2 className="font-bold text-2xl sm:text-1xl md:text-1xl lg:text-1xl text-Purple">
              Google Adwords (Publicidade)
            </h2>
            {/* <h3 className="font-bold text-2xl text-[#000000] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500"></h3> */}
            {/* <ul className="flex flex-col pt-10 items-start gap-4 list-disc">
              <li>Creative images</li>
              <li>video reels</li>
              <li>editorial calendar & planning</li>
              <li>Instagram</li>
              <li>Copywrite</li>
            </ul> */}
            <p className="text-sm py-5">
              Na Digital Soul, não se trata apenas de criar uma campanha. É
              sobre criar uma campanha inteligente que evolui constantemente
              para se adaptar ao seu nicho de mercado. Nossos especialistas
              criam e otimizam estratégias diariamente, coletando dados e
              ajustando para alcançar os melhores resultados.
            </p>
            <Link
              to="pub"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-Purple text-white border-[1px] px-2 py-1 rounded-lg cursor-pointer hover:scale-110 transition"
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextPrices;
