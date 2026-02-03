
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-black text-2xl tracking-tighter">Maze</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-gray-600">Plataforma</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">Soluções</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">Recursos</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">Clientes</a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">Preços</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">Entrar</button>
          <button className="text-sm font-medium bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Solicitar Demo</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
