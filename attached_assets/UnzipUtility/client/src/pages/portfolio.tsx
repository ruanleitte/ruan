import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Portfolio() {
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
        name: "Stone Pagamentos",
        period: "Out 2019 - Ago 2020", 
        industry: "Serviços Financeiros e Tecnologia",
        segment: "Meios de pagamento e serviços financeiros",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Pequenos e médios empreendedores", "E-commerces"],
        category: "logistica",
        color: "#047857"
      },
      {
        id: 3,
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
        id: 4,
        name: "GOL Linhas Aéreas",
        period: "Jan 2019 - Jul 2019",
        industry: "Transporte Aéreo",
        segment: "Transporte aéreo de passageiros e cargas",
        locations: ["60+ destinos no Brasil e exterior"],
        clients: ["Viajantes a negócios", "Turistas"],
        category: "servicos",
        color: "#B45309"
      },
      {
        id: 5,
        name: "Agência Digital",
        period: "2022 - Presente", 
        industry: "Desenvolvimento de Software",
        segment: "Desenvolvimento web e design digital",
        locations: ["Remoto - Nacional"],
        clients: ["PMEs", "Profissionais liberais"],
        category: "tecnologia",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Atacadão",
        period: "Set 2012 - Mai 2013",
        industry: "Varejo e Atacado",
        segment: "Supermercado atacadista",
        locations: ["Salvador"],
        clients: ["Consumidores finais", "Pequenos comerciantes"],
        category: "servicos",
        color: "#2563EB"
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
        name: "Mills Estruturas",
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
        name: "Stone Payments",
        period: "Oct 2019 - Aug 2020", 
        industry: "Financial Services & Technology",
        segment: "Payment solutions and financial services",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Small and medium entrepreneurs", "E-commerce"],
        category: "logistica",
        color: "#047857"
      },
      {
        id: 3,
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
        id: 4,
        name: "GOL Airlines",
        period: "Jan 2019 - Jul 2019",
        industry: "Air Transportation",
        segment: "Passenger and cargo air transport",
        locations: ["60+ destinations in Brazil and abroad"],
        clients: ["Business travelers", "Tourists"],
        category: "servicos",
        color: "#B45309"
      },
      {
        id: 5,
        name: "Digital Agency",
        period: "2022 - Present", 
        industry: "Software Development",
        segment: "Web development and digital design",
        locations: ["Remote - National"],
        clients: ["SMEs", "Independent professionals"],
        category: "tecnologia",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Atacadão",
        period: "Sep 2012 - May 2013",
        industry: "Retail and Wholesale",
        segment: "Wholesale supermarket",
        locations: ["Salvador"],
        clients: ["End consumers", "Small businesses"],
        category: "servicos",
        color: "#2563EB"
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
        name: "Stone Pagamentos",
        period: "Oct 2019 - Ago 2020", 
        industry: "Servicios Financieros y Tecnología",
        segment: "Soluciones de pago y servicios financieros",
        locations: ["Salvador", "São Paulo", "Rio de Janeiro", "Brasília"],
        clients: ["Pequeños y medianos emprendedores", "E-commerce"],
        category: "logistica",
        color: "#047857"
      },
      {
        id: 3,
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
        id: 4,
        name: "GOL Líneas Aéreas",
        period: "Ene 2019 - Jul 2019",
        industry: "Transporte Aéreo",
        segment: "Transporte aéreo de pasajeros y carga",
        locations: ["60+ destinos en Brasil y extranjero"],
        clients: ["Viajeros de negocios", "Turistas"],
        category: "servicos",
        color: "#B45309"
      },
      {
        id: 5,
        name: "Agencia Digital",
        period: "2022 - Presente", 
        industry: "Desarrollo de Software",
        segment: "Desarrollo web y diseño digital",
        locations: ["Remoto - Nacional"],
        clients: ["PyMEs", "Profesionales independientes"],
        category: "tecnologia",
        color: "#BE185D"
      },
      {
        id: 6,
        name: "Atacadão",
        period: "Sep 2012 - May 2013",
        industry: "Venta al por menor y al por mayor",
        segment: "Supermercado mayorista",
        locations: ["Salvador"],
        clients: ["Consumidores finales", "Pequeños comerciantes"],
        category: "servicos",
        color: "#2563EB"
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
      
      <Tabs defaultValue="cards" className="mb-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-10">
          <TabsTrigger value="cards">{t('portfolio.viewCards')}</TabsTrigger>
          <TabsTrigger value="list">{t('portfolio.viewList')}</TabsTrigger>
        </TabsList>

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

        {/* Visualização em cards - Design moderno e atraente */}
        <TabsContent value="cards" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="relative group h-[220px] overflow-hidden rounded-xl border border-gray-200 shadow-sm transition-all hover:shadow-md">
                  {/* Faixa colorida na parte superior */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5 z-10" 
                    style={{ backgroundColor: company.color }}
                  ></div>
                  
                  {/* Background gradiente suave */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
                  
                  {/* Conteúdo principal */}
                  <div className="relative p-5 h-full flex flex-col">
                    <div className="mb-auto">
                      <div className="flex items-start justify-between mb-3">
                        <div className="max-w-[70%]">
                          <h3 className="font-bold text-lg truncate">{company.name}</h3>
                          <p className="text-xs text-muted-foreground">{company.period}</p>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium border-0 whitespace-nowrap"
                          style={{ 
                            backgroundColor: `${company.color}15`, 
                            color: company.color 
                          }}
                        >
                          {company.industry.length > 12 ? company.industry.slice(0, 12) + "..." : company.industry}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-1 mb-4 opacity-70">
                        {company.segment}
                      </p>
                    </div>
                    
                    <div className="space-y-3 pt-2 border-t border-gray-100">
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <h4 className="text-xs font-medium text-gray-500">
                            {t('portfolio.units')}
                          </h4>
                          {company.locations.length > 3 && (
                            <span className="text-[10px] text-primary font-medium">
                              +{company.locations.length - 3} {t('portfolio.more')}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {company.locations.slice(0, 3).map((location, i) => (
                            <Badge key={i} variant="secondary" className="text-xs font-normal px-2 py-0 h-5 bg-gray-100/80 truncate max-w-[80px]">
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <h4 className="text-xs font-medium text-gray-500">
                            {t('portfolio.audience')}
                          </h4>
                          {company.clients.length > 2 && (
                            <span className="text-[10px] text-primary font-medium">
                              +{company.clients.length - 2} {t('portfolio.more')}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {company.clients.slice(0, 2).map((client, i) => (
                            <Badge key={i} variant="outline" className="text-xs font-normal px-2 py-0 h-5 border-gray-200 truncate max-w-[80px]">
                              {client}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Visualização em lista - Design moderno e consistente com cards */}
        <TabsContent value="list" className="mt-0">
          <div className="space-y-3">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  {/* Faixa colorida na lateral */}
                  <div 
                    className="absolute top-0 bottom-0 left-0 w-1 z-10" 
                    style={{ backgroundColor: company.color }}
                  ></div>
                  
                  <div className="py-4 px-5 pl-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="sm:w-1/3">
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium border-0 mb-1"
                          style={{ 
                            backgroundColor: `${company.color}15`, 
                            color: company.color 
                          }}
                        >
                          {company.industry.length > 12 ? company.industry.slice(0, 12) + "..." : company.industry}
                        </Badge>
                        <h3 className="text-lg font-bold leading-tight truncate max-w-[200px]">{company.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{company.period}</p>
                      </div>
                      
                      <div className="sm:w-2/3 flex flex-wrap gap-4">
                        <div className="min-w-[140px]">
                          <h4 className="text-xs font-medium text-gray-500 mb-1">{t('portfolio.segment')}:</h4>
                          <p className="text-xs text-muted-foreground line-clamp-1">{company.segment}</p>
                        </div>
                        
                        <div className="min-w-[140px]">
                          <h4 className="text-xs font-medium text-gray-500 mb-1">{t('portfolio.units')}:</h4>
                          <div className="flex flex-wrap gap-1">
                            {company.locations.slice(0, 2).map((location, i) => (
                              <Badge key={i} variant="secondary" className="text-xs font-normal px-2 py-0 h-5 bg-gray-100/80">
                                {location}
                              </Badge>
                            ))}
                            {company.locations.length > 2 && (
                              <Badge variant="secondary" className="text-xs font-normal px-2 py-0 h-5 bg-gray-100/80">
                                +{company.locations.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="min-w-[140px]">
                          <h4 className="text-xs font-medium text-gray-500 mb-1">{t('portfolio.audience')}:</h4>
                          <div className="flex flex-wrap gap-1">
                            {company.clients.length > 0 && (
                              <Badge key={0} variant="outline" className="text-xs font-normal px-2 py-0 h-5 border-gray-200">
                                {company.clients[0]}
                              </Badge>
                            )}
                            {company.clients.length > 1 && (
                              <Badge variant="outline" className="text-xs font-normal px-2 py-0 h-5 border-gray-200">
                                +{company.clients.length - 1}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
