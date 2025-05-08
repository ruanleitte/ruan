export type Language = 'pt-br' | 'en' | 'es';

export const translations = {
  'pt-br': {
    language: {
      english: 'Inglês',
      spanish: 'Espanhol',
      portuguese: 'Português',
    },
    nav: {
      home: 'INÍCIO',
      about: 'SOBRE',
      resume: 'CURRÍCULO',
      portfolio: 'PORTFOLIO',
      contact: 'CONTATO',
    },
    home: {
      hello: 'OLÁ',
      im: 'EU SOU',
      iDo: 'EU FAÇO',
      roles: ['DESENVOLVEDOR WEB', 'UI/UX', 'ANALISTA DE PLANEJAMENTO'],
      description: 'Com mais de 5 anos de experiência profissional. Formado em Gestão Logística, aprimorei minhas habilidades através de trabalhos comerciais e freelance. Minhas competências incluem HTML, CSS, JavaScript, React e frameworks web modernos.',
      portfolio: 'PORTFOLIO',
    },
    resume: {
      title: 'Meu Currículo',
      experience: 'Experiência',
      education: 'Educação',
      skills: 'Habilidades',
      downloadCV: 'Baixar CV',
      experienceItems: {
        job1: {
          title: 'Analista de Planejamento',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Set 2021 - Presente',
          description: 'Como Analista de Planejamento, sou responsável por coordenar requisições de produção, analisar relatórios de desempenho e criar soluções para otimizar processos de produção.',
        },
        job2: {
          title: 'Assistente de Planejamento',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Fev 2021 - Set 2021',
          description: 'Auxiliava na coordenação de fluxos de produção, implementava melhorias nos processos e auxiliava no monitoramento de KPIs e métricas de produção.',
        },
        job3: {
          title: 'Promotor de Vendas',
          company: 'AMBEV S.A.',
          period: 'Nov 2019 - Fev 2021',
          description: 'Trabalhava como promotor de vendas, realizando a execução de materiais de merchandising, monitorando níveis de estoque e implementando estratégias promocionais.',
        },
      },
      educationItems: {
        edu1: {
          degree: 'Tecnólogo em Gestão Logística',
          institution: 'Instituto Federal do Ceará (IFCE)',
          period: '2019 - 2022',
          description: 'Formação em gestão logística com foco em cadeias de suprimentos, gestão de estoques e otimização de processos logísticos.',
        },
        edu2: {
          degree: 'Técnico de Nível Médio Integrado em Informática',
          institution: 'Instituto Federal do Ceará (IFCE)',
          period: '2014 - 2017',
          description: 'Formação técnica em informática integrada ao ensino médio, com foco em programação, redes e sistemas operacionais.',
        },
      },
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos trabalhar juntos!',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      address: 'Fortaleza, CE, Brasil',
      phone: '+55 (85) 9 9999-9999',
      emailAddress: 'contato@ruanjasiel.com',
      formSuccess: 'Mensagem enviada com sucesso!',
      formError: 'Erro ao enviar mensagem. Tente novamente.',
    },
  },
  
  'en': {
    language: {
      english: 'English',
      spanish: 'Spanish',
      portuguese: 'Portuguese',
    },
    nav: {
      home: 'HOME',
      about: 'ABOUT',
      resume: 'RESUME',
      portfolio: 'PORTFOLIO',
      contact: 'CONTACT',
    },
    home: {
      hello: 'HELLO',
      im: 'I AM',
      iDo: 'I DO',
      roles: ['WEB DEVELOPER', 'UI/UX', 'PLANNING ANALYST'],
      description: 'With over 5 years of professional experience. Graduated in Logistics Management, I enhanced my skills through commercial work and freelancing. My competencies include HTML, CSS, JavaScript, React, and modern web frameworks.',
      portfolio: 'PORTFOLIO',
    },
    resume: {
      title: 'My Resume',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      downloadCV: 'Download CV',
      experienceItems: {
        job1: {
          title: 'Planning Analyst',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Sep 2021 - Present',
          description: 'As a Planning Analyst, I am responsible for coordinating production requests, analyzing performance reports, and creating solutions to optimize production processes.',
        },
        job2: {
          title: 'Planning Assistant',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Feb 2021 - Sep 2021',
          description: 'Assisted in coordinating production flows, implemented process improvements, and helped monitor KPIs and production metrics.',
        },
        job3: {
          title: 'Sales Promoter',
          company: 'AMBEV S.A.',
          period: 'Nov 2019 - Feb 2021',
          description: 'Worked as a sales promoter, executing merchandising materials, monitoring stock levels, and implementing promotional strategies.',
        },
      },
      educationItems: {
        edu1: {
          degree: 'Technologist in Logistics Management',
          institution: 'Federal Institute of Ceará (IFCE)',
          period: '2019 - 2022',
          description: 'Education in logistics management with a focus on supply chains, inventory management, and logistics process optimization.',
        },
        edu2: {
          degree: 'Integrated Technical High School in Computer Science',
          institution: 'Federal Institute of Ceará (IFCE)',
          period: '2014 - 2017',
          description: 'Technical education in computer science integrated with high school, focusing on programming, networks, and operating systems.',
        },
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s work together!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      address: 'Fortaleza, CE, Brazil',
      phone: '+55 (85) 9 9999-9999',
      emailAddress: 'contact@ruanjasiel.com',
      formSuccess: 'Message sent successfully!',
      formError: 'Error sending message. Please try again.',
    },
  },
  
  'es': {
    language: {
      english: 'Inglés',
      spanish: 'Español',
      portuguese: 'Portugués',
    },
    nav: {
      home: 'INICIO',
      about: 'ACERCA',
      resume: 'CURRÍCULUM',
      portfolio: 'PORTAFOLIO',
      contact: 'CONTACTO',
    },
    home: {
      hello: 'HOLA',
      im: 'SOY',
      iDo: 'HAGO',
      roles: ['DESARROLLADOR WEB', 'UI/UX', 'ANALISTA DE PLANIFICACIÓN'],
      description: 'Con más de 5 años de experiencia profesional. Graduado en Gestión Logística, mejoré mis habilidades a través del trabajo comercial y como freelancer. Mis competencias incluyen HTML, CSS, JavaScript, React y frameworks web modernos.',
      portfolio: 'PORTAFOLIO',
    },
    resume: {
      title: 'Mi Currículum',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      downloadCV: 'Descargar CV',
      experienceItems: {
        job1: {
          title: 'Analista de Planificación',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Sep 2021 - Presente',
          description: 'Como Analista de Planificación, soy responsable de coordinar las solicitudes de producción, analizar informes de rendimiento y crear soluciones para optimizar los procesos de producción.',
        },
        job2: {
          title: 'Asistente de Planificación',
          company: 'TORC Ind. e Com. de Produtos Têxteis SA',
          period: 'Feb 2021 - Sep 2021',
          description: 'Asistía en la coordinación de flujos de producción, implementaba mejoras en los procesos y ayudaba a monitorear KPIs y métricas de producción.',
        },
        job3: {
          title: 'Promotor de Ventas',
          company: 'AMBEV S.A.',
          period: 'Nov 2019 - Feb 2021',
          description: 'Trabajaba como promotor de ventas, ejecutando materiales de merchandising, monitoreando niveles de stock e implementando estrategias promocionales.',
        },
      },
      educationItems: {
        edu1: {
          degree: 'Tecnólogo en Gestión Logística',
          institution: 'Instituto Federal de Ceará (IFCE)',
          period: '2019 - 2022',
          description: 'Formación en gestión logística con enfoque en cadenas de suministro, gestión de inventarios y optimización de procesos logísticos.',
        },
        edu2: {
          degree: 'Técnico de Nivel Medio Integrado en Informática',
          institution: 'Instituto Federal de Ceará (IFCE)',
          period: '2014 - 2017',
          description: 'Formación técnica en informática integrada con la enseñanza media, con enfoque en programación, redes y sistemas operativos.',
        },
      },
    },
    contact: {
      title: 'Contáctame',
      subtitle: '¡Trabajemos juntos!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      address: 'Fortaleza, CE, Brasil',
      phone: '+55 (85) 9 9999-9999',
      emailAddress: 'contacto@ruanjasiel.com',
      formSuccess: '¡Mensaje enviado con éxito!',
      formError: 'Error al enviar mensaje. Inténtalo de nuevo.',
    },
  }
};