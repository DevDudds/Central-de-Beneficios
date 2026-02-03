
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-400">Empresa</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-500">Sobre</a></li>
              <li><a href="#" className="hover:text-gray-500">Blog</a></li>
              <li><a href="#" className="hover:text-gray-500">Carreiras</a></li>
              <li><a href="#" className="hover:text-gray-500">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-500">Contato</a></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-400">Produto</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-500">Preços</a></li>
              <li><a href="#" className="hover:text-gray-500">Moderador IA <span className="bg-lime-300 px-1.5 py-0.5 rounded text-[10px]">NOVO</span></a></li>
              <li><a href="#" className="hover:text-gray-500">Entrevistas</a></li>
              <li><a href="#" className="hover:text-gray-500">Teste de Protótipo</a></li>
              <li><a href="#" className="hover:text-gray-500">Pesquisas</a></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-400">Recursos</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-500">Relatórios</a></li>
              <li><a href="#" className="hover:text-gray-500">Webinars</a></li>
              <li><a href="#" className="hover:text-gray-500">Maze University</a></li>
              <li><a href="#" className="hover:text-gray-500">Glossário</a></li>
            </ul>
          </div>
          <div className="lg:col-span-1">
            <h4 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-400">Casos de Uso</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-500">Validação</a></li>
              <li><a href="#" className="hover:text-gray-500">Usabilidade</a></li>
              <li><a href="#" className="hover:text-gray-500">Satisfação</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-lime-200 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute inset-0 maze-dot-pattern"></div>
               <div className="relative z-10">
                 <h4 className="text-xl font-bold mb-4">Assine nossa newsletter</h4>
                 <div className="flex gap-2">
                   <input type="email" placeholder="Seu e-mail" className="flex-1 px-4 py-2 rounded-lg border-none focus:ring-2 focus:ring-black outline-none" />
                   <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold">Assinar</button>
                 </div>
               </div>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Siga-nos</span>
              <div className="flex gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer">
                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-end gap-12">
           <div className="text-[14rem] font-black tracking-tighter leading-none opacity-10 select-none">Maze</div>
           <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
             © Copyright 2025 Maze. Todos os direitos reservados.
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
