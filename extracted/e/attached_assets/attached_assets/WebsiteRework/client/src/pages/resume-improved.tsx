import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type JobDetailType = 'job1' | 'job2' | 'job3' | 'edu1' | 'edu2';

export default function Resume() {
  const [activeSection, setActiveSection] = useState<'experience' | 'education' | 'skills'>('experience');
  const [activeJobDetail, setActiveJobDetail] = useState<JobDetailType>('job1');

  const handleViewDetail = (detailId: JobDetailType) => {
    setActiveJobDetail(detailId);
  };

  // Handle section change when clicking on navigation
  const handleSectionChange = (section: 'experience' | 'education' | 'skills') => {
    setActiveSection(section);
    
    // Auto-select first item in each section
    if (section === 'experience') {
      setActiveJobDetail('job1');
    } else if (section === 'education') {
      setActiveJobDetail('edu1');
    }
  };

  // Career experiences data
  const experiences = [
    {
      id: 'job1',
      title: 'Analista de Planejamento / Instrutor de Treinamento',
      company: 'Mills Estruturas',
      period: 'Mai 2022 - Ago 2024',
      description: 'Atuação multifuncional na Mills como Analista de Planejamento e Instrutor de Treinamento, gerenciando contratos in loco, supervisionando equipes operacionais e fornecendo treinamentos técnicos e de segurança.',
      activities: [
        'Focal in loco no gerenciamento do contrato Braskem (Abr 2023 - Ago 2024)',
        'Supervisão e gestão da equipe operacional e equipamentos',
        'Desenvolvimento e aplicação de treinamentos técnicos (Mai 2022 - Abr 2023)',
        'Programação de manutenções preventivas e corretivas',
        'Treinamentos de segurança para equipes operacionais',
        'Emissão e monitoramento de Boletins de Medição'
      ],
      icon: '🏢'
    },
    {
      id: 'job3',
      title: 'Professor Substituto',
      company: 'Pan American School',
      period: 'Mai 2021 - Fev 2022',
      description: 'Responsável por assumir turmas de forma temporária em diferentes disciplinas, com adaptação rápida a metodologias e cronogramas escolares.',
      activities: [
        'Assumir turmas temporárias em diferentes disciplinas',
        'Adaptação a metodologias e cronogramas escolares',
        'Monitoramento de desempenho dos alunos',
        'Acompanhamento individualizado dos alunos'
      ],
      icon: '🎓'
    },
    {
      id: 'job4',
      title: 'Técnico em Logística',
      company: 'Stone Pagamentos',
      period: 'Out 2019 - Ago 2020',
      description: 'Gestão logística de last mile, planejamento de rotas e distribuição, com controle de estoque e logística reversa.',
      activities: [
        'Gestão logística de last mile',
        'Planejamento de rotas e distribuição',
        'Controle de estoque e logística reversa',
        'Atendimento técnico externo e suporte a clientes'
      ],
      icon: '💳'
    },
    {
      id: 'job5',
      title: 'Auxiliar de Aeroporto',
      company: 'GOL Linhas Aéreas',
      period: 'Out 2013 - Fev 2019',
      description: 'Atendimento ao cliente em operações aeroportuárias, coordenação de embarque e processamento de documentos.',
      activities: [
        'Atendimento ao cliente e resolução de conflitos',
        'Coordenação de embarque e desembarque',
        'Processamento de documentos',
        'Gerenciamento de reclamações no SAC'
      ],
      icon: '✈️'
    },
    {
      id: 'job6',
      title: 'Proprietário',
      company: 'Betaprint',
      period: 'Mai 2016 - Mar 2017',
      description: 'Administração geral do negócio próprio no segmento de impressões e materiais gráficos.',
      activities: [
        'Administração geral e gestão financeira',
        'Controle de estoque e negociação com fornecedores',
        'Comercialização de produtos no varejo',
        'Desenvolvimento de estratégias de vendas'
      ],
      icon: '🖨️'
    },
    {
      id: 'job7',
      title: 'Agente de Viagens',
      company: 'TCH Viagens',
      period: 'Jul 2014 - Dez 2015',
      description: 'Vendas e assessoria em viagens, negociação de pacotes turísticos e atendimento personalizado a clientes.',
      activities: [
        'Vendas de pacotes turísticos',
        'Assessoria em planejamento de viagens',
        'Negociação com fornecedores',
        'Atendimento personalizado ao cliente'
      ],
      icon: '🏝️'
    },
    {
      id: 'job8',
      title: 'Atendente',
      company: 'MC DONALD\'S - FRANQUIA',
      period: 'Mai 2011 - Set 2012',
      description: 'Meu primeiro emprego, atuação no atendimento direto a clientes e preparação de pedidos.',
      activities: [
        'Atendimento ao cliente no balcão',
        'Registro e processamento rápido de pedidos',
        'Manutenção da limpeza e organização do ambiente de trabalho',
        'Controle de qualidade na montagem e entrega dos produtos'
      ],
      icon: '🍔'
    },
    {
      id: 'job9',
      title: 'Empacotador',
      company: 'Atacadão',
      period: 'Fev 2010 - Dez 2010',
      description: 'Experiência de trabalho no setor de varejo, atuando diretamente com clientes e organização de produtos.',
      activities: [
        'Empacotamento de produtos para os clientes',
        'Organização das compras nas sacolas',
        'Auxílio aos clientes com as mercadorias',
        'Manutenção da organização dos caixas'
      ],
      icon: '🛒'
    }
  ];

  // Education data
  const education = [
    {
      id: 'edu1',
      degree: 'Tecnólogo em Gestão Logística',
      institution: 'Instituto Federal do Ceará (IFCE)',
      period: '2019 - 2022',
      description: 'Formação em gestão logística com foco em cadeias de suprimentos, gestão de estoques e otimização de processos logísticos.',
      subjects: [
        'Gestão de Cadeia de Suprimentos',
        'Logística Empresarial',
        'Gestão de Estoques',
        'Sistemas de Transportes',
        'Planejamento e Controle da Produção'
      ],
      icon: '🎓'
    },
    {
      id: 'edu2',
      degree: 'Técnico de Nível Médio Integrado em Informática',
      institution: 'Instituto Federal do Ceará (IFCE)',
      period: '2014 - 2017',
      description: 'Formação técnica em informática integrada ao ensino médio, com foco em programação, redes e sistemas operacionais.',
      subjects: [
        'Programação em Java e C++',
        'Redes de Computadores',
        'Sistemas Operacionais',
        'Banco de Dados',
        'Desenvolvimento Web'
      ],
      icon: '💻'
    }
  ];

  // Skills data
  const skills = {
    technical: [
      { name: 'Inspeção de equipamentos pesados', level: 95 },
      { name: 'Operação de MEWP (IPAF, 3B Boom)', level: 90 },
      { name: 'Planejamento estratégico', level: 85 },
      { name: 'Gestão de contratos', level: 90 },
      { name: 'Organização de processos', level: 85 },
      { name: 'Controle de recursos financeiros', level: 80 },
      { name: 'Logística de last mile', level: 85 },
      { name: 'Análise de dados e KPI', level: 75 }
    ],
    language: [
      { name: 'Português', level: 100 },
      { name: 'Inglês', level: 60 },
      { name: 'Espanhol', level: 35 }
    ],
    soft: [
      'Liderança e supervisão de equipe',
      'Atenção a detalhes',
      'Orientação para metas e resultados',
      'Resolução de problemas',
      'Adaptabilidade a ambientes externos',
      'Resolução de conflitos e comunicação eficaz',
      'Proatividade e resiliência sob pressão'
    ],
    technologies: [
      'Bizagi Modeler - Mapeamento de processos',
      'G-Suite',
      'SapFiori',
      'Microsoft Office (PowerPoint, Outlook, Excel, Word)',
      'Windows em geral',
      'Python & HTML (Básicos)'
    ]
  };

  type ExperienceDetail = {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string;
    activities: string[];
    icon: string;
  };

  type EducationDetail = {
    id: string;
    degree: string;
    institution: string;
    period: string;
    description: string;
    subjects: string[];
    icon: string;
  };

  // Get active job detail data
  const getActiveDetail = (): ExperienceDetail | EducationDetail | null => {
    if (activeJobDetail.startsWith('job')) {
      return experiences.find(exp => exp.id === activeJobDetail) as ExperienceDetail;
    } else if (activeJobDetail.startsWith('edu')) {
      return education.find(edu => edu.id === activeJobDetail) as EducationDetail;
    }
    return null;
  };

  const activeDetail = getActiveDetail();

  return (
    <div className="container max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">MEU <span className="text-primary">CURRÍCULO</span></h1>
        <Button variant="outline" className="mb-6">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            BAIXAR MEU CV
          </span>
        </Button>
      </div>

      {/* Section Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <Button 
            variant={activeSection === 'experience' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => handleSectionChange('experience')}
          >
            Experiência
          </Button>
          <Button 
            variant={activeSection === 'education' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => handleSectionChange('education')}
          >
            Educação
          </Button>
          <Button 
            variant={activeSection === 'skills' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => handleSectionChange('skills')}
          >
            Habilidades
          </Button>
        </div>
      </div>

      {/* Experience Section */}
      <AnimatePresence mode="wait">
        {activeSection === 'experience' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Sidebar - Job List */}
              <div className="md:col-span-1">
                <Card className="h-full shadow-md bg-white/95 border-primary/10 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                      <span>Experiência</span>
                    </h2>
                    <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">
                      <div className="space-y-3">
                        {experiences.map((job) => (
                          <div 
                            key={job.id}
                            className={`p-3 rounded-lg cursor-pointer transition-all shadow-sm ${
                              activeJobDetail === job.id 
                                ? 'bg-gradient-to-r from-primary to-primary/90 text-white border border-primary/20' 
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                            }`}
                            onClick={() => handleViewDetail(job.id as JobDetailType)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={activeJobDetail === job.id}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleViewDetail(job.id as JobDetailType);
                              }
                            }}
                          >
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-3 ${activeJobDetail === job.id ? 'bg-white/20 text-white' : 'bg-white text-primary shadow-sm'}`}>
                                  {job.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className={`font-semibold truncate ${activeJobDetail === job.id ? 'text-white' : 'text-gray-800'}`}>
                                    {job.company}
                                  </h3>
                                  <div className={`text-xs mt-1 ${activeJobDetail === job.id ? 'text-white/80' : 'text-gray-600'}`}>
                                    {job.period}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content - Job Details */}
              <div className="md:col-span-2">
                <AnimatePresence mode="wait">
                  {activeDetail && activeDetail.id.startsWith('job') && (
                    <motion.div
                      key={activeDetail.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full shadow-lg border-primary/10 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                        <CardContent className="p-6 pt-8 min-h-[500px]">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mr-4 shadow-md flex-shrink-0">
                                {activeDetail.icon}
                              </div>
                              <div className="min-w-0">
                                <h2 className="text-2xl font-bold text-gray-800 truncate">{(activeDetail as ExperienceDetail).title}</h2>
                                <div className="flex items-center mt-1">
                                  <span className="text-primary font-medium truncate">{(activeDetail as ExperienceDetail).company}</span>
                                </div>
                              </div>
                            </div>
                            <div className="md:text-right md:flex-shrink-0">
                              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-center min-w-32 font-medium inline-block">
                                {activeDetail.period}
                              </div>
                            </div>
                          </div>

                          <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary mb-6">
                            <p className="text-gray-700">{activeDetail.description}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4 text-primary pb-2 border-b border-gray-100 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true"><path d="m9 12 2 2 4-4"></path><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" fill="rgba(79, 70, 229, 0.1)"></path><path d="M22 19H2"></path></svg>
                              Responsabilidades principais:
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                              {(activeDetail as ExperienceDetail).activities.map((activity: string, index: number) => (
                                <motion.li 
                                  key={index} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                  </div>
                                  <span className="text-gray-700">{activity}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Sidebar - Education List */}
              <div className="md:col-span-1">
                <Card className="h-full shadow-md bg-white/95 border-blue-500/10 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                  <CardContent className="p-4">
                    <h2 className="text-xl font-bold mb-4 flex items-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                      <span>Educação</span>
                    </h2>
                    <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100">
                      <div className="space-y-3">
                        {education.map((edu) => (
                          <div 
                            key={edu.id}
                            className={`p-3 rounded-lg cursor-pointer transition-all shadow-sm ${
                              activeJobDetail === edu.id 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white border border-blue-400/20' 
                                : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                            }`}
                            onClick={() => handleViewDetail(edu.id as JobDetailType)}
                            role="button"
                            tabIndex={0}
                            aria-pressed={activeJobDetail === edu.id}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleViewDetail(edu.id as JobDetailType);
                              }
                            }}
                          >
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full shrink-0 mr-3 ${activeJobDetail === edu.id ? 'bg-white/20 text-white' : 'bg-white text-blue-500 shadow-sm'}`}>
                                  {edu.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className={`font-semibold truncate ${activeJobDetail === edu.id ? 'text-white' : 'text-gray-800'}`}>
                                    {edu.degree}
                                  </h3>
                                  <div className={`text-xs mt-1 ${activeJobDetail === edu.id ? 'text-white/80' : 'text-gray-600'}`}>
                                    {edu.period}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Content - Education Details */}
              <div className="md:col-span-2">
                <AnimatePresence mode="wait">
                  {activeDetail && activeDetail.id.startsWith('edu') && (
                    <motion.div
                      key={activeDetail.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="h-full shadow-lg border-blue-500/10 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-primary"></div>
                        <CardContent className="p-6 pt-8 min-h-[500px]">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                            <div className="flex items-center">
                              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 text-2xl mr-4 shadow-md flex-shrink-0">
                                {activeDetail.icon}
                              </div>
                              <div className="min-w-0">
                                <h2 className="text-2xl font-bold text-gray-800 truncate">{(activeDetail as EducationDetail).degree}</h2>
                                <div className="flex items-center mt-1">
                                  <span className="text-blue-600 font-medium truncate">{(activeDetail as EducationDetail).institution}</span>
                                </div>
                              </div>
                            </div>
                            <div className="md:text-right md:flex-shrink-0">
                              <div className="bg-blue-500/10 text-blue-600 px-4 py-2 rounded-lg text-center min-w-32 font-medium inline-block">
                                {activeDetail.period}
                              </div>
                            </div>
                          </div>

                          <div className="bg-blue-500/5 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                            <p className="text-gray-700">{activeDetail.description}</p>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold mb-4 text-blue-600 pb-2 border-b border-gray-100 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="rgba(59, 130, 246, 0.1)"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                              Principais disciplinas:
                            </h3>
                            <ul className="grid grid-cols-1 gap-3">
                              {(activeDetail as EducationDetail).subjects.map((subject: string, index: number) => (
                                <motion.li 
                                  key={index} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>
                                  </div>
                                  <span className="text-gray-700">{subject}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <div className="mb-8">
              {/* Main Skill Categories - Soft and Hard skills side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {/* Soft Skills Card */}
                <Card className="relative overflow-hidden shadow-md h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>
                  <CardContent className="p-6 pt-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      Soft Skills
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">Habilidades interpessoais e comportamentais</p>
                    
                    <div className="space-y-3 flex-grow">
                      {skills.soft.map((skill, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center py-2 border-b border-gray-100"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="mr-3 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                          <span className="font-medium text-gray-700">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hard Skills Card */}
                <Card className="relative overflow-hidden shadow-md h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <CardContent className="p-6 pt-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 flex items-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3" aria-hidden="true"><path d="M12 19c-4.3 1.4-7.3 1.4-7.3-1 0-.9-.9-2.9-1.7-5.5M6 1c1.9 1 3.3 1 5 0M13 1c1.9 1 3.3 1 5 0" /><path d="M12 5.3C8.5 3.5 6.7 3.5 5 5.3c-.9 1-1.9 4.4-2 6.7" /><path d="M19 5.3c-1.7-1.8-3.5-1.8-7 0" /><path d="M12 5.3V15" /><path d="M19 9c-.8 2.3-2 4.9-2 6" /><path d="M12 15c3.6 2 6.4 2 7.7 0" /></svg>
                      Hard Skills
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">Competências técnicas e conhecimentos específicos</p>
                    
                    <div className="space-y-3 flex-grow grid grid-cols-1 content-start">
                      {skills.technical.map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center py-2 border-b border-gray-100"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="mr-3 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 8 14 12"></polyline><path d="M18 8v12"></path><path d="M2 7h8a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h4"></path></svg>
                          </div>
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Idiomas e Tecnologias com separador vertical */}
              <Card className="relative overflow-hidden shadow-lg mt-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-x-0 gap-y-8">
                    {/* Seção de Idiomas */}
                    <div className="md:w-1/2 pr-0 md:pr-8">
                      <h3 className="text-xl font-bold mb-8 flex items-center text-blue-500">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                          <line x1="2" y1="12" x2="22" y2="12" stroke="#3B82F6" strokeWidth="2"/>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#3B82F6" strokeWidth="2"/>
                        </svg>
                        Idiomas
                      </h3>
                      
                      <div className="space-y-7">
                        {skills.language.map((lang, index) => (
                          <div key={index} className="mb-2">
                            <div className="flex items-center mb-3">
                              <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                              <span className="font-medium text-gray-800">{lang.name}</span>
                            </div>
                            <div className="flex items-center pl-1.5">
                              <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-blue-500 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${lang.level}%` }}
                                  transition={{ duration: 0.8, delay: index * 0.1 }}
                                />
                              </div>
                              <span className="text-sm text-gray-600 ml-3 w-12 text-right">{lang.level}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Separador vertical */}
                    <div className="hidden md:block w-px bg-gray-200 mx-6"></div>
                    
                    {/* Seção de Tecnologias */}
                    <div className="md:w-1/2 md:pl-8">
                      <h3 className="text-xl font-bold mb-8 flex items-center text-teal-500">
                        <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="#10B981" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                          <line x1="8" y1="21" x2="16" y2="21" stroke="#10B981" strokeWidth="2"/>
                          <line x1="12" y1="17" x2="12" y2="21" stroke="#10B981" strokeWidth="2"/>
                        </svg>
                        Tecnologias
                      </h3>
                      
                      <div className="space-y-4">
                        {skills.technologies.map((tech, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-center py-1 border-b border-gray-100"
                            initial={{ opacity: 0, x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div className="w-4 h-4 rounded-full bg-teal-500 mr-3 flex-shrink-0"></div>
                            <span className="font-medium text-gray-800">{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}