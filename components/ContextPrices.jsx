import React from "react";

const ContextPrices = () => {
  return (
    <div className="mb-28 mt-28">
      <div className="text-Black font-semibold uppercase text-sm text-center mb-2">
        Prices
      </div>
      <div className="font-semibold text-3xl ml-4 text-center text-Purple mb-10">
        ABOUT OUR PLANS
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-14 lg:px-44 mt-20 bg-contextcc bg-left object-cover h-auto items-center">
        <div className="bg-white py-10 h-[400px] rounded-lg">
          <div className="flex flex-col items-center justify-center px-5 text-center">
            <h2 className="font-bold text-3xl text-Purple">Simple</h2>
            <h3 className="font-bold text-2xl text-[#000000] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500">80€</h3>
            <p className="mt-5 text-Purple">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, eum animi fugit aliquam, totam beatae in hic explicabo corporis at obcaecati vel similique nostrum vitae quasi neque. Fugit et architecto sunt! Sequi.</p>
          </div>
        </div>
        <div className="bg-Purple px-2 py-16 h-[500px] rounded-lg">
        <div className="flex flex-col items-center justify-center px-5 text-center">
            <h2 className="font-bold text-3xl text-[#ffffff]">Master</h2>
            <h3 className="font-bold text-2xl text-[#ffffff] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500">125€</h3>
            <p className="mt-5 text-White">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, eum animi fugit aliquam, totam beatae in hic explicabo corporis at obcaecati vel similique nostrum vitae quasi neque. Fugit et architecto sunt! Sequi.</p>
          </div>
        </div>
        <div className="bg-white py-10 h-[400px] rounded-lg">
          <div className="flex flex-col items-center justify-center px-5 text-center">
            <h2 className="font-bold text-3xl text-Purple">Economic</h2>
            <h3 className="font-bold text-2xl text-[#000000] p-4 h-14 text-gradient-to-r from-violet-500 to-fuchsia-500">54€</h3>
            <p className="mt-5 text-Purple">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, eum animi fugit aliquam, totam beatae in hic explicabo corporis at obcaecati vel similique nostrum vitae quasi neque. Fugit et architecto sunt! Sequi.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextPrices;
