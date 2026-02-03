
import React from 'react';

const VersatilitySection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gray-50/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap gap-3 mb-8">
            {['VERSATILIDADE', 'ESCALA', 'INFLUÊNCIA', 'IA DE PESQUISA'].map(tag => (
              <span key={tag} className="text-[10px] font-bold tracking-widest px-3 py-1 bg-white border border-gray-200 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">
            Pesquisa precisa de versatilidade
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-md">
            Responda às perguntas que mais importam. Realize qualquer tipo de estudo, de grandes pesquisas a entrevistas individuais, e alcance mais de 6 milhões de pessoas.
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-2.5 rounded-md text-sm font-medium">Visão geral</button>
            <button className="border border-gray-300 px-6 py-2.5 rounded-md text-sm font-medium">Começar</button>
          </div>
        </div>

        <div className="order-1 lg:order-2">
           <div className="relative">
             <div className="absolute -top-10 -right-10 w-40 h-40 maze-lime rounded-full opacity-30 blur-3xl"></div>
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img src="https://picsum.photos/seed/versatility/1000/800" alt="Versatility in research" className="w-full" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VersatilitySection;
