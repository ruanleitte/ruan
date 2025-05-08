import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Separator } from "@/components/ui/separator";

export default function Empresas() {
  const { t, language } = useLanguage();
  
  // Estado para filtrar por tipo de experiência
  const [filter, setFilter] = useState("all");
  
  // Dados das empresas com tradução para todos idiomas
  const companiesData = {
    'pt-br': [
      {
        id: 1,
        name: "Mills Estruturas",
        period: "Mai 2022 - Ago 2024",
        industry: "Construção e Infraestrutura",
        segment: "Locação de equipamentos para construção",
        locations: ["Salvador", "Rio de Janeiro", "São Paulo", "Recife", "Belo Horizonte"],
        clients: ["Petrobras", "Braskem", "Vale"],
        category: "logistica",
        color: "#1E40AF"
      },
      {
        id: 2,
        name: "Pan American School",
        period: "Mai 2021 - Fev 2022",
        industry: "Educação Internacional",
        segment: "Educação básica e ensino médio internacional",
        locations: ["Salvador"],
        clients: ["Famílias de classe alta", "Executivos expatriados"],
        category: "educacao",
        color: "#7E22CE"
      },
      {
        id: 3,
        name: "Stone Pagamentos",
        period: "Out 2019 - Ago 2020", 
        industry: "Serviços Financeiros e Tecnologia",
        segment: "Meios de pagamento e serviços financeiros",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Pequenos e médios empreendedores", "E-commerces"],
        category: "tecnologia",
        color: "#047857"
      },
      {
        id: 5,
        name: "Betaprint",
        period: "Mai 2016 - Mar 2017", 
        industry: "Impressões e Serviços Gráficos",
        segment: "Impressões e materiais gráficos",
        locations: ["Salvador"],
        clients: ["Pequenas empresas", "Clientes particulares"],
        category: "servicos",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Tch Viagens",
        period: "Out 2014 - Mar 2015",
        industry: "Turismo e Viagens",
        segment: "Serviços de receptivo turístico",
        locations: ["Salvador"],
        clients: ["Turistas nacionais e internacionais", "Agências de viagens"],
        category: "servicos",
        color: "#2563EB"
      },
      {
        id: 4,
        name: "GOL Linhas Aéreas",
        period: "Out 2013 - Fev 2019",
        industry: "Transporte Aéreo",
        segment: "Transporte aéreo de passageiros e cargas",
        locations: ["Salvador", "Outros 60+ destinos no Brasil e exterior"],
        clients: ["Viajantes a negócios", "Turistas"],
        category: "logistica",
        color: "#B45309"
      },
      {
        id: 8,
        name: "Atacadão",
        period: "Set 2012 - Mai 2013",
        industry: "Varejo e Atacado",
        segment: "Supermercado atacadista",
        locations: ["Salvador"],
        clients: ["Consumidores finais", "Pequenos comerciantes"],
        category: "servicos",
        color: "#059669"
      },
      {
        id: 7,
        name: "McDonald's",
        period: "Mai 2011 - Set 2012",
        industry: "Alimentação",
        segment: "Fast food",
        locations: ["Salvador"],
        clients: ["Público em geral"],
        category: "servicos",
        color: "#DC2626"
      }
    ],
    'en': [
      {
        id: 1,
        name: "Mills Rental",
        period: "May 2022 - Aug 2024",
        industry: "Construction & Infrastructure",
        segment: "Construction equipment rental",
        locations: ["Salvador", "Rio de Janeiro", "São Paulo", "Recife", "Belo Horizonte"],
        clients: ["Petrobras", "Braskem", "Vale"],
        category: "logistica",
        color: "#1E40AF"
      },
      {
        id: 2,
        name: "Pan American School",
        period: "May 2021 - Feb 2022",
        industry: "International Education",
        segment: "Bilingual elementary and high school education",
        locations: ["Salvador"],
        clients: ["High-income families", "Expatriate executives"],
        category: "educacao",
        color: "#7E22CE"
      },
      {
        id: 3,
        name: "Stone Payments",
        period: "Oct 2019 - Aug 2020", 
        industry: "Financial Services & Technology",
        segment: "Payment solutions and financial services",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Small and medium entrepreneurs", "E-commerce"],
        category: "tecnologia",
        color: "#047857"
      },
      {
        id: 5,
        name: "Betaprint",
        period: "May 2016 - Mar 2017", 
        industry: "Printing and Graphic Services",
        segment: "Printing and graphic materials",
        locations: ["Salvador"],
        clients: ["Small businesses", "Individual clients"],
        category: "servicos",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Tch Viagens",
        period: "Oct 2014 - Mar 2015",
        industry: "Tourism and Travel",
        segment: "Tourist reception services",
        locations: ["Salvador"],
        clients: ["National and international tourists", "Travel agencies"],
        category: "servicos",
        color: "#2563EB"
      },
      {
        id: 4,
        name: "GOL Airlines",
        period: "Oct 2013 - Feb 2019",
        industry: "Air Transportation",
        segment: "Passenger and cargo air transport",
        locations: ["Salvador", "Other 60+ destinations in Brazil and abroad"],
        clients: ["Business travelers", "Tourists"],
        category: "logistica",
        color: "#B45309"
      },
      {
        id: 8,
        name: "Atacadão",
        period: "Sep 2012 - May 2013",
        industry: "Retail and Wholesale",
        segment: "Wholesale supermarket",
        locations: ["Salvador"],
        clients: ["End consumers", "Small businesses"],
        category: "servicos",
        color: "#059669"
      },
      {
        id: 7,
        name: "McDonald's",
        period: "May 2011 - Sep 2012",
        industry: "Food Services",
        segment: "Fast food chain",
        locations: ["Salvador"],
        clients: ["General public"],
        category: "servicos",
        color: "#DC2626"
      }
    ],
    'es': [
      {
        id: 1,
        name: "Mills Estruturas",
        period: "May 2022 - Ago 2024",
        industry: "Construcción e Infraestructura",
        segment: "Alquiler de equipos para construcción",
        locations: ["Salvador", "Rio de Janeiro", "São Paulo", "Recife", "Belo Horizonte"],
        clients: ["Petrobras", "Braskem", "Vale"],
        category: "logistica",
        color: "#1E40AF"
      },
      {
        id: 2,
        name: "Pan American School",
        period: "May 2021 - Feb 2022",
        industry: "Educación Internacional",
        segment: "Educación primaria y secundaria bilingüe",
        locations: ["Salvador"],
        clients: ["Familias de altos ingresos", "Ejecutivos expatriados"],
        category: "educacao",
        color: "#7E22CE"
      },
      {
        id: 3,
        name: "Stone Pagamentos",
        period: "Oct 2019 - Ago 2020", 
        industry: "Servicios Financieros y Tecnología",
        segment: "Soluciones de pago y servicios financieros",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Pequeños y medianos emprendedores", "E-commerce"],
        category: "tecnologia",
        color: "#047857"
      },
      {
        id: 5,
        name: "Betaprint",
        period: "May 2016 - Mar 2017", 
        industry: "Impresión y Servicios Gráficos",
        segment: "Impresiones y materiales gráficos",
        locations: ["Salvador"],
        clients: ["Pequeñas empresas", "Clientes particulares"],
        category: "servicos",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Tch Viagens",
        period: "Oct 2014 - Mar 2015",
        industry: "Turismo y Viajes",
        segment: "Servicios de recepción turística",
        locations: ["Salvador"],
        clients: ["Turistas nacionales e internacionales", "Agencias de viajes"],
        category: "servicos",
        color: "#2563EB"
      },
      {
        id: 4,
        name: "GOL Líneas Aéreas",
        period: "Oct 2013 - Feb 2019",
        industry: "Transporte Aéreo",
        segment: "Transporte aéreo de pasajeros y carga",
        locations: ["Salvador", "Otros 60+ destinos en Brasil y extranjero"],
        clients: ["Viajeros de negocios", "Turistas"],
        category: "logistica",
        color: "#B45309"
      },
      {
        id: 8,
        name: "Atacadão",
        period: "Sep 2012 - May 2013",
        industry: "Venta al por menor y al por mayor",
        segment: "Supermercado mayorista",
        locations: ["Salvador"],
        clients: ["Consumidores finales", "Pequeños comerciantes"],
        category: "servicos",
        color: "#059669"
      },
      {
        id: 7,
        name: "McDonald's",
        period: "May 2011 - Sep 2012",
        industry: "Servicios de Alimentación",
        segment: "Cadena de comida rápida",
        locations: ["Salvador"],
        clients: ["Público general"],
        category: "servicos",
        color: "#DC2626"
      }
    ]
  };
  
  // Obter empresas para o idioma atual
  const companies = companiesData[language] || companiesData['pt-br'];

  // Filtrar empresas com base no filtro selecionado
  const filteredCompanies = filter === "all" 
    ? companies 
    : companies.filter(company => company.category === filter);

  // Categorias para filtragem com tradução
  const categories = [
    { id: "all", name: t('portfolio.allCategories') },
    { id: "logistica", name: t('portfolio.logistics') },
    { id: "educacao", name: t('portfolio.education') },
    { id: "servicos", name: t('portfolio.services') },
    { id: "tecnologia", name: t('portfolio.technology') }
  ];

  return (
    <div className="container py-12 max-w-6xl mx-auto px-4">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-3">{t('portfolio.title')}</h1>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('portfolio.subtitle')}
        </p>
      </motion.div>
      
      {/* Filtros por categoria */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={filter === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category.id)}
            className="rounded-md"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Design Padronizado Único */}
      <div className="space-y-5">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-all">
              <div className="p-6">
                {/* Cabeçalho com faixa de cor */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-3 h-8 rounded-sm flex-shrink-0" 
                        style={{ backgroundColor: company.color }}
                      ></div>
                      <div>
                        <h3 className="font-bold text-xl">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">{company.period}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Badge 
                    className="text-sm px-3 py-1 font-medium whitespace-nowrap"
                    style={{ 
                      backgroundColor: `${company.color}15`, 
                      color: company.color 
                    }}
                  >
                    {company.industry}
                  </Badge>
                </div>
                
                <Separator className="my-4" />
                
                {/* Informações da empresa */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Segmento */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      {t('portfolio.segment')}
                    </h4>
                    <p className="text-sm text-foreground">{company.segment}</p>
                  </div>
                  
                  {/* Unidades - Com destaque melhorado para boa visibilidade */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      {t('portfolio.units')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.locations.map((location, i) => (
                        <Badge key={i} className="text-sm px-2.5 py-1 bg-muted text-foreground font-normal">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Público-alvo - Com tamanho adequado para evitar saltos */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">
                      {t('portfolio.audience')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.clients.map((client, i) => (
                        <Badge key={i} variant="outline" className="text-sm px-2.5 py-1 text-foreground font-normal whitespace-normal">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}