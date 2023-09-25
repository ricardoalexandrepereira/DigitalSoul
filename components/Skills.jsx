import React, {useRef} from "react";

const Skills = ({ skills }) => {
  const ref = useRef(null);
 


  return (
    <div>
      <div className="text-Black font-semibold uppercase text-sm text-center mb-8">
       Empresas & Particulares
      </div>
      <div className="font-semibold text-3xl ml-4 text-center text-Purple mb-10">
      Como Funciona?
      </div>
      <p className="text-DarkBlue text-md text-center leading-6 max-w-xl mx-auto">Fala connosco atravez do nosso email ou contacto telefónico, e apresenta-nos a tua ideia e nós tratamos do resto. Avaliamos a tua estratégia e implementamos o projecto sempre ao teu lado.
        seja ele Publicidade, sitio web, Design da marca ou chatbot.</p>
      <div ref={ref} className="grid md:grid-cols-3 gap-4 p-10">
        {skills.map((skill, index) => (
          <div className="mb-4 flex justify-center" key={skill.name}>
            
            <div className="flex flex-col h-[300px] justify-evenly items-center text-center mb-2">
              <div>{skill.icon}</div>
              <div className="text-Purple text-2xl">{skill.name}</div>
              <div className="font-bold text-gray-500">{skill.info}</div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
