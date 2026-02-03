
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] mb-8">
            Pesquisa no ritmo da mudança
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-md">
            Em um mundo que se move mais rápido do que nunca, a Maze transforma insights em clareza para que sua equipe possa agir.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-all">
              Começar agora
            </button>
            <button className="border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-all">
              Solicitar uma demo
            </button>
          </div>
        </div>
        
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/maze1/600/400" alt="UI Context 1" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/maze2/400/500" alt="UI Context 2" className="w-full h-auto" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/maze3/500/400" alt="UI Context 3" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://picsum.photos/seed/maze4/600/450" alt="UI Context 4" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
