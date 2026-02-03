
import React from 'react';

const ShapeChange: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="relative w-full max-w-2xl aspect-square rounded-full flex items-center justify-center p-12 text-center maze-lime">
          <div className="absolute inset-0 maze-dot-pattern rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
              Não apenas acompanhe a mudança, dê forma a ela
            </h2>
            <p className="text-lg max-w-md mx-auto opacity-80">
              A Maze reúne todos os métodos, todas as equipes e todas as etapas da pesquisa em um único lugar, para que você possa ir mais fundo, agir mais rápido e influenciar mais decisões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeChange;
