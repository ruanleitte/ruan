import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeExperience, setActiveExperience] = useState("mills");

  const experiences = [
    {
      id: "mcdonalds",
      company: "McDonald's",
      period: "2011-2012",
      details: [
        {
          title: "McDonald's",
          period: "Mai/2011 – Set/2012",
          position: "Atendente",
          summary: "Atendimento ao cliente, preparo de alimentos e operação de caixa em rede de fast food.",
          activities: [
            "Atendimento ao cliente no balcão e drive-thru",
            "Preparo de alimentos seguindo padrões de qualidade",
            "Operação de caixa e sistema de pedidos",
            "Manutenção da limpeza e organização do ambiente"
          ]
        }
      ],
    },
    {
      id: "mills",
      company: "Mills",
      period: "2023-2024",
      details: [
        {
          title: "Mills Estruturas",
          period: "Abr/2023 – Ago/2024",
          position: "Analista de Planejamento",
          summary: "Atuação como focal da Mills in loco no gerenciamento do contrato com a Braskem, supervisionando equipe operacional e equipamentos, com programação de manutenções e emissão de boletins de medição.",
          activities: [
            "Focal da Mills in loco no gerenciamento do contrato Braskem",
            "Supervisão e gestão da equipe operacional e equipamentos",
            "Programação de manutenções preventivas e corretivas",
            "Emissão e monitoramento do Boletim de Medição",
            "Desenvolvimento de relatórios gerenciais para acompanhamento de resultados",
            "Colaboração com diferentes departamentos",
            "Reuniões contínuas para discutir e elaborar propostas comerciais e ajustes operacional"
          ]
        },
        {
          title: "Mills Estruturas",
          period: "Mai/2022 – Abr/2023",
          position: "Instrutor de Treinamento Operacional",
          summary: "",
          activities: [
            "Desenvolvimento e aplicação de treinamentos técnicos e de segurança para equipes operacionais",
            "Suporte técnico e capacitação de operadores para equipamentos de movimentação (LIFT)"
          ]
        }
      ],
    },
    {
      id: "pan-american",
      company: "Pan American",
      period: "2021-2022",
      details: [
        {
          title: "Pan American School of Bahia",
          period: "Mai/2021 – Fev/2022",
          position: "Professor Substituto – Autônomo",
          summary: "Responsável por assumir turmas de forma temporária em diferentes disciplinas, com adaptação rápida a metodologias e cronogramas escolares.",
          activities: [
            "Responsável por assumir turmas de forma temporária em diferentes disciplinas",
            "Adaptação rápida a metodologias e cronogramas escolares",
            "Monitoramento de desempenho e acompanhamento individualizado dos alunos"
          ]
        }
      ],
    },
    {
      id: "stone",
      company: "Stone",
      period: "2019-2020",
      details: [
        {
          title: "Stone Pagamentos",
          period: "Out/2019 – Ago/2020",
          position: "Técnico em Logística",
          summary: "Gestão logística de last mile, planejamento de rotas e distribuição, com controle de estoque e logística reversa.",
          activities: [
            "Gestão logística de last mile, planejamento de rotas e distribuição",
            "Controle de estoque e logística reversa, reduzindo desperdícios",
            "Atendimento técnico externo e suporte a clientes corporativos"
          ]
        }
      ],
    },
    {
      id: "gol",
      company: "GOL",
      period: "2013-2019",
      details: [
        {
          title: "GOL Linhas Aéreas",
          period: "Out/2013 – Fev/2019",
          position: "Auxiliar de Aeroporto",
          summary: "Atendimento ao cliente em operações aeroportuárias, coordenação de embarque e processamento de documentos.",
          activities: [
            "Atendimento ao cliente, resolução de conflitos e suporte em operações Aeroviária",
            "Coordenação de embarque e desembarque de passageiros, garantindo eficiência operacional",
            "Processamento de documentos e gerenciamento de reclamações no SAC"
          ]
        }
      ],
    },
    {
      id: "betaprint",
      company: "Betaprint",
      period: "2016-2017",
      details: [
        {
          title: "Betaprint",
          period: "Mai/2016 – Mar/2017",
          position: "Proprietário",
          summary: "Administração geral do negócio próprio no segmento de impressões e materiais gráficos.",
          activities: [
            "Administração geral, compras e gestão financeira",
            "Controle de estoque e negociação com fornecedores",
            "Comercialização de produtos no atacado e varejo",
            "Desenvolvimento de estratégias de vendas"
          ]
        }
      ],
    },
    {
      id: "tch",
      company: "Tch Viagens",
      period: "2014-2015",
      details: [
        {
          title: "Tch Viagens",
          period: "Out/2014 – Mar/2015",
          position: "Agente de Receptivo",
          summary: "Atendimento e suporte a turistas em recepção de viagens, coordenação de transporte e passeios turísticos.",
          activities: [
            "Atendimento e suporte a turistas em recepção de viagens",
            "Coordenação de transporte e passeios turísticos",
            "Assistência em check-in e embarque",
            "Organização de documentação para embarque e reservas"
          ]
        }
      ],
    },
    {
      id: "atacadao",
      company: "Atacadão",
      period: "2012-2013",
      details: [
        {
          title: "Atacadão",
          period: "Set/2012 – Mai/2013",
          position: "Operador de Caixa",
          summary: "Atendimento ao cliente na operação de caixa em rede atacadista de grande porte.",
          activities: [
            "Operação de caixa e sistema PDV",
            "Atendimento a clientes varejistas e atacadistas",
            "Controle de valores e fechamento de caixa",
            "Organização da área de atendimento"
          ]
        }
      ],
    }
  ];

  // Find the active experience
  const activeExperienceData = experiences.find(exp => exp.id === activeExperience);

  return (
    <div className="container py-16 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">MY <span className="text-primary">RESUME</span></h1>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a href="/files/cv_pt.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="w-full sm:w-auto">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                DOWNLOAD CV (PT)
              </span>
            </Button>
          </a>
          <a href="/files/cv_en.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full sm:w-auto">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                DOWNLOAD CV (EN)
              </span>
            </Button>
          </a>
        </div>
      </div>

      {/* Professional Experience with Integrated Tabs */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800 dark:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-primary"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          <span>Trajetória Profissional</span>
        </h2>

        {/* Interactive Timeline - Integration with Card Display */}
        <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl p-5 shadow-sm">
          {/* Timeline Navigation */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-8 h-8 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-1/2 w-8 h-8 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent pb-6 -mx-5 px-5">
              <div className="flex gap-4 md:gap-6 min-w-max relative py-6" style={{ width: 'max-content' }}>
                {/* Timeline line with gradient */}
                <div className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-primary/40 via-primary to-purple-500/70 top-[68px] z-0"></div>
                
                {/* Timeline items - Companies with years */}
                {[
                  { id: "mills", company: "Mills", period: "2023-2024", icon: "🏢" },
                  { id: "pan-american", company: "Pan American", period: "2021-2022", icon: "🎓" },
                  { id: "stone", company: "Stone", period: "2019-2020", icon: "💳" },
                  { id: "betaprint", company: "Betaprint", period: "2016-2017", icon: "🖨️" },
                  { id: "tch", company: "Tch Viagens", period: "2014-2015", icon: "🏝️" },
                  { id: "gol", company: "GOL", period: "2013-2019", icon: "✈️" },
                  { id: "atacadao", company: "Atacadão", period: "2012-2013", icon: "🛒" },
                  { id: "mcdonalds", company: "McDonald's", period: "2011-2012", icon: "🍔" },
                ].map((exp, index) => (
                  <motion.div 
                    key={exp.id}
                    className={`relative z-10 flex flex-col items-center w-32 md:w-40 cursor-pointer group`}
                    onClick={() => setActiveExperience(exp.id)}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    {/* Company icon/logo */}
                    <div className={`w-10 h-10 flex items-center justify-center text-lg mb-4 ${activeExperience === exp.id ? 'text-white bg-primary' : 'text-primary bg-primary/10'} rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-white`}>
                      {exp.icon}
                    </div>
                    
                    {/* Connection dot */}
                    <div className={`w-6 h-6 rounded-full transition-all duration-300 shadow-md ${activeExperience === exp.id ? 'bg-primary scale-125' : 'bg-white border-2 border-primary group-hover:scale-110'} mb-3 relative`}>
                      {/* Pulse effect for active item */}
                      {activeExperience === exp.id && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary/40"></span>
                      )}
                    </div>
                    
                    {/* Company info */}
                    <div className={`text-center p-3 rounded-lg transition-all duration-300 w-full ${activeExperience === exp.id ? 'bg-primary text-white shadow-lg' : 'bg-white group-hover:bg-gray-50'}`}>
                      <div className="font-bold truncate">{exp.company}</div>
                      <div className="text-sm mt-1 opacity-90">{exp.period}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Experience Tab Content - Integrated with Timeline */}
          {activeExperienceData && (
            <div className="mt-2 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-primary/5 px-4 py-3 border-b border-primary/10 flex items-center">
                <div className="w-10 h-10 flex items-center justify-center text-lg mr-3 text-white bg-primary rounded-full shadow-md">
                  {[
                    { id: "mcdonalds", icon: "🍔" },
                    { id: "atacadao", icon: "🛒" },
                    { id: "gol", icon: "✈️" },
                    { id: "tch", icon: "🏝️" },
                    { id: "betaprint", icon: "🖨️" },
                    { id: "stone", icon: "💳" },
                    { id: "pan-american", icon: "🎓" },
                    { id: "mills", icon: "🏢" },
                  ].find(exp => exp.id === activeExperience)?.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {activeExperienceData.company}
                  </h3>
                  <div className="text-sm text-gray-600">{activeExperienceData.period}</div>
                </div>
              </div>

              <div className="p-6">
                {activeExperienceData.details.map((detail, index) => (
                  <div key={index} className="mb-8 last:mb-0 fadeIn">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{detail.title}</h3>
                      <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                        {detail.period}
                      </span>
                    </div>
                    
                    <div className="text-lg font-medium text-primary mb-3">{detail.position}</div>
                    
                    {detail.summary && (
                      <div className="bg-gray-50 p-4 border-l-4 border-primary rounded mb-4">
                        {detail.summary}
                      </div>
                    )}
                    
                    <div className="mt-4">
                      <h4 className="font-semibold mb-3">Principais atividades</h4>
                      <ul className="space-y-2">
                        {detail.activities.map((activity, actIdx) => (
                          <li key={actIdx} className="pl-6 relative">
                            <span className="absolute left-0 top-2.5 w-2 h-2 bg-primary rounded-full"></span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {index < activeExperienceData.details.length - 1 && (
                      <div className="border-b border-gray-200 my-6"></div>
                    )}
                  </div>
                ))}

                {/* Quick Tab Navigation */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-center items-center gap-2 flex-wrap">
                    {[
                      { id: "mills", company: "Mills" },
                      { id: "pan-american", company: "Pan American" },
                      { id: "stone", company: "Stone" },
                      { id: "betaprint", company: "Betaprint" },
                      { id: "tch", company: "Tch Viagens" },
                      { id: "gol", company: "GOL" },
                      { id: "atacadao", company: "Atacadão" },
                      { id: "mcdonalds", company: "McDonald's" },
                    ].map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => setActiveExperience(exp.id)}
                        className={`px-3 py-1 text-sm rounded-full transition-all ${activeExperience === exp.id ? 'bg-primary text-white font-medium' : 'bg-gray-100 hover:bg-gray-200'}`}
                      >
                        {exp.company}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Education */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-full text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Faculdade Mauricio de Nassau</h3>
                  <div className="text-primary font-medium">Graduação em Gestão da Logística</div>
                </div>
                <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                  Concluído (Jul/2019)
                </span>
              </div>
              
              <div className="bg-gray-50 p-4 mt-4 border-l-4 border-primary rounded">
                Formação completa em gestão logística com enfoque em cadeia de suprimentos, 
                transporte e distribuição, adquirindo conhecimentos para otimização de 
                processos e redução de custos operacionais.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Technical Skills */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Technical Skills
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>HTML</span>
                  <span>95%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>CSS</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>React</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Language Skills */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              Language Skills
            </h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Portuguese</span>
                  <span>100%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>English</span>
                  <span>85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Spanish</span>
                  <span>65%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Soft Skills */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Soft Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Team leadership and supervision
            </div>
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Strong attention to detail
            </div>
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Goal-oriented and results-driven
            </div>
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Problem-solving and decisiveness
            </div>
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Adaptability to changing environments
            </div>
            <div className="pl-6 relative">
              <span className="absolute left-0 top-1.5 w-2 h-2 bg-primary rounded-full"></span>
              Clear and effective communication
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
