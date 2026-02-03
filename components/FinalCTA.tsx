
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-12">
          Moldem a mudança juntos
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-black text-white px-10 py-4 rounded-md font-semibold text-lg hover:scale-105 transition-transform">
            Inscreva-se
          </button>
          <button className="border border-gray-300 px-10 py-4 rounded-md font-semibold text-lg hover:bg-gray-50 transition-all">
            Solicitar demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
