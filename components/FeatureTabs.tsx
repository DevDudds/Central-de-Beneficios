
import React, { useState } from 'react';

const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'recruit' | 'research' | 'analyze'>('recruit');

  const tabs = [
    { id: 'recruit', label: 'Recrutar' },
    { id: 'research', label: 'Pesquisar' },
    { id: 'analyze', label: 'Analisar' },
  ] as const;

  return (
    <section className="py-24 px-4 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex border-b border-gray-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-8 text-3xl font-medium transition-all relative ${
                activeTab === tab.id ? 'text-black' : 'text-gray-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl font-medium mb-6">
              {activeTab === 'recruit' && 'Alcance as pessoas certas, sem esforço'}
              {activeTab === 'research' && 'Realize pesquisas de forma autônoma'}
              {activeTab === 'analyze' && 'Transforme dados em decisões reais'}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Acesse instantaneamente nosso painel de mais de 6 milhões de participantes ou conecte-se com sua própria comunidade.
            </p>
            <a href="#" className="inline-flex items-center gap-2 font-semibold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity">
              Saiba mais <span>→</span>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl overflow-hidden">
             {/* Placeholder for complex UI screenshot */}
             <div className="rounded-xl bg-gray-50 aspect-video flex items-center justify-center border border-gray-100 overflow-hidden">
               <img 
                 src={`https://picsum.photos/seed/${activeTab}/800/450`} 
                 alt={`Screenshot ${activeTab}`} 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
