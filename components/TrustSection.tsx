
import React from 'react';

const TrustSection: React.FC = () => {
  const securityItems = [
    { title: 'TRANSMISSÃO CRIPTOGRAFADA', desc: 'Todo o tráfego é transportado de forma segura e criptografado via SSL.' },
    { title: 'CONTROLE DE ACESSO', desc: 'Defina senhas para testes e gerencie quem pode visualizar estudos.' },
    { title: 'SEGURANÇA DE DADOS', desc: 'Nossa plataforma aproveita as medidas abrangentes da AWS.' },
    { title: 'CONFORMIDADE GDPR', desc: 'Protegemos seus dados conforme os padrões GDPR.' },
    { title: 'SSO', desc: 'Reduza riscos de segurança autenticando o acesso via Single Sign On.' },
    { title: 'ESPAÇOS DE TRABALHO PRIVADOS', desc: 'Habilite o acesso baseado em funções para colaborar com segurança.' },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto rounded-[3rem] maze-lime p-12 md:p-24 relative overflow-hidden">
        <div className="absolute inset-0 maze-dot-pattern"></div>
        
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-5xl font-medium tracking-tight mb-8">Confiança e segurança em todos os níveis</h2>
          <button className="bg-black text-white px-8 py-3 rounded-md font-medium">Contatar vendas</button>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{item.title}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
