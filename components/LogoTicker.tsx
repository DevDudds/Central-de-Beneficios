
import React from 'react';

const LogoTicker: React.FC = () => {
  const brands = ['Lenovo', 'Flo', 'Skillsoft', 'Aeroméxico', 'Sunnova', 'Atlassian', 'Lowe\'s', 'Volvo'];
  
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-2xl mb-12 font-medium">De startups a empresas globais, a pesquisa acontece na Maze</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-40 grayscale">
          {brands.map((brand) => (
            <div key={brand} className="text-xl font-bold">{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
