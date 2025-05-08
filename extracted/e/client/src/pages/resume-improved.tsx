import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

type JobDetailType = 'job1' | 'job2' | 'job3' | 'job4' | 'job5' | 'job6' | 'job8' | 'job9' | 'edu1' | 'edu2';

export default function Resume() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'experience' | 'education' | 'skills'>('experience');
  const [activeJobDetail, setActiveJobDetail] = useState<JobDetailType>('job1');
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [selectedCVLanguage, setSelectedCVLanguage] = useState<string | null>(null);
  
  const downloadMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setShowCVOptions(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleViewDetail = (detailId: JobDetailType) => {
    setActiveJobDetail(detailId);
  };
  
  // Função para baixar o CV selecionado
  const downloadCV = (lang: string) => {
    const filePath = lang === 'pt' ? '/files/cv_pt.pdf' : '/files/cv_en.pdf';
    window.open(filePath, '_blank');
    setShowCVOptions(false);
    setSelectedCVLanguage(lang);
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

  // Dados multilíngues para experiências
  const experiencesData = {
    'pt-br': [
      {
        id: 'job1',
        title: 'Analista de Planejamento',
        company: 'Mills Estruturas',
        period: 'Mai 2022 - Ago 2024',
        description: 'Gerenciamento de contratos, supervisão de equipes operacionais e implementação de treinamentos técnicos e de segurança.',
        activities: [
          'Gerenciamento do contrato Braskem',
          'Supervisão de equipe operacional',
          'Treinamentos técnicos e de segurança',
          'Manutenções preventivas',
          'Emissão de Boletins de Medição'
        ],
        icon: '🏢'
      },
      {
        id: 'job3',
        title: 'Professor',
        company: 'Pan American School',
        period: 'Mai 2021 - Fev 2022',
        description: 'Docência em diversas disciplinas com adaptação ágil a diferentes metodologias e cronogramas escolares.',
        activities: [
          'Docência multidisciplinar',
          'Adaptação a metodologias variadas',
          'Monitoramento de desempenho',
          'Acompanhamento personalizado'
        ],
        icon: '🎓'
      },
      {
        id: 'job4',
        title: 'Técnico em Logística',
        company: 'Stone Pagamentos',
        period: 'Out 2019 - Ago 2020',
        description: 'Gestão de operações logísticas, otimização de rotas, controle de estoque e administração de logística reversa.',
        activities: [
          'Gestão logística de last mile',
          'Otimização de rotas',
          'Controle de estoque',
          'Suporte técnico a clientes'
        ],
        icon: '💳'
      },
      {
        id: 'job6',
        title: 'Empreendedor',
        company: 'Betaprint',
        period: 'Mai 2016 - Mar 2017',
        description: 'Administração de negócio próprio no segmento de impressões e materiais gráficos.',
        activities: [
          'Gestão financeira',
          'Controle de estoque',
          'Vendas no varejo',
          'Estratégias de marketing'
        ],
        icon: '🖨️'
      },
      {
        id: 'job7',
        title: 'Agente de Viagens',
        company: 'Tch Viagens',
        period: 'Mar 2014 - Fev 2015',
        description: 'Atendimento a clientes, planejamento e cotação de viagens, e gestão de reservas em agência de turismo.',
        activities: [
          'Atendimento ao cliente',
          'Planejamento de roteiros',
          'Cotação de pacotes',
          'Gestão de reservas'
        ],
        icon: '🏝️'
      },
      {
        id: 'job5',
        title: 'Agente Aeroportuário',
        company: 'GOL Linhas Aéreas',
        period: 'Out 2013 - Fev 2019',
        description: 'Atendimento ao cliente em operações aeroportuárias, coordenação de embarque e resolução de problemas operacionais.',
        activities: [
          'Atendimento premium a clientes',
          'Coordenação de embarques',
          'Resolução de irregularidades',
          'Gestão de reclamações'
        ],
        icon: '✈️'
      },
      {
        id: 'job9',
        title: 'Auxiliar de Atendimento',
        company: 'Atacadão',
        period: 'Set 2012 - Mai 2013',
        description: 'Suporte aos clientes em rede de varejo, organização de produtos e auxílio no caixa.',
        activities: [
          'Empacotamento de compras',
          'Organização de produtos',
          'Auxílio aos clientes',
          'Suporte aos operadores'
        ],
        icon: '🛒'
      },
      {
        id: 'job8',
        title: 'Atendente',
        company: 'McDonald\'s',
        period: 'Mai 2011 - Set 2012',
        description: 'Atendimento ao cliente, operação de caixa e preparação de pedidos em ambiente de restaurante fast-food.',
        activities: [
          'Atendimento ao cliente',
          'Operação de caixa',
          'Manutenção da limpeza',
          'Controle de qualidade'
        ],
        icon: '🍔'
      }
    ],
    'en': [
      {
        id: 'job1',
        title: 'Planning Analyst',
        company: 'Mills Estruturas',
        period: 'May 2022 - Aug 2024',
        description: 'Contract management, operational team supervision, and implementation of technical and safety training programs.',
        activities: [
          'Management of Braskem contract',
          'Operational team supervision',
          'Technical and safety training',
          'Preventive maintenance',
          'Measurement reporting'
        ],
        icon: '🏢'
      },
      {
        id: 'job3',
        title: 'Teacher',
        company: 'Pan American School',
        period: 'May 2021 - Feb 2022',
        description: 'Teaching across multiple subjects with agile adaptation to different methodologies and school schedules.',
        activities: [
          'Multidisciplinary teaching',
          'Adaptation to varied methodologies',
          'Performance monitoring',
          'Personalized student support'
        ],
        icon: '🎓'
      },
      {
        id: 'job4',
        title: 'Logistics Technician',
        company: 'Stone Payments',
        period: 'Oct 2019 - Aug 2020',
        description: 'Management of logistics operations, route optimization, inventory control, and reverse logistics administration.',
        activities: [
          'Last mile logistics management',
          'Route optimization',
          'Inventory control',
          'Technical customer support'
        ],
        icon: '💳'
      },
      {
        id: 'job6',
        title: 'Entrepreneur',
        company: 'Betaprint',
        period: 'May 2016 - Mar 2017',
        description: 'Management of own business in the printing and graphic materials segment.',
        activities: [
          'Financial management',
          'Inventory control',
          'Retail sales',
          'Marketing strategies'
        ],
        icon: '🖨️'
      },
      {
        id: 'job7',
        title: 'Travel Agent',
        company: 'Tch Viagens',
        period: 'Mar 2014 - Feb 2015',
        description: 'Customer service, trip planning and quotation, and reservation management at a travel agency.',
        activities: [
          'Customer service',
          'Itinerary planning',
          'Package quotation',
          'Reservation management'
        ],
        icon: '🏝️'
      },
      {
        id: 'job5',
        title: 'Airport Agent',
        company: 'GOL Airlines',
        period: 'Oct 2013 - Feb 2019',
        description: 'Customer service in airport operations, boarding coordination, and resolution of operational issues.',
        activities: [
          'Premium customer service',
          'Boarding coordination',
          'Issue resolution',
          'Complaint management'
        ],
        icon: '✈️'
      },
      {
        id: 'job9',
        title: 'Customer Support Assistant',
        company: 'Atacadão',
        period: 'Sep 2012 - May 2013',
        description: 'Support to customers in retail chain, product organization, and cash register assistance.',
        activities: [
          'Order packing',
          'Product organization',
          'Customer assistance',
          'Operator support'
        ],
        icon: '🛒'
      },
      {
        id: 'job8',
        title: 'Attendant',
        company: 'McDonald\'s',
        period: 'May 2011 - Sep 2012',
        description: 'Customer service, cash operation, and order preparation in a fast-food restaurant environment.',
        activities: [
          'Customer service',
          'Cash operation',
          'Cleaning maintenance',
          'Quality control'
        ],
        icon: '🍔'
      }
    ],
    'es': [
      {
        id: 'job1',
        title: 'Analista de Planificación',
        company: 'Mills Estruturas',
        period: 'May 2022 - Ago 2024',
        description: 'Gestión de contratos, supervisión de equipos operativos e implementación de capacitaciones técnicas y de seguridad.',
        activities: [
          'Gestión del contrato Braskem',
          'Supervisión de equipo operativo',
          'Capacitación técnica y de seguridad',
          'Mantenimiento preventivo',
          'Emisión de boletines de medición'
        ],
        icon: '🏢'
      },
      {
        id: 'job3',
        title: 'Profesor',
        company: 'Pan American School',
        period: 'May 2021 - Feb 2022',
        description: 'Enseñanza en diversas disciplinas con adaptación ágil a diferentes metodologías y cronogramas escolares.',
        activities: [
          'Enseñanza multidisciplinaria',
          'Adaptación a metodologías variadas',
          'Seguimiento de rendimiento',
          'Apoyo personalizado a estudiantes'
        ],
        icon: '🎓'
      },
      {
        id: 'job4',
        title: 'Técnico en Logística',
        company: 'Stone Pagamentos',
        period: 'Oct 2019 - Ago 2020',
        description: 'Gestión de operaciones logísticas, optimización de rutas, control de inventario y administración de logística inversa.',
        activities: [
          'Gestión logística de última milla',
          'Optimización de rutas',
          'Control de inventario',
          'Soporte técnico a clientes'
        ],
        icon: '💳'
      },
      {
        id: 'job6',
        title: 'Emprendedor',
        company: 'Betaprint',
        period: 'May 2016 - Mar 2017',
        description: 'Administración de negocio propio en el segmento de impresiones y materiales gráficos.',
        activities: [
          'Gestión financiera',
          'Control de inventario',
          'Ventas minoristas',
          'Estrategias de marketing'
        ],
        icon: '🖨️'
      },
      {
        id: 'job7',
        title: 'Agente de Viajes',
        company: 'Tch Viagens',
        period: 'Mar 2014 - Feb 2015',
        description: 'Atención al cliente, planificación y cotización de viajes, y gestión de reservas en agencia de turismo.',
        activities: [
          'Atención al cliente',
          'Planificación de itinerarios',
          'Cotización de paquetes',
          'Gestión de reservas'
        ],
        icon: '🏝️'
      },
      {
        id: 'job5',
        title: 'Agente Aeroportuario',
        company: 'GOL Líneas Aéreas',
        period: 'Oct 2013 - Feb 2019',
        description: 'Atención al cliente en operaciones aeroportuarias, coordinación de embarque y resolución de problemas operativos.',
        activities: [
          'Servicio premium a clientes',
          'Coordinación de embarques',
          'Resolución de irregularidades',
          'Gestión de reclamaciones'
        ],
        icon: '✈️'
      },
      {
        id: 'job9',
        title: 'Auxiliar de Atención',
        company: 'Atacadão',
        period: 'Sep 2012 - May 2013',
        description: 'Soporte a los clientes en red minorista, organización de productos y ayuda en caja.',
        activities: [
          'Empaquetado de compras',
          'Organización de productos',
          'Asistencia a clientes',
          'Soporte a operadores'
        ],
        icon: '🛒'
      },
      {
        id: 'job8',
        title: 'Atendiente',
        company: 'McDonald\'s',
        period: 'May 2011 - Sep 2012',
        description: 'Atención al cliente, operación de caja y preparación de pedidos en ambiente de restaurante de comida rápida.',
        activities: [
          'Atención al cliente',
          'Operación de caja',
          'Mantenimiento de limpieza',
          'Control de calidad'
        ],
        icon: '🍔'
      }
    ]
  };
  
  // Utilizar experiências com base no idioma atual e ordenar por data (mais recente primeiro)
  const experiences = (experiencesData[language] || experiencesData['pt-br']);

  // Dados multilíngues para educação
  const educationData = {
    'pt-br': [
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
    ],
    'en': [
      {
        id: 'edu1',
        degree: 'Bachelor of Logistics Management',
        institution: 'Federal Institute of Ceará (IFCE)',
        period: '2019 - 2022',
        description: 'Education in logistics management focusing on supply chain, inventory management, and optimization of logistics processes.',
        subjects: [
          'Supply Chain Management',
          'Business Logistics',
          'Inventory Management',
          'Transportation Systems',
          'Production Planning and Control'
        ],
        icon: '🎓'
      },
      {
        id: 'edu2',
        degree: 'Technical High School in Computer Science',
        institution: 'Federal Institute of Ceará (IFCE)',
        period: '2014 - 2017',
        description: 'Technical education in computer science integrated with high school, focusing on programming, networks, and operating systems.',
        subjects: [
          'Programming in Java and C++',
          'Computer Networks',
          'Operating Systems',
          'Database Management',
          'Web Development'
        ],
        icon: '💻'
      }
    ],
    'es': [
      {
        id: 'edu1',
        degree: 'Tecnólogo en Gestión Logística',
        institution: 'Instituto Federal de Ceará (IFCE)',
        period: '2019 - 2022',
        description: 'Formación en gestión logística con énfasis en cadenas de suministro, gestión de inventarios y optimización de procesos logísticos.',
        subjects: [
          'Gestión de Cadena de Suministro',
          'Logística Empresarial',
          'Gestión de Inventarios',
          'Sistemas de Transporte',
          'Planificación y Control de Producción'
        ],
        icon: '🎓'
      },
      {
        id: 'edu2',
        degree: 'Técnico de Nivel Medio Integrado en Informática',
        institution: 'Instituto Federal de Ceará (IFCE)',
        period: '2014 - 2017',
        description: 'Formación técnica en informática integrada con la enseñanza secundaria, con énfasis en programación, redes y sistemas operativos.',
        subjects: [
          'Programación en Java y C++',
          'Redes de Computadoras',
          'Sistemas Operativos',
          'Bases de Datos',
          'Desarrollo Web'
        ],
        icon: '💻'
      }
    ]
  };
  
  // Utilizar educação com base no idioma atual
  const education = educationData[language] || educationData['pt-br'];

  // Dados multilíngues para habilidades
  const skillsData = {
    'pt-br': {
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
    },
    'en': {
      technical: [
        { name: 'Heavy equipment inspection', level: 95 },
        { name: 'MEWP Operation (IPAF, 3B Boom)', level: 90 },
        { name: 'Strategic planning', level: 85 },
        { name: 'Contract management', level: 90 },
        { name: 'Process organization', level: 85 },
        { name: 'Financial resource control', level: 80 },
        { name: 'Last mile logistics', level: 85 },
        { name: 'Data analysis and KPIs', level: 75 }
      ],
      language: [
        { name: 'Portuguese', level: 100 },
        { name: 'English', level: 60 },
        { name: 'Spanish', level: 35 }
      ],
      soft: [
        'Leadership and team supervision',
        'Attention to detail',
        'Goal and results orientation',
        'Problem solving',
        'Adaptability to external environments',
        'Conflict resolution and effective communication',
        'Proactivity and resilience under pressure'
      ],
      technologies: [
        'Bizagi Modeler - Process mapping',
        'G-Suite',
        'SapFiori',
        'Microsoft Office (PowerPoint, Outlook, Excel, Word)',
        'Windows general use',
        'Python & HTML (Basic knowledge)'
      ]
    },
    'es': {
      technical: [
        { name: 'Inspección de equipos pesados', level: 95 },
        { name: 'Operación de MEWP (IPAF, 3B Boom)', level: 90 },
        { name: 'Planificación estratégica', level: 85 },
        { name: 'Gestión de contratos', level: 90 },
        { name: 'Organización de procesos', level: 85 },
        { name: 'Control de recursos financieros', level: 80 },
        { name: 'Logística de última milla', level: 85 },
        { name: 'Análisis de datos y KPI', level: 75 }
      ],
      language: [
        { name: 'Portugués', level: 100 },
        { name: 'Inglés', level: 60 },
        { name: 'Español', level: 35 }
      ],
      soft: [
        'Liderazgo y supervisión de equipos',
        'Atención al detalle',
        'Orientación a metas y resultados',
        'Resolución de problemas',
        'Adaptabilidad a entornos externos',
        'Resolución de conflictos y comunicación eficaz',
        'Proactividad y resiliencia bajo presión'
      ],
      technologies: [
        'Bizagi Modeler - Mapeo de procesos',
        'G-Suite',
        'SapFiori',
        'Microsoft Office (PowerPoint, Outlook, Excel, Word)',
        'Windows en general',
        'Python & HTML (Conocimientos básicos)'
      ]
    }
  };
  
  // Utilizar habilidades com base no idioma atual
  const skills = skillsData[language] || skillsData['pt-br'];

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
        <h1 className="text-3xl font-bold mb-4">{t('resume.title')}</h1>
        <div className="relative inline-block" ref={downloadMenuRef}>
          {showCVOptions ? (
            <div className="bg-white rounded-lg shadow-lg p-3 absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10 min-w-[200px] border border-gray-200">
              <div className="text-sm font-medium text-gray-600 mb-2 text-center">{t('resume.selectLanguage') || 'Selecione o idioma'}</div>
              <div className="flex flex-col gap-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => downloadCV('pt')}
                >
                  <span className="mr-2">🇧🇷</span> Português
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => downloadCV('en')}
                >
                  <span className="mr-2">🇺🇸</span> English
                </Button>
              </div>
            </div>
          ) : null}
          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => setShowCVOptions(!showCVOptions)}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {selectedCVLanguage 
                ? `${t('resume.downloadCV')} (${selectedCVLanguage === 'pt' ? '🇧🇷' : '🇺🇸'})` 
                : t('resume.downloadCV')}
            </span>
          </Button>
        </div>
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
            {t('resume.experience')}
          </Button>
          <Button 
            variant={activeSection === 'education' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => handleSectionChange('education')}
          >
            {t('resume.education')}
          </Button>
          <Button 
            variant={activeSection === 'skills' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => handleSectionChange('skills')}
          >
            {t('resume.skills')}
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
                      <span>{t('resume.experience')}</span>
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
                              {t('resume.mainResponsibilities')}
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
                      <span>{t('resume.education')}</span>
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
                              {t('resume.mainSubjects')}
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
                      {t('resume.softSkills')}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{t('resume.softSkillsDesc')}</p>
                    
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
                      {t('resume.hardSkills')}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{t('resume.hardSkillsDesc')}</p>
                    
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
                        {t('resume.languages')}
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
                        {t('resume.technologies')}
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